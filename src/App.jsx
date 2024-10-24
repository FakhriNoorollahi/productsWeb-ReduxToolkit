import { Route, Routes } from "react-router-dom";
import ProductsPage from "./pages/ProductsPage";
import SingleProductPage from "./pages/SingleProductPage";
import CheckoutPage from "./pages/CheckoutPage";
import FavoritePage from "./pages/FavoritePage";
import Layout from "./pages/Layout";
import PageNotFound from "./pages/PageNotFound";
import { Provider } from "react-redux";
import store from "./features/store";

function App() {
  return (
    <Provider store={store}>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="/products" element={<ProductsPage />} />
          <Route path="/products/:id" element={<SingleProductPage />} />
          <Route path="/checkout" element={<CheckoutPage />} />
          <Route path="/favorite" element={<FavoritePage />} />
          <Route path="/*" element={<PageNotFound />} />
        </Route>
      </Routes>
    </Provider>
  );
}

export default App;
