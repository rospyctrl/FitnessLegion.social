import {
  Button,
  Grid,
  makeStyles,
  TextField,
  Typography,
} from "@material-ui/core";
import React from "react";
import styles from "./LoginForm.module.css";

const useStyles = makeStyles((theme) => ({
  mainDiv: {
    paddingTop: "1rem",
    [theme.breakpoints.up("sm")]: {},
  },
  loginDiv: {
    paddingTop: "2rem",
    width: "70%",
    margin: "auto",
  },
  textField: {
    margin: "1rem 0.4rem",
  },
  loginButton: {
    width: "70%",
    margin: "2rem 1rem",
    padding: "0.9rem 0.5rem",
  },
  heading: {
    letterSpacing: "0.4px",
    fontSize: "1.725rem",
  },
}));

const LoginForm = (props) => {
  const classes = useStyles();
  return (
    <div className={styles.main_container}>
      <Grid container className={classes.mainDiv}>
        <Grid item xs={12}>
          <Typography variant="h5" gutterBottom className={classes.heading}>
            Login
          </Typography>
          <Typography variant="subtitle1">Login to your account</Typography>
        </Grid>
        <Grid container className={classes.loginDiv}>
          <Grid item xs={12}>
            <TextField
              fullWidth
              className={classes.textField}
              id="outlined-basic"
              type="email"
              label="Email"
              variant="outlined"
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              fullWidth
              className={classes.textField}
              id="outlined-basic"
              type="password"
              label="Password"
              variant="outlined"
            />
          </Grid>
          <Grid item xs={12}>
            <Button
              variant="contained"
              color="primary"
              className={classes.loginButton}
            >
              Login
            </Button>
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
};

export default LoginForm;