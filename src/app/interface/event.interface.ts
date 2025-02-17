export interface Events {
  id: number;
  ocassion_name: string;
  date: string;
  admin_id_fk: number;
}

export interface eventsResponse {
  success: number;
  data: Events[];
}
