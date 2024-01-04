import { Injectable, Inject } from '@nestjs/common';
import { CreateAuthDto, UpdateAuthDto, LoginAuthDto } from './dto';
import { AuthRepository } from './auth.repository';
import * as bcrypt from 'bcrypt';
import { JwtService } from '@nestjs/jwt';
import { CACHE_MANAGER } from '@nestjs/cache-manager';

import { Cache } from 'cache-manager';

@Injectable()
export class AuthService {
  constructor(
    @Inject(CACHE_MANAGER) private readonly cacheManager: Cache,
    private readonly authRepository: AuthRepository,
  ) {}

  async create(createAuthDto: CreateAuthDto) {
    try {
      const salt = await bcrypt.genSalt();
      createAuthDto.password = await bcrypt.hash(createAuthDto.password, salt);

      return await this.authRepository.create(createAuthDto);
    } catch (error) {
      return error;
    }
  }

  async findAll() {
    console.log(1111);

    // try {
    const uy = await this.cacheManager.set('AEZ', 123);
    console.log('set cache');
    console.log(uy);

    const test = await this.cacheManager.get('AZE');
    console.log(test);
    return await this.authRepository.findAll();
    //   } catch (error) {
    //     return error;
    //   }
  }

  async findOne(id: string) {
    try {
      return 'vide';
    } catch (error) {
      return error;
    }
  }

  async update(id: string, updateAuthDto: UpdateAuthDto) {
    try {
      return await this.authRepository.update(id, updateAuthDto);
    } catch (error) {
      return error;
    }
  }

  remove(id: number) {
    return `This action removes a #${id} auth`;
  }

  async login(loginAuthDto: LoginAuthDto) {
    try {
      const user = await this.authRepository.findOneByEmail(loginAuthDto.email);
      if (!user) {
        return [
          {
            message: 'Invalid email',
          },
        ];
      }

      const validPassword = await bcrypt.compare(
        loginAuthDto.password,
        user.password,
      );

      if (!validPassword) {
        return [
          {
            message: 'Invalid password',
          },
        ];
      }

      const payload = {
        username: user.username,
        email: user.email,
        id: user._id,
      };

      return {
        access_token: new JwtService({
          secret: 'secret',
          signOptions: { expiresIn: '2day' },
        }).sign(payload),
      };
    } catch (error) {
      return error;
    }
  }
}
