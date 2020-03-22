import React, { Component } from 'react';
import LeftSection from "./components/LeftSection/MainLeftSection"
import RightSection from './components/RIghtSection/MainRightSection';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css"
import './App.css';

class App extends Component {
  state = {
  }

  componentDidMount() {
    const localData = sessionStorage
    console.log(localData.length)
    if (localData.length === 0) {
      this.setState(
        {
          leftSection: [
            { name: "Name", value: "Vu Hoang Duc Hieu" },
            { name: "Description", value: "Alo Alo 1234" }
          ],
          rightSection: [
            { data1: "aaaaaaaa0" },
            { data2: "bbbbbbbbbb0" },
            { data3: "cccccccccccccc" }
          ]
        }
      )
    } else {

    }
  }

  ChangeLeftContent = (name, value) => {
    if (this.state.leftSection) {
      let cloneData = this.state.leftSection.slice()
      console.log(cloneData)
      let leftDataLength = this.state.leftSection.length
      for (let index = 0; index < leftDataLength; index++) {
        if (cloneData[index].name === name) {
          cloneData[index].value = value
          this.setState({ leftSection: [...cloneData] })
        }

      }
    }

  }

  render() {

    const data = this.state
    console.log("data: ", data.leftSection)
    return (
      <div className="App">
        <main>
          <LeftSection data={this.state} ChangeLeftContent={this.ChangeLeftContent} />
          <RightSection />
        </main>
      </div>

    );
  }
}

export default App;
