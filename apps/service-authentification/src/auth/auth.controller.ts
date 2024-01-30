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
  UseGuards,
  SetMetadata,
  Redirect,
} from '@nestjs/common';
import { AuthService } from './auth.service';
import { LoginAuthDto, UpdateAuthDto, CreateAuthDto } from './dto';
import { Response } from 'express';
import { UseInterceptors } from '@nestjs/common';
import { CacheInterceptor, CacheKey } from '@nestjs/cache-manager';
import { Roles } from '../roles/role.enum';
import { AuthGuard } from '../guards/AuthGuard';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('register')
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
  @UseGuards(AuthGuard)
  @SetMetadata('roles', [Roles.Admin])
  async findAll() {
    return await this.authService.findAll();
  }

  @Post('login')
  async login(
    @Res({ passthrough: true }) res: Response,
    @Body() loginAuthDto: LoginAuthDto,
  ) {
    const user = await this.authService.login(loginAuthDto);

    if (!user.status) {
      return res.status(HttpStatus.BAD_REQUEST).json({
        message: user.message,
      });
    }

    return res
      .cookie('jwt', user.access_token, {
        httpOnly: true,
        secure: false,
        sameSite: 'lax',
      })
      .status(HttpStatus.CREATED)
      .json({
        data: user.info,
      });
  }

  @Get('verify-email/:email/:token')
  async verifyEmail(
    @Res() res: Response,
    @Param('email') email: string,
    @Param('token') token: string,
  ) {
    const user = await this.authService.verifyEmail(email, token);

    return res.redirect(HttpStatus.CREATED, 'http://localhost:3000/auth/login');
  }
  @Get('forget-password/:email')
  async forgetPassword(@Res() res: Response, @Param('email') email: string) {
    return email;
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
