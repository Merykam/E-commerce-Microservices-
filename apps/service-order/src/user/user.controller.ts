import {
  Body,
  Controller,
  Delete,
  Param,
  ParseIntPipe,
  Patch,
  Post,
} from '@nestjs/common';

import { UserService } from './user.service';
import { UserDTO } from './DTO';

@Controller('user')
export class UserController {
  constructor(private UserService: UserService) {}

  @Post('')
  createUser(@Body() data : UserDTO) {
    return this.UserService.createUser(data);
  }

  @Patch(':id')
  updateUser(@Param('id', ParseIntPipe) id: number, @Body() data: UserDTO) {

    return this.UserService.updateUser(id,data);
  }

  @Delete(':id')
  deleteUser(@Param('id',ParseIntPipe) id: number) {
    return this.UserService.deleteUser(id)
  }
}