import { Companies } from 'src/companies/entities/companies.entity';
import { Column, CreateDateColumn, DeleteDateColumn, Entity, ManyToOne, PrimaryGeneratedColumn, UpdateDateColumn } from 'typeorm';

export type TypeOfBusiness = "Simples Nacional" | "Lucro Presumido" | "Lucro Real";

@Entity()
export class Stores {
  @PrimaryGeneratedColumn('increment')
  store_id: number;

  @ManyToOne(() => Companies, (company) => company.company_id)
  store_company_id: number;

  @Column()
  store_postal_code: number;

  @Column()
  store_address: string;

  @Column({ nullable: true })
  store_adress_number: string;

  @Column({ nullable: true })
  store_adress_neighborhood: string;

  @Column({ nullable: true })
  store_adress_city: string;

  @Column({ nullable: true })
  store_adress_state: string;

  @CreateDateColumn()
  company_created_at: Date;

  @UpdateDateColumn()
  company_updated_at: Date;

  @DeleteDateColumn()
  company_deleted_at: Date;

}
