import { useSelector } from "react-redux";
import { Outlet } from "react-router-dom";

const PrivateRouter = () => {
    const loginInformation = useSelector((state) => state.loginInformation)
  return (
    <div>
        {loginInformation ? <Outlet /> : alert("Please log in to see movie details")}
    </div>
  )
}

export default PrivateRouter;