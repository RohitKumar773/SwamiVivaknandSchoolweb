import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SharedService {

  base_url_img = new BehaviorSubject<string>('https://ud.mausamstudio.com/sawamivivekanand/')
  constructor() { }

  classList = new BehaviorSubject([
    'Playgroup', 'Nursery', 'LKG', 'UKG', 'Class 1', 'Class 2', 'Class 3', 'Class 4', 'Class 5', 'Class 6',
    'Class 7', 'Class 8', 'Class 9', 'Class 10', 'Class 11', 'Class 12'
  ])

  sectionList = new BehaviorSubject([
    'A', 'B', 'C', 'D'
  ])

  genderList = new BehaviorSubject([
    'Male', 'Female', 'Others'
  ])

  examTypeList = new BehaviorSubject([
    'Monthly', '6 Months', 'Annual'
  ])

}
