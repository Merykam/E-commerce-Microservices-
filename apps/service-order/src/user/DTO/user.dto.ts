import { IsEmail, IsInt, IsNotEmpty, IsString } from 'class-validator';

export class UserDTO {
  @IsInt({ message: 'id should be an integer' })
  @IsNotEmpty({ message: 'id is required' })
  id: number;

  @IsEmail()
  @IsNotEmpty({message : "Email is required"})
  email: string;

  @IsString({message : "name should be a string "})
  @IsNotEmpty({message : "Name is required"})
  name: string;
}
