import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./features/ui/Pages/Home";
import Cart from "./features/ui/Pages/Cart";
import Menu from "./features/ui/Pages/Menu";
import Order from "./features/ui/Pages/Order";
import AppLayout from "./AppLayout";
import { getPizzas as MenuLoader } from "./features/services/apiRestorent";
import Errorpage from "./features/ui/Pages/Errorpage";
import Createorder, { createOrderAction } from "./features/order/Createorder";
import { fetchOrder } from "./features/services/loaders";

import { updateOrderAction } from "./features/order/UpdateOrder";

function App() {
  const routes = createBrowserRouter([
    {
      element: <AppLayout />,
      errorElement: <Errorpage />,

      children: [
        { path: "/", element: <Home />, errorElement: <Errorpage /> },
        {
          path: "/menu",
          element: <Menu />,
          loader: MenuLoader,
          errorElement: <Errorpage />,
        },
        { path: "/cart", element: <Cart />, errorElement: <Errorpage /> },
        {
          path: "/order/new",
          element: <Createorder />,
          errorElement: <Errorpage />,
          action: createOrderAction,
        },
        {
          path: "/order/:id",
          element: <Order />,
          errorElement: <Errorpage />,
          loader: fetchOrder,
          action: updateOrderAction,
        },
      ],
    },
  ]);
  return <RouterProvider router={routes} />;
}

export default App;
