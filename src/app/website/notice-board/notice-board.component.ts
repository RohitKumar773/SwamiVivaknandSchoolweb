import { Component } from '@angular/core';

@Component({
  selector: 'app-notice-board',
  templateUrl: './notice-board.component.html',
  styleUrls: ['./notice-board.component.scss']
})
export class NoticeBoardComponent {
  notices: string[] = [
    'Annual Sports Day on April 20, 2025.',
    'Parent-Teacher Meeting scheduled for April 10, 2025.',
    'New admissions are open until May 15, 2025.',
    'School will remain closed on April 14 for Ambedkar Jayanti.',
  ];

}
