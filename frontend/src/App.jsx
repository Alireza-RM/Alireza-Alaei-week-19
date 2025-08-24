import { Route, Routes } from "react-router-dom"
import Signup from "./templates/Signup"
import Dashboard from "./templates/Dashboard"
import AllModal from "./templates/AllModal"
import SignInContext from "./context/SignUpContext"
import Login from "./templates/Login"
import LogInContext from "./context/LogInContext"
import CreateProduct from "./context/CreateProductContext"
import { Toaster } from "react-hot-toast"
import ProductsDataContext from "./context/ProductsDataContext"
import ModalContext from "./context/ModalDataContext"

function App() {


  return (
    <>
      <CreateProduct>
        <ModalContext>
          <ProductsDataContext>
            <SignInContext>
              <LogInContext>


                <Routes>
                  <Route path="/" element={<Signup />} />
                  <Route path="/signup" element={<Signup />} />
                  <Route path="/login" element={<Login />} />
                  <Route path="/dashboard" element={<Dashboard />} />
                </Routes>

                <AllModal />

              </LogInContext>
            </SignInContext>
          </ProductsDataContext>
        </ModalContext>
      </CreateProduct>
      <Toaster />

    </>
  )
}

export default App
