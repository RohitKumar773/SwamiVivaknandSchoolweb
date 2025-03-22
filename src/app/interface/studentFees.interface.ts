export interface StudentFee {
    id: number;
    std_name: string;
    class: string;
    std_roll: string;
    fee_date: string;
    amount: number;
    contact: string;
    admin_id_fk: number;
}

export interface StudentFeeRes {
    success: number;
    data: StudentFee[];
}
