import { IsNotEmpty, IsEmail, IsUrl } from 'class-validator';

export class UpdateLevelDto {
  @IsNotEmpty() name: string;
}
