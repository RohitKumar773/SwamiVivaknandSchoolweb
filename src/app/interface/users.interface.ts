export interface User {
    id: string;
    name: string;
    email: string;
    mobile: string;
    adhar: string;
    dob: string;
    password: string;
    gender: string;
    role: string;
    profile_img: string;
    role_id_fk: string;
    admin_id_fk: string;
}

export interface userRes {
    success: number;
    data: User[];
}