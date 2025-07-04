import { Test, TestingModule } from '@nestjs/testing';
import { RidersServiceController } from './riders-service.controller';
import { RidersServiceService } from './riders-service.service';

describe('RidersServiceController', () => {
  let ridersServiceController: RidersServiceController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [RidersServiceController],
      providers: [RidersServiceService],
    }).compile();

    ridersServiceController = app.get<RidersServiceController>(RidersServiceController);
  });

  describe('root', () => {
    it('should return "Hello World!"', () => {
      expect(ridersServiceController.getHello()).toBe('Hello World!');
    });
  });
});
