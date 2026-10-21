import { Body, Controller, HttpCode, Post } from '@nestjs/common';
import { UserService } from './user.service.js';
import { RegisterUserRequest, UserResponse } from '../model/user.model.js';
import { WebResponse } from '../model/web.model.js';

@Controller('/api/users')
export class UserController {
  constructor(private userService: UserService) {}

  @Post()
  @HttpCode(200)
  async register(
    @Body() request: RegisterUserRequest,
  ): Promise<WebResponse<UserResponse>> {
    const result = await this.userService.register(request);

    return {
      data: result,
    };
  }
}
