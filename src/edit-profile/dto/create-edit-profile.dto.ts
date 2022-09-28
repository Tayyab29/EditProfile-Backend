import { IsEmail, IsNotEmpty, IsString, IsNumber } from 'class-validator';

export class CreateEditProfileDto {
  @IsNumber()
  id: number;
  @IsString()
  firstName: string;
  @IsString()
  lastName: string;
  @IsEmail()
  @IsNotEmpty()
  email: string;
  @IsString()
  picture: string;
  @IsString()
  role: string;
  @IsString()
  country: string;
  @IsString()
  timezone: string;
  @IsString()
  bio: string;
}
