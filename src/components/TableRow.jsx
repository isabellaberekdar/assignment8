import React from 'react';
import TableCell from './TableCell'


function TableRow(props) {
    let cells = []
    for(let i=0; i < props.cols; i++) {
        cells.push(<TableCell />)
    }
    return (
        <tr>
            {cells.map(cell => cell)}
        </tr>
    )
}

export default TableRow