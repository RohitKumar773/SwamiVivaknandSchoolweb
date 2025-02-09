import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { RegRes } from '../interface/studentReg.interface';

@Injectable({
  providedIn: 'root',
})
export class CrudService {
  base_url: string = 'http://localhost/sawamivivekanand/'; //local
  constructor(private _http: HttpClient) {}

  std_self_reg(data: any): Observable<RegRes> {
    return this._http.post<RegRes>(
      `${this.base_url}student_registation.php`,
      data
    );
  }
}
