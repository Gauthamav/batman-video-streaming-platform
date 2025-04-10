 

 const Button = ({name}) => {
    return(

        <div className="flex min-w-fit   w-auto  snap-start">
            <button className="bg-gray-300 px-5 py-[4px] w-full rounded-lg font-semibold shadow-lg hover:bg-gray-200">{name}</button>
            
        </div>
        
    )
    
 }
 export default Button