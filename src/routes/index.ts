import { createBrowserRouter, RouteObject } from 'react-router-dom';
import { Router } from '@remix-run/router';
import LoginPage from '../pages/LoginPage';
import DashboardPage from '../pages/DashboardPage';
const routes: RouteObject[] = [
  {
    index: true,
    path: '',
    Component: LoginPage,
  },
  {
    path: '/dashboard',
    Component: DashboardPage,
  },
];

const router: Router = createBrowserRouter(routes);

export default router;
