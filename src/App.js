import { ChakraProvider } from "@chakra-ui/react";
import Index from "./pages/Index/Index";

const App = () => {
  return (
    <ChakraProvider>
      <Index />
    </ChakraProvider>
  );
};
export default App;
