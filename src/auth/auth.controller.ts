import { Body, Controller, Post } from '@nestjs/common';

import { AuthService } from './auth.service';
import { SignInDto } from '../tasks/dto/signin.dto';
import { CreateUserDto } from './dto/create-user.dto';

@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  @Post('signup')
  signUp(@Body() creatUserDto: CreateUserDto) {
    return this.authService.signUp(creatUserDto);
  }

  @Post('login')
  signIn(@Body() signInDto: SignInDto) {
    return this.authService.signIn(signInDto);
  }
}
