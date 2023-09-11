import { Column, CreateDateColumn, DeleteDateColumn, Entity, PrimaryGeneratedColumn, UpdateDateColumn } from 'typeorm';

export type MaritalFormat = "Solteiro(a)" | "Divorciado(a)" | "Separado(a)" | "Viúvo(a)" | "N/A";
export type GenderFormat = "Masculino" | "Feminino" | "N/A";

@Entity()
export class Clients {
  @PrimaryGeneratedColumn('increment')
  client_id: number;

  @Column()
  client_first_name: string;

  @Column()
  client_last_name: string;

  @Column({
      type: "enum",
      enum: ["Solteiro(a)", "Divorciado(a)", "Separado(a)", "Viúvo(a)", "N/A"],
      default: "N/A"
  })
  client_marital_status: MaritalFormat;

  @Column({
      type: "enum",
      enum: ["Masculino", "Feminino", "N/A"],
      default: "N/A"
  })
  client_gender: GenderFormat;

  @Column({ nullable: true })
  client_identification: number;

  @Column({ nullable: true })
  client_birth_date: Date;

  @Column({ nullable: true })
  client_nationality: string;

  @Column({ nullable: true })
  client_father: string;

  @Column({ nullable: true })
  client_mother: string;

  @CreateDateColumn()
  client_created_at: Date;

  @UpdateDateColumn()
  client_updated_at: Date;

  @DeleteDateColumn()
  client_deleted_at: Date;

}
