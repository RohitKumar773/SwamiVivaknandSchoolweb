import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { ToastrService } from 'ngx-toastr';
import { CrudService } from 'src/app/Services/crud.service';

@Component({
  selector: 'app-add-std-product',
  templateUrl: './add-std-product.component.html',
  styleUrls: ['./add-std-product.component.scss']
})
export class AddStdProductComponent {
  productForm!: FormGroup
  admin = 1;

  constructor(
    private _crud: CrudService,
    private toastr: ToastrService,
    private matref: MatDialogRef<AddStdProductComponent>,
    private _fb: FormBuilder
  ) {
    this.productForm = this._fb.group({
      id: [''],
      material_name: ['', Validators.required],
      std_mobile: ['', Validators.required],
      material_quantity: ['', Validators.required],
      total_amount: ['', Validators.required],
      admin_id_fk: ['', Validators.required],
      date:[
        new Date().toISOString().split('T')[0],
        Validators.required
      ]
    });
  }


  onSubmit() { 
    this._crud.addProduct(this.productForm.value).subscribe(
      (res: any) => {
        console.log(res);
        this.matref.close();
        this.toastr.success('Product added successfully')
      },
      (err:Error) => {
        console.log(err);
        this.toastr.error('Product not added')
      }
    )
  }
  resetForm() { 
    this.productForm.reset()
  }
}
