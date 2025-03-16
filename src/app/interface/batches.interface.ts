export interface Batch {
    id: number;
    class: string;
    sec_id: number | null;
    subject_id: number;
    time: string;
    faculty_id: number;
    admin_id: number;
    subject_name: string;
    name: string;  // Faculty name
}

export interface GroupedBatch {
    class: string;
    batches: Batch[];
}

export interface BatchResponse {
    success: number;
    data: GroupedBatch[];
}
