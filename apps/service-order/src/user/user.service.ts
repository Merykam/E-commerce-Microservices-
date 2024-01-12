import { ForbiddenException, Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { UserDTO } from './DTO';
import { PrismaClientKnownRequestError } from '@prisma/client/runtime/library';

@Injectable()
export class UserService {
  constructor(private prisma: PrismaService) {}

  async createUser(data: UserDTO) {
    try {
      const insertedUser = await this.prisma.user.create({ data });
      return insertedUser;
    } catch (error) {
      if (
        error instanceof PrismaClientKnownRequestError &&
        error.code === 'P2002'
      )
        throw new ForbiddenException('Credentials taken');
      throw error;
    }
  }

  async updateUser(id: number, data: UserDTO) {
    try {
      const updatedUser = await this.prisma.user.update({
        where: { id },
        data: {
          email: data.email,
          name: data.name,
        },
      });
      return updatedUser;
    } catch (error) {
      if (
        error instanceof PrismaClientKnownRequestError &&
        error.code === 'P2002'
      )
        throw new ForbiddenException('Credentials taken');
      throw error;
    }
  }

  async deleteUser(id: number) {
    const deletedUser = await this.prisma.user.delete({
      where: { id },
    });
    return deletedUser;
  }
}
