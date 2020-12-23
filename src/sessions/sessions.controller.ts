import { Body, Controller, Post } from '@nestjs/common';
import {
  AuthenticationRequest,
  AuthenticationResponse,
  SessionsService,
} from './sessions.service';

@Controller('sessions')
export class SessionsController {
  constructor(private sessionsService: SessionsService) {}

  @Post()
  async authenticate(
    @Body() auth: AuthenticationRequest,
  ): Promise<AuthenticationResponse> {
    return this.sessionsService.authenticate(auth);
  }
}
