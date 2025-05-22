import { Injectable } from '@nestjs/common';
import { CreateInventoryDto } from './dto/create-inventory.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { InventoryEntity } from './entities/inventory.entity';
import { CategoryEntity } from './entities/category.entity';
import { Repository } from 'typeorm';
import { CreateCategoryDto } from './dto/create-category.dto';
import { UpdateCategoryDto } from './dto/update-category.dto';
import { inventoryInterface } from '../service/interfaces/inventory.interface';
import { UpdateInventoryDto } from './dto/update-inventory.dto';

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
    const data = await this.inventoryRepository.find({
      relations: ['category'],
    });

    return data;
  }

  async findAllCategories() {
    const data = await this.categoryRepository.find();

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

  async updateAmount(id: number, updateInventoryDto: inventoryInterface) {
    const product: UpdateInventoryDto = await this.inventoryRepository.findOne({
      where: { id },
    });

    if (updateInventoryDto.isSum) {
      product.quantity = product.quantity + updateInventoryDto.amount;
      return this.inventoryRepository.update({ id }, { ...product });
    }

    product.quantity = product.quantity - updateInventoryDto.amount;
    updateInventoryDto.updatedAt = new Date(Date.now());
    return this.inventoryRepository.update({ id }, { ...product });
  }

  updateCategory(id: number, updateCategoryDto: UpdateCategoryDto) {
    updateCategoryDto.updatedAt = new Date(Date.now());
    return this.categoryRepository.update({ id }, updateCategoryDto);
  }

  remove(id: number) {
    return this.inventoryRepository.delete({ id });
  }
}
