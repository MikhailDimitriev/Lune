import {
  type RouteConfig,
  index,
  route,
} from "@react-router/dev/routes";

export default [
  index("./pages/home/HomePage.tsx"),
  route("catalog", "./pages/catalog/CatalogPage.tsx"),
  route("about", "./pages/about/AboutPage.tsx"),
  route("contacts", "./pages/contacts/ContactsPage.tsx"),
  route("cart", "./pages/cart/CartPage.tsx"),
] satisfies RouteConfig;