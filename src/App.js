import React, { Component } from 'react';
import LeftSection from "./components/LeftSection/MainLeftSection"
import RightSection from './components/RIghtSection/MainRightSection';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css"
import './App.css';

class App extends Component {
  state = {
  }

  async componentDidMount() {
    const localData = sessionStorage
    console.log(localData.length)
    if (localData.length === 0) {
      await this.setState(
        {
          leftSection : [
            {name: "Vu Hoang Duc Hieu"},
            {description: "blah blah"}
          ],
          rightSection :[
            {data1 : "aaaaaaaa0"},
            {data2: "bbbbbbbbbb0"},
            {data3: "cccccccccccccc"}
          ]
        }
      )
      await console.log(this.state)
    } else {

    }
  }

  changeName = text => this.setState({ name: text })

  render() {

    const data = this.state
    console.log("data: " ,data.leftSection)
    return ( 
      <div className="App">
        <main>
          <LeftSection data={this.state} changeName={this.changeName} />
          <RightSection />
        </main>
      </div>

    );
  }
}

export default App;
