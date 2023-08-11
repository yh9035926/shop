import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Root from "./pages/Root";
import ErrorPage from "./pages/ErrorPage";
import HomePage from "./pages/HomePage";
import ProductsPage from "./pages/ProductsPage";
import ProductRoot from "./pages/ProductRoot";
import ProductDetailPage from "./pages/ProductDetailPage";
import CartPage from "./pages/CartPage";
import AuthPage from "./pages/AuthPage";
import MyPage from "./pages/MyPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      { index: true, element: <HomePage></HomePage> },
      {
        path: "products",
        element: <ProductRoot></ProductRoot>,
        children: [
          { index: true, element: <ProductsPage></ProductsPage> },
          {
            path: ":productId",
            element: <ProductDetailPage></ProductDetailPage>,
          },
        ],
      },
      { path: "cart", element: <CartPage></CartPage> },
      { path: "auth", element: <AuthPage></AuthPage> },
      { path: "mypage/:userId", element: <MyPage></MyPage> },
    ],
  },
]);

function App() {
  return <RouterProvider router={router}></RouterProvider>;
}

export default App;
