import { useState } from "react";
import { BrowserRouter } from "react-router-dom";

import Home from "./pages/Home.";
import SignUp from "./pages/SignUp";
import About from "./pages/About";
import SignOut from "./pages/SignOut";

function App() {
  const [count, setCount] = useState(0);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}></Route>
      </Routes>
      <Routes>
        <Route path="about" element={<About />}></Route>
      </Routes>
      <Routes>
        <Route path="/sign-in" element={<SignUp />}></Route>
      </Routes>
      <Routes>
        <Route path="" element={<SignOut />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
