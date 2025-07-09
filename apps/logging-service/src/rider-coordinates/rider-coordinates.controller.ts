import { Body, Controller, Get, Post } from '@nestjs/common';
import { RiderCoordinatesService } from './rider-coordinates.service';
import { CreateCoordinatesDTO } from '../dto/create-coordinate.dto';

@Controller('rider-coordinates')
export class RiderCoordinatesController {
  constructor(private readonly riderCoordinatesService: RiderCoordinatesService) {}

  @Get('get')
  async getRiderCoordinates() { 
    return await this.riderCoordinatesService.getRidersCoordinates();
  }

  @Post('create')
  async createRiderCoordinates(@Body() createCoordinatesDTO: CreateCoordinatesDTO) {
    return await this.riderCoordinatesService.saveRiderCoordinates(createCoordinatesDTO);
  }
}
