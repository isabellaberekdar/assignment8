import React from 'react';
import Table from './components/Table'
import './App.css'

class App extends React.Component {
    constructor(props) {
      super(props)
      this.state = {
        rows: 4,
        cols: 5,
        color: 'blue'
      }
    }
    
    addCol = () => {
      this.setState({cols: this.state.cols + 1})
    }

    addRow = () => {
      this.setState({rows: this.state.rows + 1})
    }

    removeCol = () => {
      if (this.state.cols > 0) {
        this.setState({cols: this.state.cols - 1})
      }
    }
    removeRow = () => {
      if (this.state.rows > 0) {
        this.setState({rows: this.state.rows - 1})
      }
    }

    changeCellColor = e => {
      e.target.style.backgroundColor = this.state.color
    }

    changeColor = e => {
      this.setState({color: e.target.value})
    }

    render() {
        return (
            <div className='App'>
              <select name="color" onChange={this.changeColor}>
                <option value={'blue'}>Blue</option>
                <option value="cyan">Cyan</option>
                <option value={'turquoise'}>Turquoise</option>
                <option value={'pink'}>Pink</option>
              </select>
              <button onClick={this.addCol}>Add col</button>
              <button onClick={this.addRow}>Add Row</button>
              <button onClick={this.removeCol}>Remove col</button>
              <button onClick={this.removeRow}>Remove Row</button>
              <Table 
                rows={this.state.rows} 
                cols={this.state.cols} 
                color={this.state.color}
                changeColor={this.changeCellColor}
              />
            </div>
        )
    }
    
}

export default App;
