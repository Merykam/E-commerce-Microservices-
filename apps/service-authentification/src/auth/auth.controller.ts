import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  HttpStatus,
  Res,
} from '@nestjs/common';
import { AuthService } from './auth.service';
import { LoginAuthDto, UpdateAuthDto, CreateAuthDto } from './dto';
import { Response } from 'express';
import { UseInterceptors } from '@nestjs/common';
import { CacheInterceptor, CacheKey } from '@nestjs/cache-manager';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post()
  async create(@Res() res: Response, @Body() createAuthDto: CreateAuthDto) {
    const user = await this.authService.create(createAuthDto);

    return res.status(HttpStatus.CREATED).json({
      message: 'User created successfully',
      data: user,
    });
  }

  @UseInterceptors(CacheInterceptor)
  @CacheKey('getCarts')
  @Get()
  async findAll() {
    return await this.authService.findAll();
  }

  @Post('login')
  async login(@Res() res: Response, @Body() loginAuthDto: LoginAuthDto) {
    const user = await this.authService.login(loginAuthDto);

    return res.status(HttpStatus.CREATED).json({
      data: user,
    });
  }

  @Post('verify-email/:email/:token')
  async verifyEmail(
    @Res() res: Response,
    @Param('email') email: string,
    @Param('token') token: string,
  ) {
    const user = await this.authService.verifyEmail(email, token);
    return res.status(HttpStatus.CREATED).json({
      message: 'User verified successfully',
      data: {
        user,
      },
    });
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.authService.findOne(id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateAuthDto: UpdateAuthDto) {
    return this.authService.update(id, updateAuthDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.authService.remove(+id);
  }
}
