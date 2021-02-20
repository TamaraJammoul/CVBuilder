import React,{useState} from "react";
import {TextField, Paper, Grid, Button, Box} from "@material-ui/core";
import {ResetPasswordLink} from "./../store/action/action";
import {useSelector, useDispatch} from "react-redux";



export default function ForgetPassword() {
  const [email, setEmail] = useState("");
  const dispatch = useDispatch();
  
  return (
    <Grid container justify="center" direction="column" alignItems="center" style={{marginTop:"50px"}}> 
      <Grid item xs={12}>
        <Paper elevation={3} style={{width: "600px", padding: "30px"}}>
          <Grid
            container
            justify="center"
            direction="column"
            alignItems="center"
            spacing={8}
          >
            <Grid item xs={12}>
              <h3 style={{paddingTop: "30px"}}>Forget your password?</h3>{" "}
            </Grid>
            <Grid item xs={12}>
              <TextField
                type="email"
                label="Email"
                variant="outlined"
                style={{width: "400px"}}
                className="textField"
                onChange={(e)=>setEmail(e.target.value)}
              />
            </Grid>
            <Grid item xs={12}>
              <Button variant="contained" color="primary" onClick={()=>{
                localStorage.setItem("email",email)
                dispatch(ResetPasswordLink({email}))}}>
                Send
              </Button>{" "}
            </Grid>
          </Grid>
        </Paper>
      </Grid>
      <Grid item xs={12}></Grid>
    </Grid>
  );
}
