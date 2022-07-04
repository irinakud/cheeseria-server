import * as request from 'supertest';
import { Test } from '@nestjs/testing';
import { CheesesModule } from './cheeses.module';
import { CheesesService } from './cheeses.service';
import { INestApplication } from '@nestjs/common';

describe('Cheeses', () => {
  let app: INestApplication;
  const cheesesService = {
    findAll: () => [
      {
        id: 'test-id',
        type: 'test-type',
        pricePerKilo: 1,
        pictureFile: 'a-picture',
        color: 'a-color',
      },
    ],
  };

  beforeAll(async () => {
    const moduleRef = await Test.createTestingModule({
      imports: [CheesesModule],
    })
      .overrideProvider(CheesesService)
      .useValue(cheesesService)
      .compile();

    app = moduleRef.createNestApplication();
    await app.init();
  });

  it(`/GET cheeses`, () => {
    return request(app.getHttpServer())
      .get('/cheeses')
      .expect(200)
      .expect(cheesesService.findAll());
  });

  afterAll(async () => {
    await app.close();
  });

  // TODO: test other endpoints
});
