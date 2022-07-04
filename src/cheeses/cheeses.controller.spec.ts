import { Test, TestingModule } from '@nestjs/testing';
import { CheesesController } from './cheeses.controller';
import { CheesesService } from './cheeses.service';

describe('CheesesController', () => {
  let controller: CheesesController;
  let service: CheesesService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [CheesesController],
      providers: [CheesesService],
    }).compile();

    controller = module.get<CheesesController>(CheesesController);
    service = module.get<CheesesService>(CheesesService);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });

  describe('findAll', () => {
    it('should return an array of cheeses', async () => {
      const result = [
        {
          id: 'test-id',
          type: 'test-type',
          pricePerKilo: 1,
          pictureFile: 'a-picture',
          color: 'a-color',
        },
      ];
      jest.spyOn(service, 'findAll').mockImplementation(() => result);

      expect(await controller.findAll()).toBe(result);
    });
  });

  // TODO: test the rest of CRUD endpoints
});
