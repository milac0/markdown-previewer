import React from 'react';
import './App.css'

let marked = require("marked");
class App extends React.Component{
  constructor(props){
    super(props);
    this.state = {
        input: ""
    };
    this.handleChange = this.handleChange.bind(this);
    this.getMarkdownText = this.getMarkdownText.bind(this);
  }

  handleChange (e) {
    this.setState({input: e.target.value});
  };

  componentDidMount (){
    this.setState({input: `
# Header  
## Header 2
### Header 3
![alt text](https://github.com/adam-p/markdown-here/raw/master/src/common/images/icon48.png "Logo Title Text 1")

[I'm an inline-style link](https://www.google.com)
1. prvi
1. drugi
1. treci

\`inline-code\`

\`\`\`
block-code
var s = "JavaScript syntax highlighting";
alert(s);
\`\`\`  
**boldano**

> This is a very long line that will still be quoted properly when it wraps. Oh boy let's keep writing to make sure this is long enough to actually wrap for everyone. Oh, you can *put* **Markdown** into a blockquote.


`});
  };

  getMarkdownText () {
    let myMark = marked(this.state.input);
    return { __html: myMark};
  };

  render(){
    return (
      <div className="App">
      <div id="items">
          <textarea
          id="editor"
          value={this.state.input}
          onChange={this.handleChange}
          ></textarea>
      </div>
      <div id="items">
      <div
      id="preview"
      contentEditable='true'
      dangerouslySetInnerHTML={this.getMarkdownText()}
      >
      </div>
      </div>
  </div>
    );
  };
};

export default App;
