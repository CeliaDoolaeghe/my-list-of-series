import {
  CanActivate,
  ExecutionContext,
  Injectable,
  UnauthorizedException,
} from '@nestjs/common';
import { AuthService } from './auth.service';
import { Request } from 'express';

@Injectable()
export class AuthGuard implements CanActivate {
  constructor(private authService: AuthService) {}

  async canActivate(context: ExecutionContext): Promise<boolean> {
    const request = context.switchToHttp().getRequest<Request>();

    if (!request.headers.authorization) {
      throw new UnauthorizedException();
    }

    const [basic, token] = request.headers.authorization.split(' ');

    const isValidToken = await this.authService.validateBasicToken(token);
    if (basic !== 'Basic' || !isValidToken) {
      throw new UnauthorizedException();
    }

    return true;
  }
}
