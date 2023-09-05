import { RouterProvider, createBrowserRouter } from "react-router-dom";

import HomePage from "./pages/HomePage";
import ProductsPage from "./pages/ProductsPage";
import ProductDetailPage from "./pages/ProductDetailPage";
import CartPage from "./pages/CartPage";

import MyPage from "./pages/MyPage";

const router = createBrowserRouter([
  { path: "/", element: <HomePage></HomePage> },
  { path: "/products", element: <ProductsPage></ProductsPage> },
  {
    path: "/products/:productId",
    element: <ProductDetailPage></ProductDetailPage>,
  },
  { path: "/mypage/:userId", element: <MyPage></MyPage> },
  { path: "/cart", element: <CartPage></CartPage> },
]);

function App() {
  return <RouterProvider router={router}></RouterProvider>;
}

export default App;
