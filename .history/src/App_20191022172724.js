import React, { Fragment, useState, useEffect } from "react";
import startingInput from "./util/startingInput";
import marked from "marked";

//mui
import AppBar from "@material-ui/core/AppBar";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import { withStyles } from "@material-ui/core/styles";

const styles = {
  container: {
    width: "90%",
    maxWidth: 960,
    margin: "0 auto",

  },
  textarea: {
    background: "#fafafa",
    margin: 0,
    padding: 0,
    border: "none",
    resize: "none",
    width: "100%",
    height: 555
  },
  item: {
    background: "#fafafa",
    width: "95%",
    height: "555px",
    margin: "1em 0 0 0",
    border: "1px solid #000000",
    padding: "1em",
    overflowY: "auto",
    overflowX: "auto"
  }
};

const App = ({ classes }) => {
  const [markdown, setMarkdown] = useState(startingInput);

  const handleChange = e => {
    setMarkdown(e.target.value);
  };

  const createMarkup = () => ({
    __html: marked(markdown)
  });

  return (
    <Fragment>
      <AppBar color="primary" position="static">
        <Typography variant="h6" align="center">
          Markdown Previewer
        </Typography>
      </AppBar>
      <div className="container">
        <div className={classes.item}>
          <textarea
            className={`${classes.textarea} textarea`}
            label="markdown"
            value={markdown}
            onChange={handleChange}
          />
        </div>
        <div className={classes.item}>
          <p dangerouslySetInnerHTML={createMarkup()}></p>
        </div>
      </div>
    </Fragment>
  );
};

export default withStyles(styles)(App);