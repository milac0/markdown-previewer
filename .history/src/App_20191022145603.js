import React, { Fragment, useState} from 'react';
import startingInput from './util/startingInput'

//mui
import AppBar from '@material-ui/core/AppBar';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid'

const App = () => {
  const [markdown, setMarkdown] = useState(startingInput)

  const handleChange = e => {
    setMarkdown(e.target.value)
  }
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
        label="markdown"
        value={markdown}
        onChange={handleChange}
        margin="normal"
      />
        </Grid>
        <Grid item>

        </Grid>
      </Grid>
    </Fragment>
  );
};

export default App;