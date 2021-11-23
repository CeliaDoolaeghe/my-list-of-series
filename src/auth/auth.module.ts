import { Global, Module } from '@nestjs/common';
import { UserModule } from './user/user.module';
import { AuthService } from './auth.service';

@Global()
@Module({
  imports: [UserModule],
  providers: [AuthService],
  exports: [AuthService],
})
export class AuthModule {}
