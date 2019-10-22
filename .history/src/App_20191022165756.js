import React, { Fragment, useState, useEffect} from 'react';
import startingInput from './util/startingInput'
import marked from 'marked'

//mui
import AppBar from '@material-ui/core/AppBar';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid'
import { withStyles } from '@material-ui/core/styles';

const styles = {
  container: {
    width: '90%',
    maxWidth: 960,
    margin: '0 auto'
  },
  textarea: {
  background: '#fafafa',
  margin: 0,
  padding: 0,
  border: 'none',
  resize: 'none'
  }
}

const App = ({ classes }) => {
  const [markdown, setMarkdown] = useState(startingInput)

  const handleChange = e => {
    setMarkdown(e.target.value)
  }

  const createMarkup = () => ({
    __html: marked(markdown)
  })

  return (
    <Fragment>
      <AppBar position="static">
          <Typography variant="h6" align="center">
            Markdown Previewer
          </Typography>
      </AppBar>
      <div  className={classes.container}>
      <Grid container spacing={2} justify="space-between">
        <Grid item sm={6}>
        <div className="item">
        <textarea
        className={classes.textarea}
        style={{width: '100%', height: 555}}
        label="markdown"
        value={markdown}
        onChange={handleChange}
      />
        </div>
        </Grid>
        <Grid item sm={6} style={{position:'relative'}}>
          <div  className="item" dangerouslySetInnerHTML={createMarkup()}>
                 </div>
        </Grid>
      </Grid>
      </div>
    </Fragment>
  );
};

export default withStyles(styles)(App);