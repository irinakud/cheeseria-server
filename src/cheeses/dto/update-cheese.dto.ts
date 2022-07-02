import { PartialType } from '@nestjs/swagger';
import { CreateCheeseDto } from './create-cheese.dto';

export class UpdateCheeseDto extends PartialType(CreateCheeseDto) {}
