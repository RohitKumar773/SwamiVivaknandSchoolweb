export interface Vehicle {
    id: number;
    vehicle_name: string;
    vehicle_no: string;
    admin_id_fk: number;
  }
  
  export interface VehicleResponse {
    success: number;
    data: Vehicle[];
  }
  