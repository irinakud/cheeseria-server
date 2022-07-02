import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { CheesesService } from './cheeses.service';
import { CreateCheeseDto } from './dto/create-cheese.dto';
import { UpdateCheeseDto } from './dto/update-cheese.dto';

@Controller('cheeses')
export class CheesesController {
  constructor(private readonly cheesesService: CheesesService) {}

  @Post()
  create(@Body() createCheeseDto: CreateCheeseDto) {
    return this.cheesesService.create(createCheeseDto);
  }

  @Get()
  findAll() {
    return this.cheesesService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.cheesesService.findOne(id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateCheeseDto: UpdateCheeseDto) {
    return this.cheesesService.update(id, updateCheeseDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.cheesesService.remove(id);
  }

  //TODO: store cheese images locally, rather than getting them from a remote source,
  //get a cheese image by cheese id endpoint, use the new endpoint in FE instead of picturePath property
}
