import { IsNotEmpty, IsEmail } from 'class-validator';

export class CreateUserDto {
  @IsNotEmpty() name: string;
  @IsNotEmpty() password: string;
  @IsNotEmpty() @IsEmail() email: string;
  nickname: string;
}
