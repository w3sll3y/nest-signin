import { Controller, Post, Body } from '@nestjs/common';
import { SigninDto } from './dto/signin.dto';
import { SignupDto } from './dto/signup.dto';
import { User } from './models/users.model';
import { UsersService } from './users.service';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) { }

  @Post('signup')
  public async signup(@Body() signupDto: SignupDto): Promise<User> {
    return this.usersService.signup(signupDto);
  }

  @Post('sigin')
  public async singin(@Body() signinDto: SigninDto): Promise<{ name: string; jwtToken: string; email: string }> {
    return this.usersService.signin(signinDto);
  }
}
