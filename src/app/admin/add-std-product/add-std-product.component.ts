import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { ToastrService } from 'ngx-toastr';
import { InventoryMaterial, InventoryMaterialRes } from 'src/app/interface/material.interface';
import { CrudService } from 'src/app/Services/crud.service';

@Component({
  selector: 'app-add-std-product',
  templateUrl: './add-std-product.component.html',
  styleUrls: ['./add-std-product.component.scss']
})
export class AddStdProductComponent implements OnInit {
  productForm!: FormGroup
  admin = 1;
  materialList: InventoryMaterial[] = []
  total_amt: any = 0
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
      date: [
        new Date().toISOString().split('T')[0],
        Validators.required
      ]
    });
  }
  ngOnInit() {
    this.getMaterial()

    this.productForm.get('material_quantity')?.valueChanges.subscribe((quantity) => {
      const selectedProduct = this.materialList.find(
        (m: any) => m.material_name === this.productForm.get('material_name')?.value
      );

      if (selectedProduct) {
        if (!quantity || quantity <= 0) {
          this.productForm.get('total_amount')?.setValue(Number(selectedProduct.quantity_amount));
        } else {
          const calculatedAmount = Number(selectedProduct.quantity_amount) * Number(quantity);
          this.productForm.get('total_amount')?.setValue(calculatedAmount);
        }
      }
    });
  }
  // onProductChnage() {
  //   const seletdProducat = this.materialList.filter((m:any)=>m.material_name == this.productForm.get('material_name')?.value)
  //   this.total_amt = seletdProducat[0].quantity_amount
  //   this.productForm.get('total_amount')?.setValue(this.total_amt)
  // }
  onProductChnage() {
    const selectedProduct = this.materialList.find(
      (m: any) => m.material_name === this.productForm.get('material_name')?.value
    );

    if (selectedProduct) {
      this.total_amt = selectedProduct.quantity_amount; // Store base price
      this.productForm.get('total_amount')?.setValue(this.total_amt);
    }
  }

  onSubmit() {
    this._crud.addProduct(this.productForm.value).subscribe(
      (res: any) => {
        console.log(res);
        this.matref.close();
        this.toastr.success('Product added successfully')
      },
      (err: Error) => {
        console.log(err);
        this.toastr.error('Product not added')
      }
    )
  }

  getMaterial() {
    this._crud.getMaterial().subscribe(
      (res: InventoryMaterialRes) => {
        console.log(res);
        this.materialList = res.data
      }
    )
  }

  resetForm() {
    this.productForm.reset()
  }
}
