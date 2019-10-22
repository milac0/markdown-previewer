import React, { Fragment, useState, useEffect} from 'react';
import startingInput from './util/startingInput'
import marked from 'marked'

//mui
import AppBar from '@material-ui/core/AppBar';
import Typography from '@material-ui/core/Typography';
import TextareaAutosize from '@material-ui/core/TextareaAutosize';
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

  return (
    <Fragment>
      <AppBar position="static">
          <Typography variant="h6">
            Markdown Previewer
          </Typography>
      </AppBar>
      <Grid className="container" container spacing={2}>
        <Grid item sm={6}>
        <div className="item">
        <textarea rows="4" cols="50"
        style={{width: '100%', height: 555}}
        label="markdown"
        value={markdown}
        onChange={handleChange}
      />
        </div>
        </Grid>
        <Grid item sm={6}>
          <div  className="item" dangerouslySetInnerHTML={createMarkup()}         
          style={{width: '100%', height: 555}}/>
        </Grid>
      </Grid>
    </Fragment>
  );
};

export default App;