import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { AddStdProductComponent } from '../add-std-product/add-std-product.component';
import { CrudService } from 'src/app/Services/crud.service';
import { InventoryProduct, inventoryProductRes } from 'src/app/interface/inventoryProduct.interface';
import { ConfirmBoxComponent } from '../confirm-box/confirm-box.component';
import { InventoryMaterial, InventoryMaterialRes } from 'src/app/interface/material.interface';

@Component({
  selector: 'app-inventory-products',
  templateUrl: './inventory-products.component.html',
  styleUrls: ['./inventory-products.component.scss']
})
export class InventoryProductsComponent implements OnInit {
  productList: InventoryProduct[] = [];
  materialList: InventoryMaterial[] = [];
  productQuantityMap: { [key: string]: number } = {};


  constructor(
    private dialog: MatDialog,
    private _crud: CrudService
  ) { }


  ngOnInit() {
    this.getProduct();
    this.getMaterialDetails();
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

  getMaterialDetails() {
    this._crud.getMaterial().subscribe(
      (res: InventoryMaterialRes) => {
        console.log(res);
        this.materialList = res.data;
        this.calculateTotalSoldQuantity();
      }
    )
  }

  calculateTotalSoldQuantity() {
    this.productQuantityMap = {};
    
    this.productList.forEach(product => {
      const productName = product.material_name;
      const quantity = Number(product.material_quantity) || 0;

      if (!this.productQuantityMap[productName]) {
        this.productQuantityMap[productName] = 0;
      }
      this.productQuantityMap[productName] += quantity;
    });

    console.log('Total Sold Quantity Map:', this.productQuantityMap);
  }

  getRemainingStock(material: InventoryMaterial): number {
    const soldQuantity = this.productQuantityMap[material.material_name] || 0;
    return Number(material.material_quantity) - soldQuantity;
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
