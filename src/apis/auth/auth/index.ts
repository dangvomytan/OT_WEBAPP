import { AxiosResponse } from 'axios';

import axiosInstance from '../../base.api';
import { LoginResponse } from './responses/login.response';

const loginApi = async (params: { username: string; password: string }) => {
  return axiosInstance
    .post('/auth/login', params)
    .then((response: AxiosResponse<LoginResponse>) => {
      return response.data;
    })
    .catch((error) => {
      throw error;
    });
};

export { loginApi };
