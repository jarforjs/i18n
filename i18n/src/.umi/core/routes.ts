// @ts-nocheck
import React from 'react';
import { ApplyPluginsType } from '/Users/hongbo/Desktop/i18n/node_modules/_@umijs_runtime@3.4.25@@umijs/runtime';
import * as umiExports from './umiExports';
import { plugin } from './plugin';

export function getRoutes() {
  const routes = [
  {
    "path": "/index.html",
    "component": require('@/pages/index').default,
    "exact": true
  },
  {
    "path": "/",
    "component": require('@/pages/index').default,
    "exact": true
  }
];

  // allow user to extend routes
  plugin.applyPlugins({
    key: 'patchRoutes',
    type: ApplyPluginsType.event,
    args: { routes },
  });

  return routes;
}
