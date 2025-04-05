export interface Attendent {
    id: number;
    emp_id: number;
    emp_name: string;
    mobile: string;
    cur_date: string;
    status: number;
}

export interface AttendentRes {
    "success": number,
    "data": Attendent
}


export interface TodayAttendent {
    "id": number,
    "name": string,
    "profile_img": string,
    "contact_no": string,
    "cur_date": string,
    "status": number
}

export interface TodayAttendentRes {
    data: TodayAttendent,
    success: number
}