
import { Outlet } from "react-router";
import SideBar from "./SideBar"
import Header from "./Header";



const Body = () => {

    return(
        <div className="flex">


            <Header></Header>
            <SideBar></SideBar>
            <Outlet></Outlet>
           
           
          
            
        </div>
    )
}
export default Body;