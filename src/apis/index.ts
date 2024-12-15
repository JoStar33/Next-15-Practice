import axios, { AxiosRequestConfig, AxiosResponse } from 'axios';
import environment from '@/environment';

const config: AxiosRequestConfig = {
  baseURL: environment.serverUrl,
  withCredentials: false,
};

const responseBody = <T>(response: AxiosResponse<T>) => response.data;

// 주의! axios 사용을 하게되면 Next.js fetch의 캐싱기능을 사용못함.
export const instance = axios.create(config);

export const requests = {
  get: <T>(url: string) => instance.get<T>(url).then(responseBody),
  post: <T>(url: string, body: object | FormData) => instance.post<T>(url, body).then(responseBody),
  put: <T>(url: string, body: object | FormData) => instance.put<T>(url, body).then(responseBody),
  delete: <T>(url: string) => instance.delete<T>(url).then(responseBody),
  patch: <T>(url: string, body: object | FormData | undefined) => instance.patch<T>(url, body).then(responseBody),
};
