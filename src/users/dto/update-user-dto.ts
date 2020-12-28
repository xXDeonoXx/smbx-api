import { IsEmail, IsNotEmpty } from 'class-validator';

export class UpdateUserDto {
  name: string;
  nickname: string;
}
