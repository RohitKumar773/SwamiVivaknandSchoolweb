export interface Subject {
    id: number;
    class: string;
    subject_name: string;
    admin_id_fk: number;
}

export interface GroupedClass {
    class: string;
    subjects: Subject[];
}

export interface SubjectRes {
    success: number;
    data: GroupedClass[];
}
