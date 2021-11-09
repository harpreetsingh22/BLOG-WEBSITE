
import { Box,makeStyles,FormControl,InputBase,Button ,TextareaAutosize} from "@material-ui/core";
import { AddCircle } from "@material-ui/icons";
import { useState } from "react";
import { createPost } from "../../service/api";
import { useNavigate } from 'react-router-dom';


const useStyle=makeStyles({

    container :{
     padding :'0 100px'
    }  ,

    image:{
        width:'100%' ,
        height:'50vh' ,
        objectFit:'cover'
    }  ,

    form :{

        display:'flex' ,
        flexDirection:'row' ,
        marginTop: 10
    } ,

    textfield:{
        flex:1 ,
        margin:'0 30px' ,
        fontSize:25
    } ,
    textarea: {
        width: '100%',
        border: 'none',
        marginTop: 50,
        fontSize: 18,
        '&:focus-visible': {
            outline: 'none'
        }
    }
})  ;


const intialValues={
    title:'' ,
    description:'' ,
    picture:'' ,
    username:'harry' ,
    categories:'All'   ,
    createDate:new Date()   
}









const CreateView=()=>{

    const navigate = useNavigate();

    const handleChange = (e) => {
        setPost({ ...post, [e.target.name]: e.target.value });
    }

    const savePost = async () => {
        await createPost(post);
        navigate('../', { replace: true })
    }

    const [post,setPost]=useState(intialValues) ;

    const classes=useStyle() ;
     const URL='https://images.unsplash.com/photo-1543128639-4cb7e6eeef1b?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8bGFwdG9wJTIwc2V0dXB8ZW58MHx8MHx8&ixlib=rb-1.2.1&w=1000&q=80' ;
return(
  <Box className={classes.container}>
    <img src={URL} className={classes.image} alt="no-image" />
    <FormControl className={classes.form}>
    <AddCircle fontSize="large" color="action"/>

    <InputBase    onChange={(e)=>handleChange(e)}  name='title'   placeholder="title" className={classes.textfield} />
    <Button      onClick={() => savePost()}   variant="contained" color="primary">Publish</Button>
    </FormControl>

    <TextareaAutosize
                rowsMin={5}
                placeholder="Tell your story..."
                className={classes.textarea}
                name='description'
                onChange={(e)=>handleChange(e)} 
                
            />




  </Box>


)


}


export default CreateView ;