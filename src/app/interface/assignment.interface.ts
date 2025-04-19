export interface Assignment {
    id: string;
    title: string;
    description: string;
    faculty_name: string;
    faculty_id: string;
    reference_url: string;
    deadline: string;
    class: string;
    admin_id_fk: string;
}

export interface AssignmentResponse {
    success: number;
    data: Assignment[];
}
