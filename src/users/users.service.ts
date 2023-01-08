import { Injectable } from '@nestjs/common';
import { User2Model, UserModel } from './users.model';
import { v4 as uuidv4 } from 'uuid';

@Injectable()
export class UsersService {
  private users = [
    {
      userId: 1,
      username: 'john',
      password: 'changeme',
    },
    {
      userId: 2,
      username: 'maria',
      password: 'guess',
    },
  ];

  async findOne(username: string): Promise<UserModel | undefined> {
    return this.users.find(user => user.username === username);
  }

  async createUser(data: User2Model) {
    let temp = {
      userId: uuidv4(),
      username: data.username,
      password: data.password
    }
    this.users.push(temp)
    return await this.findOne(data.username)
  }
}
