import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { TextField, Button } from "@material-ui/core/";

import { useTheme } from "@material-ui/core/styles";
import useMediaQuery from "@material-ui/core/useMediaQuery";

const useStyles = makeStyles((theme) => ({
  root: {
    // display: "flex",
    // flexWrap: "wrap",
    fontSize: "4vh",
  },
  textField: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
    // [theme.breakpoints.down("sm")]: {
    //   width: 500,
    // },
  },
}));

export default function Register() {
  const classes = useStyles();

  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.down("sm"));
  console.log(matches);

  return (
    <div className={classes.root}>
      {/* <center> */}
      <div
        style={
          matches
            ? {
                marginRight: 300,
                marginLeft: 20,
                marginTop: 80,
                //   borderWidth: "2px",
                //   borderStyle: "inset",
              }
            : {
                marginRight: 20,
                marginLeft: 100,
                marginTop: 10,
                //   borderWidth: "2px",
                //   borderStyle: "inset",
              }
        }
      >
        <h2 align="center">Book Register</h2>
        <br />

        <form className={classes.root} noValidate autoComplete="off">
          <TextField id="name" label="Name" fullWidth />
          <br />
          <TextField id="email" label="Email" fullWidth />
          <br />
          <TextField id="pass" label="Password" fullWidth />
          <br />
          <Button
            variant="outlined"
            color="secondary"
            style={{ marginTop: "5px" }}
            //   onClick={() => handleInsertBook()}
          >
            Submit
          </Button>
        </form>
      </div>
      {/* </center> */}
    </div>
  );
}
