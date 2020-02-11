import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { UserService } from '../services/users.service';
import { User } from '../models/user.model';


@Controller('user')
export class UserController {
  constructor(private service: UserService) {
  }

  @Get('findById/:id')
  getId(@Param() params) {
    return this.service.findById(params.id);
  }

  @Get('')
  get() {
    return this.service.findAll();
  }

  @Get('findByAccount/:account')
  getAccount(@Param() params) {
    return this.service.findByAccount(params.account);
  }

  @Post('create')
  create(@Body() user: User) {
    return this.service.create(user);
  }

  @Put('update')
  update(@Body() user: User) {
    return this.service.update(user);
  }

  @Delete('delete/:id')
  remove(@Param() params) {
    return this.service.remove(params.id);
  }
}