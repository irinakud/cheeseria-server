import { Test, TestingModule } from '@nestjs/testing';
import { CheesesController } from './cheeses.controller';
import { CheesesService } from './cheeses.service';

describe('CheesesController', () => {
  let controller: CheesesController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [CheesesController],
      providers: [CheesesService],
    }).compile();

    controller = module.get<CheesesController>(CheesesController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
