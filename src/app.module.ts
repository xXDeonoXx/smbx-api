import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { SessionsModule } from './sessions/sessions.module';
import { UsersModule } from './users/users.module';

@Module({
  imports: [UsersModule, SessionsModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
