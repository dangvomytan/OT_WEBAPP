import { PayloadActionCreator, createAction } from '@reduxjs/toolkit';
import { ShopWarehouseResponse } from '../../apis/stock/response/ShopWarehouse.response';

export const getShopWarehouse: PayloadActionCreator<ShopWarehouseResponse[]> = createAction('GET_SHOP_WAREHOUSE');
