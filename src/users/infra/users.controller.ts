import {
  Body,
  ClassSerializerInterceptor,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  UseInterceptors,
} from '@nestjs/common';
import { CreateUserDto } from '../dto/create-user.dto';
import { FindUserDto } from '../dto/query-user.dto';
import { UpdateUserDto } from '../dto/update-user.dto';
import { UsersService } from '../services/users.service';

@Controller('users')
@UseInterceptors(ClassSerializerInterceptor)
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Post()
  create(@Body() createUserDto: CreateUserDto) {
    return this.usersService.create(createUserDto);
  }

  /* @Req() request: Request */
  @Get()
  findAll(@Param() param: FindUserDto) {
    delete param.password;

    return this.usersService.findAll(param);
  }

  @Get(':id')
  findOne(@Param('id') userId: string) {
    return this.usersService.findOne(userId);
  }

  @Patch(':id')
  update(@Param('id') userId: string, @Body() updateUserDto: UpdateUserDto) {
    return this.usersService.update(userId, updateUserDto);
  }

  @Delete(':id')
  remove(@Param('id') userId: string) {
    return this.usersService.remove(userId);
  }
}
