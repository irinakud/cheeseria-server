import { ApiProperty } from '@nestjs/swagger';

export class Cheese {
  @ApiProperty({ example: '1', description: 'The id of the Cheese' })
  id: string;

  @ApiProperty({ example: 'gauda', description: 'The type of the Cheese' })
  type: string;

  @ApiProperty({
    example: 150,
    description: 'The price of the Cheese per kilo',
  })
  pricePerKilo: number;

  @ApiProperty({
    example: 'yellow',
    description: 'The color of the Cheese',
  })
  color: string;

  @ApiProperty({
    example: 'http://file.jpeg',
    description: 'The image of the Cheese to display',
  })
  pictureFile: string;
}
