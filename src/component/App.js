import React from "react";
import "./App.css";

export default class App extends React.Component {

  render() {
    return (
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
            <code>
              ssfdf
            </code>
          </div>
                  
        </div>
      </div>
    </div>
    );
  }
}
