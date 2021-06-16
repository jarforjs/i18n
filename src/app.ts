import { message } from 'antd';
import { createIntl, getLocale, createIntlCache, setLocale, addLocale,getAllLocales } from 'umi';
import request from '@/utils/request';
import zhCN from 'antd/es/locale/zh_CN';
import enUS from 'antd/es/locale/en_US';

// export const dva = {
//   config: {
//     // onAction: createLogger(),
//     onError(e: Error) {
//       message.error(e.message, 3);
//     },
//   },
// };

// 异步增加语言
request('/i18n/messages').then(({ success, data }) => {
  if (success) {
    addLocale('en-US', data.enUS, {
      antd: enUS,
      momentLocale: 'en-US',
    });
    addLocale('zh-CN', data.zhCN, {
      antd: zhCN,
      momentLocale: 'zh-CN',
    });
  }
});

// 同步增加语言
// addLocale(
//   'en-US',
//   {
//     name: 'hi, {name}',
//   },
//   {
//     antd: enUS,
//     momentLocale: 'en-US',
//   },
// );
// addLocale(
//   'zh-CN',
//   {
//     name: '你好，{name}',
//   },
//   {
//     antd: zhCN,
//     momentLocale: 'zh-CN',
//   },
// );
