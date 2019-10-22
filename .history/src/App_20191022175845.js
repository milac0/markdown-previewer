import React, { Fragment, useState } from "react";
import startingInput from "./util/startingInput";
import marked from "marked";

//mui
import AppBar from "@material-ui/core/AppBar";
import Typography from "@material-ui/core/Typography";

const App = () => {
  const [markdown, setMarkdown] = useState(startingInput);

  const handleChange = e => {
    setMarkdown(e.target.value);
  };

  const createMarkup = () => ({
    __html: marked(markdown)
  });

  return (
    <Fragment>
      <AppBar position="static">
        <Typography variant="h4" align="center">
          Markdown Previewer
        </Typography>
      </AppBar>
      <div className="container">
        <div className="item">
        <Typography variant="h6" align="center">
          Input
        </Typography>
          <textarea
            label="markdown"
            value={markdown}
            onChange={handleChange}
          />
        </div>
        <div className="item">
        <Typography variant="h6" align="center">
          Preview
        </Typography>
          <p dangerouslySetInnerHTML={createMarkup()}></p>
        </div>
      </div>
    </Fragment>
  );
};

export default App;
