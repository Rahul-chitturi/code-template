import React, { useEffect, useState } from "react";
import SyntaxHighlighter from "react-syntax-highlighter/dist/esm/default-highlight";
import { styles } from "../utils";
import "./App.css";

export default function App() {

  const supportedLanguages = SyntaxHighlighter.supportedLanguages;
  const [language, setLanguage] = useState("javascript");
  const [name, setName] = useState("HTML");
  const [style, setStyle] = useState("a11y-dark");
  const [script, setScript] = useState("console.log('hello world!')");

  useEffect(()=>{
    console.log(style)
  }
  , [language,style])
  return (
    <div className="sudo-main">
        <div className="sudo-content">
       
      <div className="section-one container">
        <label htmlFor="script">Script</label>
      <textarea className="form-control" value={script}   onChange={e => setScript(e.target.value)} name="script" id="script"></textarea>
      <label htmlFor="title">Title</label>
      <input className="form-control" name="title" placeholder="Title"></input>
      <div className="w-full">
      <label htmlFor="ln">Language</label>
        <select
          className="form-control"
          value={language}
          name="ln"
          onChange={e => setLanguage(e.target.value)}
        >
          {supportedLanguages.map(l => (
            <option key={l} value={l}>
              {l}
            </option>
          ))}
        </select>
      </div>
      <div className="w-full">
      <label htmlFor="ln">Theme</label>
        <select
          className="form-control"
          value={style}
          name="ln"
          onChange={e => setStyle(e.target.value)}
        >
          {styles.map(l => (
            <option key={l} value={l}>
              {l}
            </option>
          ))}
        </select>
      </div>
      </div>
      <div className="container">
        <div className="mac-terminal" >
          <div className="header">
            <div className="header__op">
              <span className="header__op-icon header__op-icon--red"></span>
              <span className="header__op-icon header__op-icon--yellow"></span>
              <span className="header__op-icon header__op-icon--green"></span>
            </div>
            <div className="header__title">{name}</div>
            <div className="header__empty"></div>
          </div>
          <div className="body">
            <div className="body__row">
            <SyntaxHighlighter language={language} style={require(`react-syntax-highlighter/dist/esm/styles/hljs/${style}`).default}>
            {script}
            </SyntaxHighlighter>
            </div>

          </div>
        </div>
      </div>
      </div>
    </div>
  );
}
