import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ChakraProvider } from "@chakra-ui/react";
// pages
import { Home, NotFound, Random, Increment } from "./pages";
// others
import "./app.scss";

function App() {
  return (
    <>
      <BrowserRouter>
        <ChakraProvider>
          <Routes>
            <Route index path="/" element={<Home />} />
            <Route path="/random" element={<Random />} />
            <Route path="/increment" element={<Increment />} />
            <Route path="/*" element={<NotFound />} />
          </Routes>
        </ChakraProvider>
      </BrowserRouter>
    </>
  );
}
export default App;
