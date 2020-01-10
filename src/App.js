import React from 'react';
import Table from './components/Table'
import './App.css'

class App extends React.Component {
    constructor(props) {
      super(props)
      this.state = {
        rows: 4,
        cols: 5,
        color: 'gray'
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

    changeCellColor = newColor => {
      
    }

    changeColor = newColor => {
      this.setState({color: newColor})
    }

    render() {
        return (
            <div className='App'>
              <select >
                <option value="blue">Blue</option>
                <option value="cyan">Cyan</option>
                <option value="turquoise">turquoise</option>
              </select>
              <button onClick={this.addCol}>add col</button>
              <button onClick={this.addRow}>add Row</button>
              <button onClick={this.removeCol}>remove col</button>
              <button onClick={this.removeRow}>remove Row</button>
              <Table 
                rows={this.state.rows} 
                cols={this.state.cols} 
                /* color={this.state.color}  */
                changeColor={this.changeCellColor(this.state.color)}
              />
            </div>
        )
    }
    
}

export default App;
