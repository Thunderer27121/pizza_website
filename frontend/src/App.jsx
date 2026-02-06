import Navbar from "./components/Navbar"
import Approutes from "./components/Approutes"
import { useEffect } from "react"
import { useLocation } from "react-router-dom"
const App = () => {
  const {pathname} = useLocation();
  useEffect(() => {
    window.scrollTo(0,0)
  }, [pathname]);
  useEffect(() => {
  fetch(`${import.meta.env.VITE_backend_url}/health`)
    .catch(() => {});
}, []);

  
  return (
    <div className=" h-screen w-full bg-black text-white overflow-auto" style={{scrollbarWidth: "none"}}>
      <Navbar/>
      <Approutes />
    </div>
  )
}

export default App
