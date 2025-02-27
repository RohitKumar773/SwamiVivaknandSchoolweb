import { Component } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-add-accnt-role-form',
  templateUrl: './add-accnt-role-form.component.html',
  styleUrls: ['./add-accnt-role-form.component.scss']
})
export class AddAccntRoleFormComponent {
  roleForm!: FormGroup
  admin = 1;

  onSubmit() { }
  resetForm() { }

}
