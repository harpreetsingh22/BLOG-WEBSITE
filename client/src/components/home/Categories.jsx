
import {Button,makeStyles,Table,TableBody,TableCell,TableHead,TableRow} from '@material-ui/core' ;
import {Link} from 'react-router-dom' ;

const useStyle=makeStyles({
    create:{
        margin:20 ,
        background:'#6495ED' ,
        color:'#fff'
    }  ,

    table: {
        border: '1px solid rgba(224, 224, 224, 1)'
    } ,
    link:{
        textDecoration:'none'  ,
        color:'inherit'
    }


})

const Categories=()=>{

    const classes=useStyle() ;

return (
   <>
  < Link to='/create' className={classes.link}> <Button variant="contained" className={classes.create}>Create Blog</Button> </Link> 
    <Table className={classes.table}>
     <TableHead>
         <TableRow>
             <TableCell> ALL CATEGORIES</TableCell>
         </TableRow>
     </TableHead>
      <TableBody>
      <TableRow>
             <TableCell> Music</TableCell>
         </TableRow>

         <TableRow>
             <TableCell> Sports</TableCell>
         </TableRow>


         <TableRow>
             <TableCell> Tech</TableCell>
         </TableRow>

         <TableRow>
             <TableCell>Fashion</TableCell>
         </TableRow>

         <TableRow>
             <TableCell>Movies</TableCell>
         </TableRow>






      </TableBody>



    </Table>



</>

)




}

export default Categories  ;