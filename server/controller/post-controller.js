import post from "../schema/post-schema.js";

export const createPost=(request,response)=>{
    try{ 
       const Post=new post(request.body)  ;
            Post.save()   ;

            response.status(200).json('Post saved successfully')   ;




    console.log(request.body)   ;}
    catch(error){
        response.status(500).json(error)
    }

}