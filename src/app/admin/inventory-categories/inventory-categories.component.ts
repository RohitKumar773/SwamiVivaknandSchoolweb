import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { AddMaterialFormComponent } from '../add-material-form/add-material-form.component';
import { CrudService } from 'src/app/Services/crud.service';
import { InventoryMaterial, InventoryMaterialRes } from 'src/app/interface/material.interface';
import { ConfirmBoxComponent } from '../confirm-box/confirm-box.component';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-inventory-categories',
  templateUrl: './inventory-categories.component.html',
  styleUrls: ['./inventory-categories.component.scss']
})
export class InventoryCategoriesComponent implements OnInit {
  materialList: InventoryMaterial[] = [];
  filterMaterial: InventoryMaterial[] = []

  constructor(
    private dialog: MatDialog,
    private _crud: CrudService,
    private toastr: ToastrService
  ) { }

  ngOnInit() {
    this.getMaterial()
  }

  getMaterial() {
    this._crud.getMaterial().subscribe(
      (res: InventoryMaterialRes) => {
        console.log(res);
        this.materialList = res.data;
        this.filterMaterial = res.data
      }
    )
  }

  add_new_product() {
    const openDig = this.dialog.open(AddMaterialFormComponent, {
      disableClose: true
    });

    openDig.afterClosed().subscribe(() => {
      this.getMaterial()
    })
  }

  onSearch(event: any) {
    const filter = event.target.value?.toLowerCase() || '';
    this.filterMaterial = this.materialList.filter(data =>
      data?.material_name?.toLowerCase().includes(filter)
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
          this._crud.deleteMaterial(id).subscribe(
            (res: any) => {
              console.log(res);
              if (res.success == 1) {
                this.getMaterial();
                this.toastr.success('Material deleted', 'Success')
              }
            }
          )
        }
      }
    )
  }

  update_products(materialData: any) {
    console.log(materialData);
    const openDig = this.dialog.open(AddMaterialFormComponent, {
      disableClose: true,
      data: materialData
    });

    openDig.afterClosed().subscribe(
      () => {
        this.getMaterial()
      }
    )
  }
}
