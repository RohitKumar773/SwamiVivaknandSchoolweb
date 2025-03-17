export interface Notice {
    id: number;
    notice: string;
    notice_date: string;
    admin_id_fk: number;
  }
  
 export interface NoticeResponse {
    success: number;
    data: Notice[];
  }
  