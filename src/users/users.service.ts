import { Injectable } from '@nestjs/common';

@Injectable()
export class UsersService {
  auth = (): string => {
    return 'using service';
  };
}
