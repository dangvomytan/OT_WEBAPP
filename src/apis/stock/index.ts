import { AxiosResponse } from 'axios';
import axiosInstance from '../base.api';
import { ShopWarehouseResponse } from './response/ShopWarehouse.response';
import { ShopWarehouseRequest } from './requests/ShopWarehouse.request';

const getShopWarehouseAPI = async (
  shopWarehouseQuery?: ShopWarehouseRequest,
): Promise<{ data: ShopWarehouseResponse[]; totalRecords: number; totalPage: number; limit: number }> => {
  return axiosInstance
    .get('/shop-warehouses', { params: shopWarehouseQuery })
    .then(
      (
        response: AxiosResponse<{
          data: ShopWarehouseResponse[];
          totalRecords: number;
          totalPage: number;
          limit: number;
        }>,
      ) => {
        return response.data;
      },
    )
    .catch((error) => {
      throw error;
    });
};

export { getShopWarehouseAPI };
