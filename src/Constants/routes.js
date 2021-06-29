import React from 'react';

export const LazyCmp = React.lazy(() => import('../Pages'));
export const LazyCmp1 = React.lazy(() => import('../Pages'));
export const LazyCmp2 = React.lazy(() => import('../Pages'));
export const LazyCmp3 = React.lazy(() => import('../Pages'));

export const PAGE_ROUTES = [
  { path: '/b-c-h', name: 'Become a host', component: LazyCmp, expect: true },
  { path: '/help', name: 'Help', component: LazyCmp1, expect: true },
  { path: '/sign-up', name: 'Sign up', component: LazyCmp2, expect: true },
  { path: '/login', name: 'Login', component: LazyCmp3, expect: true },
];
