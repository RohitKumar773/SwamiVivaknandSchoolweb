export interface Driver {
    id: number;
    driver_name: string;
    mobile: string;
    adhar: string;
    dl_no: string;
    experience: number;
    profile_img: string;
    vehicle_no: string;
    admin_id_fk: number;
}

export interface DriverResponse {
    success: number;
    data: Driver[];
}
