export interface Student {
  id: string;
  name: string;
  email: string;
  mobile: string;
  adhar: string;
  father_name: string;
  mother_name: string;
  password: string;
  profile: string;
  class: string;
  admin_id_fk: string;
  dob: string;
  gender: string;
  transport: string;
  section: string;
  roll_no: string;
  hostel: string;
  address: string;
  addmission_date:string
}
export interface StudentResponse {
  success: number;
  data: Student[];
}
