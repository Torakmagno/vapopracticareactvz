import { createContext } from "react";

const { Consumer: UserConsumer, Provider: UserProvider } = createContext({
  carrito: [],
  addProduct: () => {}
});

export { UserConsumer, UserProvider };