import { COMMENT_USER_DATA } from "../utils/constant"


const commentData = COMMENT_USER_DATA


const Comment = ({data}) => {

    const {name , comment, replies} = data
    

    return(
        <div className=" bg-gray-100 w-[40rem]" > 
      
      
        <div className="flex items-center  ">

          
                <img className="w-5 h-5 rounded-3xl mr-2 " src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS4vK39mvab0UiMEU0L82eB0gaPb3cUFfMi_A&s"></img>
            <p className="p-1 font-bold">{name}</p>
        </div>
          
         

           <div className="bg-slate-200">
           <p className="pl-12 pb-6 pt-4">{comment}</p>

            <ReplyComment reply={replies}></ReplyComment>
           </div>
           

            
           
        </div>
    )
}

const ReplyComment = ({reply}) => {
  

    return(
        <div className="pl-8  ">

        {
            
            reply.map((r,index) => (
                <Comment key={index} data={r}></Comment>
                
            ))
        }
        </div>


    )
}






const CommentVideo = () => {

    
   
    return(
        <div className="mt-8 ml-6 " >

           <h1 className="mb-10 font-extrabold text-lg">Comments:</h1>    

           {
            commentData.map((comment,index) => (
                <Comment key={index} data = {comment}></Comment>
            ))

           }
          

        

            

        </div>
       
    )
}
export default CommentVideo;