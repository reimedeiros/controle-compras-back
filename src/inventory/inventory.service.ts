import { Injectable } from '@nestjs/common';
import { CreateInventoryDto } from './dto/create-inventory.dto';
import { UpdateInventoryDto } from './dto/update-inventory.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { InventoryEntity } from './entities/inventory.entity';
import { CategoryEntity } from './entities/category.entity';
import { Repository } from 'typeorm';
import { CreateCategoryDto } from './dto/create-category.dto';
import { UpdateCategoryDto } from './dto/update-category.dto';

@Injectable()
export class InventoryService {
  constructor(
    @InjectRepository(InventoryEntity)
    private inventoryRepository: Repository<InventoryEntity>,
    @InjectRepository(CategoryEntity)
    private categoryRepository: Repository<CategoryEntity>,
  ) {}

  create(createInventoryDto: CreateInventoryDto) {
    createInventoryDto.createdAt = new Date(Date.now());
    createInventoryDto.updatedAt = new Date(Date.now());
    return this.inventoryRepository.save(createInventoryDto);
  }

  createCategory(createCategoryDto: CreateCategoryDto) {
    createCategoryDto.createdAt = new Date(Date.now());
    createCategoryDto.updatedAt = new Date(Date.now());
    return this.categoryRepository.save(createCategoryDto);
  }

  async findAll() {
    const allCategory = await this.categoryRepository.find();
    let data: any = [];
    let dataInventory: any;

    for (let index = 0; index < allCategory.length; index++) {
      if (allCategory[index].name) {
        dataInventory = await this.inventoryRepository.find({
          where: { category: allCategory[index] },
        });

        const obj = {
          category: allCategory[index].name,
          inventory: dataInventory,
        };

        data.push(obj);
      }
    }

    return data;
  }

  findOne(id: number) {
    return this.inventoryRepository.find({
      where: { id },
    });
  }

  update(id: number, updateInventoryDto: UpdateInventoryDto) {
    updateInventoryDto.updatedAt = new Date(Date.now());
    return this.inventoryRepository.update({ id }, updateInventoryDto);
  }

  updateCategory(id: number, updateCategoryDto: UpdateCategoryDto) {
    updateCategoryDto.updatedAt = new Date(Date.now());
    return this.categoryRepository.update({ id }, updateCategoryDto);
  }

  remove(id: number) {
    return this.inventoryRepository.delete({ id });
  }
}
