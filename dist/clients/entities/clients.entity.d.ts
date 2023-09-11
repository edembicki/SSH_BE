export declare type MaritalFormat = "Solteiro(a)" | "Divorciado(a)" | "Separado(a)" | "Viúvo(a)" | "N/A";
export declare type GenderFormat = "Masculino" | "Feminino" | "N/A";
export declare class Clients {
    client_id: number;
    client_first_name: string;
    client_last_name: string;
    client_marital_status: MaritalFormat;
    client_gender: GenderFormat;
    client_identification: number;
    client_birth_date: Date;
    client_nationality: string;
    client_father: string;
    client_mother: string;
    client_created_at: Date;
    client_updated_at: Date;
    client_deleted_at: Date;
}
