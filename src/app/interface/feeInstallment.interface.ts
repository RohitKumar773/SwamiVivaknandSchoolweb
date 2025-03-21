export interface StudentFeeInstallment {
    id: number;
    class: string;
    total_fees: number;
    first_instalment: number;
    second_installment: number;
    admin_id_fk: number;
}

export interface StudentFeeInstallmentRes {
    success: number;
    data: StudentFeeInstallment[];
}