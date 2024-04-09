import { PartialType } from '@nestjs/mapped-types';
import { CreateProductDto } from './create-product.dto';
import { IsNumber, IsPositive } from 'class-validator';

export class UpdateProductDto extends PartialType(CreateProductDto) {
  //Se añadio en consecuencia de convertir la app a microservice
  @IsNumber()
  @IsPositive()
  id: number;
}
