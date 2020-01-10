import React from 'react';
import Table from './components/Table'

class App extends React.Component {
    constructor(props) {
      super(props)
      this.state = {
        rows: 0,
        cols: 0,
        color: 'gray'
      }
    }
  
    render() {
        return (
            <div>
              <Table rows={5} cols={5} />
            </div>
        )
    }
    
}

export default App;
