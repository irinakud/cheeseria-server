import { ApiProperty } from '@nestjs/swagger';
import { IsInt, IsString } from 'class-validator';

export class CreateCheeseDto {
  @ApiProperty({ example: '1', description: 'The id of the Cheese' })
  @IsString()
  readonly id: string;

  @ApiProperty({ example: 'gauda', description: 'The type of the Cheese' })
  @IsString()
  readonly type: string;

  @ApiProperty({ example: 1, description: 'The price of the Cheese per kilo' })
  @IsInt()
  readonly pricePerKilo: number;

  @ApiProperty({
    example: 'yellow',
    description: 'The color of the Cheese',
  })
  @IsString()
  readonly color: string;

  @ApiProperty({
    example: 'http://file.jpeg',
    description: 'The image of the Cheese to display',
  })
  @IsString()
  readonly pictureFile: string;
}
