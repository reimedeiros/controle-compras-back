import { IsDate, IsInt, IsOptional, IsString } from 'class-validator';

export class CreateInventoryDto {
  @IsOptional()
  id?: number;

  @IsString()
  name: string;

  @IsInt()
  quantity: number;

  @IsInt()
  categoryId?: number;

  @IsDate()
  @IsOptional()
  createdAt?: Date;

  @IsDate()
  @IsOptional()
  updatedAt?: Date;
}
