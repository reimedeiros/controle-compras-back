import { IsDate, IsDecimal, IsInt, IsOptional, IsString } from 'class-validator';

export class CreateInventoryDto {
  @IsOptional()
  id?: number;

  @IsString()
  name: string;

  @IsDecimal()
  quantity: number;

  @IsString()
  unity: string;

  @IsInt()
  categoryId?: number;

  @IsDate()
  @IsOptional()
  createdAt?: Date;

  @IsDate()
  @IsOptional()
  updatedAt?: Date;
}
