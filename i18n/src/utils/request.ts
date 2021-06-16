import { extend, ResponseError } from 'umi-request';
import { message, notification } from 'antd';
import { history, getLocale } from 'umi';
// import { getCookie } from './util';
// import enUS from '@/locales/en-US';

const codeMessage: { [key: number]: string } = {
  200: 'Request Successfully',
  201: 'Edit Data Successfully',
  202: 'Request is being processed.',
  204: 'Data Deleted Successfully',
  400: 'Request Error',
  401: 'No Authorization',
  403: 'Request Limit',
  404: 'Record does not exist, server is not operating.',
  406: 'The requested format is not available.',
  410: 'The requested resource is permanently deleted.',
  422: 'Validation Error',
  500: 'Server Error',
  502: 'Network Error',
  503: 'Server unavailable, the server is temporarily overloaded or under maintenance.',
  504: 'Network Timeout',
};

const errorHandler = (error: ResponseError) => {
  const { response } = error;

  if (response && response.status) {
    const errorText = codeMessage[response.status] || response.statusText;
    const { status, url } = response;
    notification.error({
      message: `Request Error ${status}: ${url}`,
      description: errorText,
    });
  } else if (!response) {
    notification.error({
      message: 'Network Error',
      description: 'The network is error and cannot connect to the server.',
    });
  }

  return response;
};

const request = extend({
  prefix: '/api/v1',
  // 默认错误处理
  errorHandler,
  credentials: 'include',
  // getResponse: true,
  timeout: 6000,
});

request.interceptors.request.use((url, options) => {
  // const token = getCookie('XSRF-TOKEN');
  // if (token) {
  //   const headers = {
  //     'X-XSRF-TOKEN': token,
  //   };
  //   return {
  //     url,
  //     options: {
  //       ...options,
  //       headers: {
  //         ...options.headers,
  //         ...headers,
  //       },
  //     },
  //   };
  // }
  return {
    url,
    options,
  };
});

request.interceptors.response.use(async (response) => {
  const { success, code, msg } = await response.clone().json();

  return response;
});

export default request;
