export interface InventoryProduct {
    id: number;
    material_name: string;
    material_quantity: number;
    std_mobile: string;
    date: string;
    total_amount: number;
    admin_id_fk: number;
}

export interface inventoryProductRes {
    success: number;
    data: InventoryProduct[];
}
