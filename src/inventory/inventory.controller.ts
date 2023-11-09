import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { InventoryService } from './inventory.service';
import { CreateInventoryDto } from './dto/create-inventory.dto';
import { UpdateInventoryDto } from './dto/update-inventory.dto';
import { CreateCategoryDto } from './dto/create-category.dto';
import { UnknownException } from 'src/service/exceptions/unknown.exception';
import { UpdateCategoryDto } from './dto/update-category.dto';

@Controller('inventory')
export class InventoryController {
  constructor(private readonly inventoryService: InventoryService) {}

  @Post()
  create(@Body() createInventoryDto: CreateInventoryDto) {
    try {
      return this.inventoryService.create(createInventoryDto);
    } catch (error: any) {
      throw new UnknownException(error.message);
    }
  }

  @Post('category')
  createCategory(@Body() createCategoryDto: CreateCategoryDto) {
    try {
      return this.inventoryService.createCategory(createCategoryDto);
    } catch (error: any) {
      throw new UnknownException(error.message);
    }
  }

  @Get()
  findAll() {
    try {
      return this.inventoryService.findAll();
    } catch (error: any) {
      throw new UnknownException(error.message);
    }
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    try {
      return this.inventoryService.findOne(+id);
    } catch (error: any) {
      throw new UnknownException(error.message);
    }
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateInventoryDto: UpdateInventoryDto,
  ) {
    try {
      return this.inventoryService.update(+id, updateInventoryDto);
    } catch (error: any) {
      throw new UnknownException(error.message);
    }
  }

  @Patch('category/:id')
  updateCategory(
    @Param('id') id: string,
    @Body() updateCategoryDto: UpdateCategoryDto,
  ) {
    try {
      return this.inventoryService.updateCategory(+id, updateCategoryDto);
    } catch (error: any) {
      throw new UnknownException(error.message);
    }
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    try {
      return this.inventoryService.remove(+id);
    } catch (error: any) {
      throw new UnknownException(error.message);
    }
  }
}
