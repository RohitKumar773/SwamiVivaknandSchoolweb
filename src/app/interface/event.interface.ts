export interface Events {
  id: string;
  ocassion_name: string;
  start_date: string;
  end_date: string;
  admin_id_fk: string;
}

export interface eventsResponse {
  success: number;
  data: Events[];
}
