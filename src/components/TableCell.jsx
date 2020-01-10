import React from 'react'

class TableCell extends React.Component {
    render() {

        return (
            <td
                onClick={this.props.changeColor}
            >
            </td>
        )
    }
}

export default TableCell