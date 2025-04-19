export interface Examinations {
    id: number;
    class: string;
    exam_type: string;
    subject: string;
    passing_makrs: number;
    total_marks: string;
    date: string;
    time: string;
    admin_id_fk: number;
}

export interface ExaminationGroup {
    exam_type: any;
    class: string;
    examinations: Examinations[];
}


export interface ExaminationResponse {
    success: number;
    data: ExaminationGroup[];
}
