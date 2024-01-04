import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import { lazy, Suspense } from "react"
import Loader from "./Components/Loader"

//implementing lazy loading in the app
const HomePage = lazy(() => import("./Pages/HomePage"))
const SearchPage = lazy(() => import("./Pages/SearchPage"))
const CartPage = lazy(() => import("./Pages/CartPage"))



const App = () => {
  return (
   <Router>
    <Suspense fallback={<Loader />}>
    <Routes>
      <Route path="/" element={<HomePage />}/>
      <Route path="/search" element={<SearchPage />}/>
      <Route path="/cart" element={<CartPage />}/>

    </Routes>
    </Suspense>
   </Router>
  )
}

export default App
