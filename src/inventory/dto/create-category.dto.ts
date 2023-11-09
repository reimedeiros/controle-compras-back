import { IsDate, IsOptional, IsString } from 'class-validator';

export class CreateCategoryDto {
  @IsOptional()
  id?: number;

  @IsString()
  name: string;

  @IsDate()
  @IsOptional()
  createdAt?: Date;

  @IsDate()
  @IsOptional()
  updatedAt?: Date;
}
