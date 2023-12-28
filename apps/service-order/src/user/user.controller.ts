import {
  Body,
  Controller,
  Delete,
  Param,
  Patch,
  Post,
} from '@nestjs/common';

import { UserService } from './user.service';

@Controller('user')
export class UserController {
  constructor(private UserService: UserService) {}

  @Post('')
  createUser() {
    return 'you get there';
  }

  @Patch(':id')
  updateUser(@Param('id') id: String, @Body() data: any) {
    return { id, data };
  }

  @Delete(':id')
  deleteUser(@Param('id') id: String) {}
}
