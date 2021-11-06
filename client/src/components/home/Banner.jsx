import { makeStyles ,Box } from "@material-ui/core";
 const useStyle=makeStyles({
     image:{
        background: `url(${'https://images.pexels.com/photos/1714208/pexels-photo-1714208.jpeg'}) center/55% repeat-x #000`,
        height: '50vh',
        width :'100%'
     }

 })  ;

const Banner=()=>{
    const classes=useStyle()  ;
    const url='https://images.pexels.com/photos/1714208/pexels-photo-1714208.jpeg' ;
    return (

     <Box className={classes.image}> 

         </Box>

    )
}

export default Banner ;