import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { CategoryEntity } from './category.entity';

@Entity('inventory')
export class InventoryEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column({ type: 'float' })
  quantity: number;

  @Column()
  unity: string;

  @ManyToOne(() => CategoryEntity, (category) => category.id)
  category?: CategoryEntity;

  @Column()
  createdAt?: Date;

  @Column()
  updatedAt?: Date;
}
