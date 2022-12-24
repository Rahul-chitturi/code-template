import React from "react";
import SyntaxHighlighter from "react-syntax-highlighter/dist/esm/default-highlight";
import "./App.css";
import { CodePen } from "./CodePen";

export default class App extends React.Component {

  constructor() {
    super();
  this.state = {
    language: 'javascript',
    style: "tomorrow",
    showLineNumbers: false,
    wrapLongLines: false
  };
}
  render() {


  const supportedLanguages = SyntaxHighlighter.supportedLanguages;

    return (
      <>
      <textarea></textarea>
      <div className="options__option options__option--language">
              <select
                className="select"
                value={this.state.language}
                onChange={e => this.setState({ language: e.target.value })}
              >
                {supportedLanguages.map(l => (
                  <option key={l} value={l}>
                    {l}
                  </option>
                ))}
              </select>
            </div>
      <div class="container">
      <div class="mac-terminal">
        <div class="header">
          <div class="header__op">
            <span class="header__op-icon header__op-icon--red"></span>
            <span class="header__op-icon header__op-icon--yellow"></span>
            <span class="header__op-icon header__op-icon--green"></span>
          </div>
          <div class="header__title">root@macbook:~/projects</div>
          <div class="header__empty"></div>
        </div>
        <div class="body">
          <div class="body__row">
           <CodePen>
            '<div>
              <code>
                Hi
              </code>
              </div>'
           </CodePen>
          </div>
                  
        </div>
      </div>
    </div>
    </>
    );
  }
}
