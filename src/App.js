import { BrowserRouter } from "react-router-dom";

import Home from "./pages/Home";

function app() {
  return (
    <BrowserRouter>
      <div>
        <Home />
      </div>
    </BrowserRouter>
  );
}

export default app;
