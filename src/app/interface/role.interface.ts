export interface Role {
    id: number;
    role_name: string;
    admin_id_fk: number;
}

export interface roleRes{
    success:number;
    data:Role[];
}