import { Injectable } from '@nestjs/common';
import { initialCheeses } from './cheeses.data';
import { CreateCheeseDto } from './dto/create-cheese.dto';
import { UpdateCheeseDto } from './dto/update-cheese.dto';
import { Cheese } from './entities/cheese.entity';

@Injectable()
export class CheesesService {
  // TODO: store cheeses in a database
  private cheeses: Cheese[] = initialCheeses;

  create(createCheeseDto: CreateCheeseDto) {
    this.cheeses.push(createCheeseDto);
    return createCheeseDto;
  }

  findAll() {
    return this.cheeses;
  }

  findOne(id: string) {
    return this.cheeses.find((obj) => obj.id === id);
  }

  update(id: string, updateCheeseDto: UpdateCheeseDto) {
    const index = this.cheeses.findIndex((obj) => obj.id === id);
    if (index >= 0)
      this.cheeses[index] = { ...this.cheeses[index], ...updateCheeseDto };
    return this.cheeses[index];
  }

  remove(id: string) {
    const index = this.cheeses.findIndex((obj) => obj.id === id);
    if (index >= 0) this.cheeses.splice(index, 1);
  }
}
