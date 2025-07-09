import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { RiderCoordinate } from '../schemas/rider-coordinates.schema';
import { Model } from 'mongoose';
import { CreateCoordinatesDTO } from '../dto/create-coordinate.dto';

@Injectable()
export class RiderCoordinatesService {
  constructor(
    @InjectModel(RiderCoordinate.name)
    private readonly riderCoordinateModel: Model<RiderCoordinate>,
  ) {}

    async getRidersCoordinates() {
        return await this.riderCoordinateModel.find();
    }
  async saveRiderCoordinates(createRiderCoordinatesDto: CreateCoordinatesDTO) {
    return await this.riderCoordinateModel.create(createRiderCoordinatesDto);
  }
}
