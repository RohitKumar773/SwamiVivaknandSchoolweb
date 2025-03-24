export interface InventoryMaterial {
    id: string;
    material_name: string;
    material_quantity: string;
    quantity_amount: string;
    total_amount: string;
    date: string;
    admin_id_fk: string;
}

export interface InventoryMaterialRes {
    success: number;
    data: InventoryMaterial[];
}
