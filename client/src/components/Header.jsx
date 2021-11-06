import {AppBar,Toolbar,Typography,makeStyles} from '@material-ui/core' ;

const useStyle = makeStyles({
    component: {
        background: '#FFFFFF',
        color: 'black'
    },
    container: {
        justifyContent: 'center',
        '&  >*': {
            padding: 20,
            color: 'black',
            textDecoration: 'none'
        }
    }
})



const Header=()=>{
    const classes=useStyle()  ;

return (
    <AppBar  position="static" className={classes.component}>
     <Toolbar className={classes.container}>
        <Typography>HOME</Typography>
        <Typography>ABOUT</Typography>
        <Typography>CONTACT</Typography>
        <Typography>LOGIN</Typography>


     </Toolbar>



    </AppBar>
)


}

export default Header ;