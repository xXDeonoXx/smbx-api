import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { configService } from './config/config.service';
import { SessionsModule } from './sessions/sessions.module';
import { UsersModule } from './users/users.module';
import { AuthModule } from './auth/auth.module';
import { LevelsModule } from './levels/levels.module';

@Module({
  imports: [
    UsersModule,
    SessionsModule,
    AuthModule,
    TypeOrmModule.forRoot(configService.getTypeOrmConfig()),
    LevelsModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
