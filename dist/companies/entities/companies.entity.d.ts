export declare type TypeOfBusiness = "Simples Nacional" | "Lucro Presumido" | "Lucro Real";
export declare class Companies {
    company_id: number;
    company_type_of_businnes: TypeOfBusiness;
    company_corporate_name: string;
    company_name: string;
    company_state_registration: string;
    company_municipal_registration: string;
    company_incorporation_date: Date;
    company_created_at: Date;
    company_updated_at: Date;
    company_deleted_at: Date;
}
