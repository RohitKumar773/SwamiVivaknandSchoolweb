import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { AddStdProductComponent } from '../add-std-product/add-std-product.component';
import { CrudService } from 'src/app/Services/crud.service';
import { InventoryProduct, inventoryProductRes } from 'src/app/interface/inventoryProduct.interface';
import { ConfirmBoxComponent } from '../confirm-box/confirm-box.component';

@Component({
  selector: 'app-inventory-products',
  templateUrl: './inventory-products.component.html',
  styleUrls: ['./inventory-products.component.scss']
})
export class InventoryProductsComponent implements OnInit {
  productList: InventoryProduct[] = [];

  constructor(
    private dialog: MatDialog,
    private _crud: CrudService
  ) { }


  ngOnInit() {
    this.getProduct()
  }

  add_new_product() {
    const openDig = this.dialog.open(AddStdProductComponent, {
      disableClose: true
    });

    openDig.afterClosed().subscribe(() => {
      this.getProduct()
    })
  }

  getProduct() {
    this._crud.getProduct().subscribe(
      (res: inventoryProductRes) => {
        console.log(res);
        this.productList = res.data
      },
      (err: Error) => {
        console.log(err);
      }
    )
  }

  delete_products(id: any) {
    const openDig = this.dialog.open(ConfirmBoxComponent, {
      disableClose: true
    });

    openDig.afterClosed().subscribe(
      (res) => {
        console.log(res);
        if (res == 1) {
          this._crud.deleteProduct(id).subscribe(
            (res) => {
              console.log(res);
              if (res.success == 1) {
                this.getProduct();
              }
            }
          )
        }
      }
    )
  }

}
