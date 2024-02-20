import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  ParseIntPipe,
  Patch,
  Post,
} from '@nestjs/common';
import { UsersService } from './users.service';
import { IResponse } from 'src/interfaces/response.interface';
import { CreateUserDto, UpdateUserDto } from './users.dto';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Get()
  list() {
    return this.usersService.list();
  }

  @Post()
  create(@Body() createUserDto: CreateUserDto): IResponse {
    return this.usersService.create(createUserDto);
  }

  @Patch(':id')
  update(
    @Param('id', ParseIntPipe) id: number,
    @Body() updateUserDto: UpdateUserDto,
  ): IResponse {
    return this.usersService.update(id, updateUserDto);
  }

  @Delete(':id')
  delete(@Param('id', ParseIntPipe) id: number): IResponse {
    return this.usersService.delete(id);
  }

  @Post('bulk')
  createBulk(@Body() createUserDto: CreateUserDto[]): IResponse {
    return this.usersService.createBulk(createUserDto);
  }

  @Get(':id')
  detail(@Param('id', ParseIntPipe) id: number): IResponse {
    return this.usersService.detail(id);
  }
}
