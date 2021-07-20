import { makeStyles } from "@material-ui/core";

const useStyles=makeStyles((theme)=>({
    container:{
      backgroundColor:theme.palette.background.paper,
      padding:theme.spacing(8,0,6)
    },
    buttons:{
        marginRight:'20px'
    },
    icons:{
        marginTop:'40px'
    },
    cardGrid:{
        padding:'20px 0px '
    },
    card:{
        height:"100%",
        display:'flex',
        flexDirection:"column"
    },
    cardMedia:{
        paddingTop:"56.25%"
    },
    cardContent:{
        flexGrow:1
    },
    footer :{
        backgroundColor:theme.palette.background.paper,
        padding:"50px 0px"
    }
  }))
  
  export default useStyles