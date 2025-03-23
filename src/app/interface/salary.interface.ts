export interface ApiResponseForEmp {
    success: number;
    message: string;
    data: EmployeeData;
}

export interface EmployeeData {
    source: string;
    id: number;
    name: string;
    contact_no: number;
}

export interface SalaryRecord {
    id: number;
    emp_id: number;
    contact_no: string;
    amount: string;
    month: string;
    year: string;
    admin_id_fk: number;
    name: string;
    cur_date: string
}

export interface ApiResponseSalary {
    success: number;
    message: string;
    data: SalaryRecord[];
}
