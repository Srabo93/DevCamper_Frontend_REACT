import { ChakraProvider } from "@chakra-ui/react";
import theme from "./theme";
import Register from "./pages/auth/Register";

const App = () => {
  return (
    <ChakraProvider theme={theme}>
      <Register />
    </ChakraProvider>
  );
};
export default App;
