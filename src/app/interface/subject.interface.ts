export interface Subjects {
    id: string;
    class: string;
    subject_name: string;
    admin_id_fk: string;
}
export interface SubjectRes {
    success: number;
    data: Subjects[];
  }
  