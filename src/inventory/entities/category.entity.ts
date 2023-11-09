import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { InventoryEntity } from './inventory.entity';

@Entity('category')
export class CategoryEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @OneToMany(() => InventoryEntity, (inventory) => inventory.id)
  inventory?: InventoryEntity[];

  @Column()
  createdAt?: Date;

  @Column()
  updatedAt?: Date;
}
