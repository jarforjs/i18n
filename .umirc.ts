import { defineConfig } from 'umi';

export default defineConfig({
  nodeModulesTransform: {
    type: 'none',
  },
  routes: [{ path: '/', component: '@/pages/index' }],
  fastRefresh: {},
  locale: {
    default: 'zh-CN',
    antd: true,
    title: false,
    baseNavigator: false,
    baseSeparator: '-',
  },
  devServer: {
    https: true,
  },
  exportStatic: {
    htmlSuffix: true,
  },
  dva: {},
});
