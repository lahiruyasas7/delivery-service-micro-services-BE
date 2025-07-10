import { Inject, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { RiderCoordinate } from '../schemas/rider-coordinates.schema';
import { Model } from 'mongoose';
import { CreateCoordinatesDTO } from '../dto/create-coordinate.dto';
import { ClientProxy } from '@nestjs/microservices';
import { firstValueFrom } from 'rxjs';

@Injectable()
export class RiderCoordinatesService {
  constructor(
    @InjectModel(RiderCoordinate.name)
    private readonly riderCoordinateModel: Model<RiderCoordinate>,
    @Inject('RIDER_SERVICE') private client: ClientProxy, // this is because we are using a microservice to communicate with the riders service
  ) {} 

  async getRidersCoordinates(riderId) {
    try {
      const coordinate = await this.riderCoordinateModel.find({
        rider: riderId,
      });
      const pattern = { cmd: 'get-rider' };
      const payload = { id: riderId };
      const rider = await firstValueFrom(this.client.send(pattern, payload)); // this will call the riders service to get the rider id
      return { coordinate, rider };
    } catch {
      throw new Error('Error fetching rider coordinates');
    }
  }
  async saveRiderCoordinates(createRiderCoordinatesDto: CreateCoordinatesDTO) {
    return await this.riderCoordinateModel.create(createRiderCoordinatesDto);
  }
}
