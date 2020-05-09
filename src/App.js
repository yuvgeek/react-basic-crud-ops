import React from "react";
import "./App.css";
import { Title } from "./Title";
class App extends React.PureComponent {
  state = {
    title: "Sudharsan - Architect",
    description: "He is the architect and senior developer",
  };
  render() {
    return (
      <div>
        <Title
          title={this.state.title}
          description={this.state.description}
          updateTitleBtnAction={this.updateTitleBtnAction}
        />
      </div>
    );
  }

  updateTitleBtnAction = () => {
    this.setState({ title: "Sudharsan" });
  };
}

export default App;
