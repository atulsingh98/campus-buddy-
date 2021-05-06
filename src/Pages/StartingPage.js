import React,{useState} from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import TextField from "@material-ui/core/TextField";


const useStyles = makeStyles({
  root: {
    minWidth: 275,
  },
  bullet: {
    display: "inline-block",
    margin: "0 2px",
    transform: "scale(0.8)",
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
  mainContainer: {
    flex: 1,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height:'100vh',
    width:'100%',

  },
  FormField:{
      margin:'5%'
  },
  TextField:{
      widows:'100%'
  }
});

export default function StartingPage() {
  const classes = useStyles();
  const [email,setEmail]=useState('');
  const [password,setPassword]=useState('');
  const onSubmit=(event)=>{
      event.preventDefault();

  }
  
  const bull = <span className={classes.bullet}>•</span>;

  return (
    <div className={classes.mainContainer}>
      <Card className={classes.root}>
        <CardContent>
          <form onSubmit={onSubmit}>
            <div className={classes.FormField}>
              <TextField className={classes.TextField}
                id="outlined-basic"
                label="Email"
                variant="outlined"
                value={email}
                onChange={(e)=>{setEmail(e.target.value)}}
              />
            </div>
            <div className={classes.FormField} >
              <TextField className={classes.TextField}
              value={password}

                type="password"
                id="outlined-basic"
                label="Password"
                variant="outlined"
                onChange={(e)=>{setPassword(e.target.value)}}
              />
            </div>
            <div className={classes.FormField}>
              <Button className={classes.TextField}
                
                type="submit"
                variant="outlined"
                color="primary"
                href="#outlined-buttons"
              >
                Primary
              </Button>
            </div>
          </form>
        </CardContent>
        
      </Card>
    </div>
  );
}
