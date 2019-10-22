import React, { Fragment, useState, useEffect} from 'react';
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

  useEffect(()=> {

  }, [markdown])

  const handleChange = e => {
    setMarkdown(e.target.value)
  }

  const createMarkup = () => ({
    __html: marked(markdown)
  })
  // console.log
  return (
    <Fragment>
      <AppBar position="static">
          <Typography variant="h6">
            News
          </Typography>
      </AppBar>
      <Grid container>
        <Grid item sm={6}>
        <textarea rows="4" cols="50"
        style={{width: 500, height: 500}}
        label="markdown"
        value={markdown}
        onChange={handleChange}
      />
        </Grid>
        <Grid item sm={6}>
          <div dangerouslySetInnerHTML={createMarkup()} />
        </Grid>
      </Grid>
    </Fragment>
  );
};

export default App;