export interface Room {
    id: number,
    room_no: string
}

export interface RoomRes {
    data: Room,
    success: number
}

export interface Bed {
    id: number,
    room_no: string,
    bed_no: string,
    status: number
}

export interface BedRes {
    data: Bed,
    success: number
}

export interface AssignHostel {
    id?: number;
    std_id: number;
    std_name: string;
    std_mobile: string;
    room_no: string;
    bed_no: string;
    assigen_date?: string; // Optional in case it's nullable
}

export interface AssignHostelRes {
    data: AssignHostel,
    success: number

}
