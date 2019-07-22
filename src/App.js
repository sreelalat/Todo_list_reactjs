import React from "react";
import './App.css';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      personData: []
    }
  }


  addfunc = () => {
    let newItem = { text: "Introduction to react", isCompleted: false };
    var newarray = [...this.state.personData, newItem];
    this.setState({ personData: newarray });
  }
  deletefunc = (index) => {
    this.setState(this.state.personData.splice(index,1));
  }
  render() {
    console.log(this.state.personData)
    return (
      <>
        <div className="header">
          <h2>Todo List</h2>
          <button onClick={() => this.addfunc()}>Add</button>
        </div>

        <hr />
        {this.state.personData.map((person, index) => (
          <>
            <h3 key={index}> {person.text} </h3>
            <button onClick={() => this.deletefunc(index)}>Delete</button>
          </>
        ))}


      </>
    );
  }
}

export default App;