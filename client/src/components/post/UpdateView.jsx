
import { Box,makeStyles,FormControl,InputBase,Button ,TextareaAutosize} from "@material-ui/core";
import { AddCircle } from "@material-ui/icons";


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
})



const UpdateView=()=>{
    const classes=useStyle() ;
     const URL='https://images.unsplash.com/photo-1543128639-4cb7e6eeef1b?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8bGFwdG9wJTIwc2V0dXB8ZW58MHx8MHx8&ixlib=rb-1.2.1&w=1000&q=80' ;
return(
  <Box className={classes.container}>
    <img src={URL} className={classes.image} alt="no-image" />
    <FormControl className={classes.form}>
    <AddCircle fontSize="large" color="action"/>

    <InputBase placeholder="title" className={classes.textfield} />
    <Button variant="contained" color="primary">Edit</Button>
    </FormControl>

    <TextareaAutosize
                rowsMin={5}
                placeholder="Tell your story..."
                className={classes.textarea}
                name='description'
                
            />




  </Box>


)


}


export default UpdateView ;