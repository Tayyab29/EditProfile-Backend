import { PartialType } from '@nestjs/mapped-types';
import { CreateEditProfileDto } from './create-edit-profile.dto';
import { IsEmail, IsString } from 'class-validator';

export class UpdateEditProfileDto extends PartialType(CreateEditProfileDto) {
  @IsString()
  firstName: string;
  @IsString()
  lastName: string;
  @IsEmail()
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
