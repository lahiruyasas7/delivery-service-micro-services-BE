import { Controller, Get, Param } from '@nestjs/common';
import { RidersServiceService } from './riders-service.service';
import { MessagePattern } from '@nestjs/microservices';

@Controller('rider')
export class RidersServiceController {
  constructor(private readonly ridersServiceService: RidersServiceService) {}

  // @Get(':id')
  @MessagePattern({ cmd: 'get-rider' })
  async getRiderById(data: any) {
    return Promise.resolve({
      _id: data.id,
      firstName: 'Lahiru',
      lastName: 'Karunathilaka',
      email: 'lahiru@example.com',
    });
  }
}
