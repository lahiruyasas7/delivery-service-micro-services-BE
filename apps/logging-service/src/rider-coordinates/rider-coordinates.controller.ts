import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { RiderCoordinatesService } from './rider-coordinates.service';
import { CreateCoordinatesDTO } from '../dto/create-coordinate.dto';

@Controller('rider-coordinates')
export class RiderCoordinatesController {
  constructor(private readonly riderCoordinatesService: RiderCoordinatesService) {}

  @Get(':id')
  async getRiderCoordinates(@Param() param: any) { 
    return await this.riderCoordinatesService.getRidersCoordinates(param.id);
  }

  @Post('create')
  async createRiderCoordinates(@Body() createCoordinatesDTO: CreateCoordinatesDTO) {
    return await this.riderCoordinatesService.saveRiderCoordinates(createCoordinatesDTO);
  }
}
