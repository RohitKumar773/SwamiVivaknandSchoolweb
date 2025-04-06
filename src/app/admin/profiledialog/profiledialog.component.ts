import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-profiledialog',
  templateUrl: './profiledialog.component.html',
  styleUrls: ['./profiledialog.component.scss']
})
export class ProfiledialogComponent {

  constructor(
    private router:Router
  ){}

  onLogout(){
    this.router.navigate(['/admin']);
    localStorage.removeItem('adminLoginData')
  }
}
