import { Injectable } from '@nestjs/common';
import { UserRepository } from './user/user.repository';

@Injectable()
export class AuthService {
  constructor(private userRepository: UserRepository) {}

  async validateBasicToken(basicToken: string) {
    const [username, password] = Buffer.from(basicToken, 'base64')
      .toString()
      .split(':');

    const user = await this.userRepository.findUser(username);

    return user && user.password === password;
  }
}
