import React, { Fragment, useState} from 'react';
import startingInput from './util/startingInput'
import marked from 'marked'

//mui
import AppBar from '@material-ui/core/AppBar';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid'
import Paper from '@material-ui/core/Paper'

const App = () => {
  const [markdown, setMarkdown] = useState(startingInput)

  const handleChange = e => {
    setMarkdown(e.target.value)
  }

  const createMarkup = () => ({
    __html: markdown
  })

  return (
    <Fragment>
      <AppBar position="static">
          <Typography variant="h6">
            News
          </Typography>
      </AppBar>
      <Grid container>
        <Grid item>
        <TextField
        fullWidth
        label="markdown"
        value={markdown}
        onChange={handleChange}
        margin="normal"
      />
        </Grid>
        <Grid item>
          <div dangerouslySetInnerHTML={createMarkup()} />
        </Grid>
      </Grid>
    </Fragment>
  );
};

export default App;