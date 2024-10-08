import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './pages/Home';
import Test from './pages/Test';
import SignIn from "./pages/SignIn";
import SignUp from './pages/SignUp';
import PrivateRoute from "./components/PrivateRoute";
import ProductListing from "./pages/ProductListing";

function App() {

  return (
    <>
      <BrowserRouter >
          <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route path="/test" element={<Test />}></Route>
            <Route path="/sign-in" element={<SignIn />}></Route>
            <Route path="/sign-up" element={<SignUp />}></Route>
            <Route element={<PrivateRoute />}>
              <Route path="/productlisting" element={< ProductListing />}></Route>
            </Route>
          </Routes>
      </BrowserRouter>
    
    </>
  )
}

export default App
