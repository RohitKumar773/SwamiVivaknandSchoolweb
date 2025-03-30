
export interface StudentFee {
    id?: number;
    std_name: string;
    class: string;
    std_roll: number;
    fee_date: string;
    amount: bigint;
    contact: string;
    year: string;
    month: string;
    admin_id_fk: number;
    std_id: number;
}

export interface StudentFeeRes {
    success: number;
    data: StudentFee[];
}
