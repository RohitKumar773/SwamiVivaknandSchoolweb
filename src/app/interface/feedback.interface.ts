export interface Feedback {
    id: number;
    title: string;
    description: string;
    std_id: number;
    created_at: string;
}

export interface FeedbackApiResponse {
    success: number;
    data: Feedback[];
}
