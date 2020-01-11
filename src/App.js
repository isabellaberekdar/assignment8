import React from "react"
import { Table } from "./components"
import "./App.css"

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      rows: 4,
      cols: 5,
      color: "blue",
      colorAll: false
    }
  }

  addCol = () => {
    this.setState({ cols: this.state.cols + 1 })
  }

  addRow = () => {
    this.setState({ rows: this.state.rows + 1 })
  }

  removeCol = () => {
    if (this.state.cols > 0) {
      this.setState({ cols: this.state.cols - 1 })
    }
  }

  removeRow = () => {
    if (this.state.rows > 0) {
      this.setState({ rows: this.state.rows - 1 })
    }
  }

  changeCellColor = e => {
    const event = e.target
    this.setState({ colorAll: false }, () => {
      event.style.backgroundColor = this.state.color
    })
  }

  changeColor = e => {
    this.setState({ color: e.target.value })
  }

  clear = e => {
    this.setState({ colorAll: true })
  }

  render() {
    return (
      <div className='App'>
        <select name='color' onChange={this.changeColor}>
          <option value='blue'>Blue</option>
          <option value='cyan'>Cyan</option>
          <option value='turquoise'>Turquoise</option>
          <option value='pink'>Pink</option>
        </select>
        <button onClick={this.addCol}>Add Column</button>
        <button onClick={this.addRow}>Add Row</button>
        <button onClick={this.removeCol}>Remove Col</button>
        <button onClick={this.removeRow}>Remove Row</button>
        <Table
          rows={this.state.rows}
          cols={this.state.cols}
          changeColor={this.changeCellColor}
          color={this.state.color}
          colorAll={this.state.colorAll}
        />
        <button onClick={this.clear}>Clear Cells</button>
        <button onClick={this.clear}>Color All</button>
      </div>
    )
  }
}

export default App
