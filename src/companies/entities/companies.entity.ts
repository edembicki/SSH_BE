import { Column, CreateDateColumn, DeleteDateColumn, Entity, PrimaryGeneratedColumn, UpdateDateColumn } from 'typeorm';

export type TypeOfBusiness = "Simples Nacional" | "Lucro Presumido" | "Lucro Real";

@Entity()
export class Companies {
  @PrimaryGeneratedColumn('increment')
  company_id: number;

  @Column({
      type: "enum",
      enum: ["Simples Nacional", "Lucro Presumido", "Lucro Real"],
      default: "Simples Nacional"
  })
  company_type_of_businnes: TypeOfBusiness;

  @Column()
  company_corporate_name: string;

  @Column()
  company_name: string;

  @Column({ nullable: true })
  company_state_registration: string;

  @Column({ nullable: true })
  company_municipal_registration: string;

  @Column({ nullable: true })
  company_incorporation_date: Date;

  @CreateDateColumn()
  company_created_at: Date;

  @UpdateDateColumn()
  company_updated_at: Date;

  @DeleteDateColumn()
  company_deleted_at: Date;

}
