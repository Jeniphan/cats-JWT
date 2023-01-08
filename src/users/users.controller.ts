import { Body, Controller, Post } from '@nestjs/common';
import * as bcrypt from 'bcrypt';
import { UsersService } from './users.service';

@Controller('users')
export class UsersController {
  constructor(private usersService: UsersService) { }
  @Post('/signup')
  async createUsser(
    @Body('username') username: string,
    @Body('password') password: string,
  ): Promise<any> {
    try {
      let hasPass = await bcrypt.hash(password, 10);
      const data = {
        username: username,
        password: hasPass
      }
      const result = await this.usersService.createUser(data)
      return result;
    } catch {
      return "Create user error"
    }
  }

}
