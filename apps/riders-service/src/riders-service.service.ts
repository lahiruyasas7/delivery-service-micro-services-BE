import { Injectable } from '@nestjs/common';

@Injectable()
export class RidersServiceService {
  getHello(): string {
    return 'Hello World!';
  }
}
