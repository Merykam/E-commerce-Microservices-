import { Injectable } from '@nestjs/common';
import { CreateAuthDto, UpdateAuthDto, LoginAuthDto } from './dto';
import { AuthRepository } from './auth.repository';
import * as bcrypt from 'bcrypt';
import { JwtService } from '@nestjs/jwt';
@Injectable()
export class AuthService {
  constructor(private readonly authRepository: AuthRepository) {}

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
    try {
      return await this.authRepository.findAll();
    } catch (error) {
      return error;
    }
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
