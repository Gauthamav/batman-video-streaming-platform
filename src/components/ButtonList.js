import Button from "./Button";
import "../index.css"


const ButtonList = () => {

    const buttonList  = ["All","Gaming","Web development","Software","Movies","Songs","Trending","Cooking","Blog","News","Travel","Science","Comedy","Award"]


    return(

        <div className="flex gap-6 mt-32 pl-6  overflow-x-auto custom-scrollbar scroll-smooth ">           {
                buttonList.map((item,index) => (
                    <Button key={index} name={item}></Button>
                ))

            }
         
        
         
         </div>
    )

   
}

export default ButtonList;