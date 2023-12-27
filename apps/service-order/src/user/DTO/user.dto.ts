import { IsEmail, IsInt, IsNotEmpty, IsString } from 'class-validator';

export class UserDTO {
  @IsInt()
  @IsNotEmpty()
  id: number;

  @IsEmail()
  @IsNotEmpty()
  email: string;

  @IsString()
  @IsNotEmpty()
  name: string;
}
