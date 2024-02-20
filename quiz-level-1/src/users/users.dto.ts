import { OmitType } from '@nestjs/mapped-types';
import {
  IsDateString,
  IsEmail,
  IsEnum,
  IsInt,
  IsNotEmpty,
  IsNumber,
  Max,
  Min,
} from 'class-validator';
import { MAX_AGE, MIN_AGE } from 'src/constants/age.constant';
import { Roles } from 'src/enums/roles.enum';

export class UserDto {
  id?: number;

  @IsNotEmpty()
  nama: string;

  @IsNotEmpty()
  @IsEmail()
  email: string;

  @IsNotEmpty()
  @IsNumber()
  @IsInt()
  @Min(MIN_AGE)
  @Max(MAX_AGE)
  umur: number;

  // to do : cari cara untuk validasi tanggal_lahir (dengan tipe data string)
  // sehingga bisa menyesuaikan dengan MIN_AGE dan MAX_AGE
  @IsNotEmpty()
  @IsDateString()
  tanggal_lahir: string;

  @IsNotEmpty()
  @IsEnum(Roles)
  role: string;
}

export class CreateUserDto extends OmitType(UserDto, ['id']) {}
export class UpdateUserDto extends OmitType(UserDto, ['id']) {}
