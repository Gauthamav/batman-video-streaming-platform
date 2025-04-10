

const Shimmer = () =>{

    const arr = new Array(50).fill(2)
     
      return (
        
    
         
           <div className="flex flex-wrap gap-10 ml-10  mb-10  mt-52">
            {arr.map((i,index) => (
            <div key={index} className="animate-pulse flex space-x-4">
            <div className="flex flex-col w-[360px]   ">
              <div className="w-[360px] h-[200px] rounded-2xl bg-gray-300 mb-2 "></div>
              <div className="space-y-3">
                <div className="grid grid-cols-3 gap-4">
                  <div className="ml-14 h-4 w-72 bg-gray-300 rounded-lg col-span-2"></div>
                </div>
                <div className="ml-20 h-2 w-60 bg-gray-300 rounded-md"></div>
    
              </div>
            </div>
         
          </div>
            ))}
          
         </div>
    
      
    )
    
    
       
    
    }
    
      
    
    
    
    export default Shimmer