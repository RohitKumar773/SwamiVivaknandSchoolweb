export interface faculty {
    id: string;
    name: string;
    dob: string;
    gender: string;
    father: string;
    mother: string;
    email: string;
    contact_no: string;
    aadhar_no: string;
    profile_img: string;
    address: string;
    graduation_institue: string;
    grdt_stream: string;
    grdt_passing_year: string;
    grdt_percentage: string;
    last_education: string;
    last_ed_stream: string;
    last_ed_passing_year: string;
    last_ed_percentage: string;
    previous_school: string;
    prev_designation: string;
    prev_experience: string;
    prev_speciality: string;
    last_salary: string;
    current_salary: string;
    bank_name: string;
    account_no: string;
    ifsc_code: string;
    admin_id_fk: string;
    password: string;
  }
  
  export interface facultyResponse {
    success: number;
    data: faculty[];
  }
  