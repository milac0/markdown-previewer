import React, { Fragment, useState} from 'react';
import startingInput from './util/startingInput'

//mui
import AppBar from '@material-ui/core/AppBar';
import Typography from '@material-ui/core/Typography';

const App = () => {
  const [markdown, setMarkdown] = useState(startingInput)
  return (
    <AppBar position="static">
          <Typography variant="h6">
            News
          </Typography>
      </AppBar>
  );
};

export default App;