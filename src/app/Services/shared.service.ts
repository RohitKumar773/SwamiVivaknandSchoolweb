import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SharedService {

  constructor() { }

  classList =  new BehaviorSubject([
    'LNG', 'UKG', '1st', '2nd', '3rd', '4th','5th','6th','7th', '8th', '9th', '10th', '11th', '12th'
  ])
 
}
