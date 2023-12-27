import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { UserDTO } from './DTO';

@Injectable()
export class UserService {
  constructor(private prisma: PrismaService) {}

  async createUser(data: UserDTO) {
    const insertedUser = await this.prisma.user.create({ data });
    return insertedUser;
  }

  async updateUser(id: number, data: UserDTO) {
    const updatedUser = await this.prisma.user.update({
      where: { id },
      data : {
        email : data.email,
        name: data.name
      },
    });
    return updatedUser
  }

  async deleteUser(id: number) {
    const deletedUser = await this.prisma.user.delete({
      where: { id }
    });
    return deletedUser
  }
}
