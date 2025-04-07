export interface studentApplication {
  id: number;
  name: string;
  email: string;
  mobile: string;
  father_name: string;
  mother_name: string;
  gender: string;
  address: string;
  admin_id_fk: number;
}

export interface studentApplicationRes {
  message: any;
  success: number;
  data: studentApplication[];
}