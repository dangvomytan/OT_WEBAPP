import { CategoryResponse } from '../apis/item/category/responses/get-list-category.response';
import { BrandResponse } from '../apis/brand/responses/brand.response';
import { ItemResponse } from '../apis/item/responses/item.response';
import { ShopWarehouseResponse } from '../apis/stock/response/ShopWarehouse.response';

export interface RootState {
  categoryReducer: CategoryResponse[];
  brandReducer: { data: BrandResponse[]; totalPages: number; count: number };
  itemReducer: { data: ItemResponse[]; totalPage: number; count: number; limit: number };
  shopWarehouseReducer: ShopWarehouseResponse[];
  authReducer: boolean;
}
