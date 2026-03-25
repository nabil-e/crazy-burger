import { createBrowserRouter } from 'react-router';
import App from './App';
import OrderPage from './components/pages/order/OrderPage';
import ErrorPage from './components/pages/error/ErrorPage';

const router = createBrowserRouter([
    {
      path: "/",
      Component: App,
    },
    {
      path: "/order",
      Component: OrderPage,
    },
    {
      path: "*",
      Component: ErrorPage,
    },
  ]);

  export default router;