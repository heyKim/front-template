import React from 'react';

class Module2 extends React.Component {
  //move to index.html
  routeMain() {
    window.location.href = 'index.html';
  }
  //move to module1.html
  routeModule1() {
    window.location.href = 'module1.html';
  }
  //move to module2.html
  routeModule2() {
    window.location.href = 'module2.html';
  }
  render(){
        return (
          <div>
                <button onClick={this.routeMain}>Main</button>
                <button onClick={this.routeModule1}>Module1</button>
                <button onClick={this.routeModule2}>Module2</button>
                <h1>This is Module2</h1>

          </div>
        );
    }
}

export default Module2;
