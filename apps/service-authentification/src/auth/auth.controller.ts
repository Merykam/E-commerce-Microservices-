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

  @Get()
  findAll() {
    return this.authService.findAll();
  }

  @Post('login')
  async login(@Res() res: Response, @Body() loginAuthDto: LoginAuthDto) {
    const user = await this.authService.login(loginAuthDto);

    return res.status(HttpStatus.CREATED).json({
      message: 'User logged in successfully',
      data: user,
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