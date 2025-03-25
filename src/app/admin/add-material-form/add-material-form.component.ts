import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { ToastrService } from 'ngx-toastr';
import { InventoryMaterialRes } from 'src/app/interface/material.interface';
import { CrudService } from 'src/app/Services/crud.service';

@Component({
  selector: 'app-add-material-form',
  templateUrl: './add-material-form.component.html',
  styleUrls: ['./add-material-form.component.scss']
})
export class AddMaterialFormComponent {
  materialForm!: FormGroup
  admin = 1;

  constructor(
    private _fb: FormBuilder,
    private _crud: CrudService,
    private toastr: ToastrService,
    private matref: MatDialogRef<AddMaterialFormComponent>
  ) {
    this.materialForm = this._fb.group({
      id: [''],
      material_name: ['', Validators.required],
      material_quantity: ['', [Validators.required, Validators.min(1)]],
      quantity_amount: ['', [Validators.required, Validators.min(1)]],
      total_amount: [{ value: ''}, Validators.required],
      admin_id_fk: ['', Validators.required],
      date: [
        new Date().toISOString().split('T')[0],
        Validators.required,
      ]
    });

    this.materialForm.get('material_quantity')?.valueChanges.subscribe(() => {
      this.calculateTotalAmount();
    });
  
    this.materialForm.get('quantity_amount')?.valueChanges.subscribe(() => {
      this.calculateTotalAmount();
    });
  }

  calculateTotalAmount() {
    const quantity = this.materialForm.get('material_quantity')?.value || 0;
    const amount = this.materialForm.get('quantity_amount')?.value || 0;
    this.materialForm.get('total_amount')?.setValue(quantity * amount, { emitEvent: false });
  }


  onSubmit() {
    if (this.materialForm.valid) {
      this._crud.addMaterial(this.materialForm.value).subscribe(
        (res: InventoryMaterialRes) => {
          console.log(res);
          if (res.success == 1) {
            this.toastr.success('Material added successfully', 'Success')
            this.matref.close()
          }
          else {
            this.toastr.error('Please Check your internet connection')
          }
        },
        (err: Error) => {
          console.log(err);
          this.toastr.error('Error')
        }
      )
    }
    else {
      this.toastr.warning('Please fill all required fields', 'Warning')
    }
  }

  resetForm() {
    this.materialForm.reset()
  }
}
