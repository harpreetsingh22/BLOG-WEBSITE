import { Box,makeStyles, Typography } from "@material-ui/core";

import {Edit,Delete} from "@material-ui/icons" ;

import {Link} from "react-router-dom"


const useStyle=makeStyles({

    container :{
     padding :'0 100px'
    }  ,

    image:{
        width:'100%' ,
        height:'50vh' ,
        objectFit:'cover'
    }  ,

    icons :{
      float:'right'  ,
    } ,

    icon:{
      margin : 5  ,
      border: '1px solid #878787' ,
      borderRadius:10 
    } ,

    title:{
      fontSize:38  ,
      fontWeight:600 ,
      textAlign:'center' ,
      margin :'50px 0 10px ' 
    }   ,

    subheading:{
          color:'#878787'  ,
          display:'flex'  ,
          margin :'20px 0'
    }


})


const DetailView=()=>{
  const classes=useStyle() ;
   const URL='https://images.unsplash.com/photo-1543128639-4cb7e6eeef1b?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8bGFwdG9wJTIwc2V0dXB8ZW58MHx8MHx8&ixlib=rb-1.2.1&w=1000&q=80' ;
return(
  <Box className={classes.container}> 
    <img src={URL}    alt='not found' className={classes.image} />
    <Box className={classes.icons}>
   <Link to='/update'> <Edit className={classes.icon} color="primary"/> </Link>
    <Delete className={classes.icon} color="error"/>
    
    </Box>
    <Typography className={classes.title}>Title of the Blog</Typography>

    <Box className={classes.subheading}>
      <Typography>Author : <span style={{fontWeight:600}}>Harry</span> </Typography>
      <Typography style={{marginLeft:'auto'}}>07 Nov 2021 </Typography>
    </Box>
    <Typography>
      India knockout from icc world t20 2021 . India knockout from icc world t20 2021 . India knockout from icc world t20 2021 . India knockout from icc world t20 2021 .
    </Typography>

  </Box>

)

}


export default DetailView   ;