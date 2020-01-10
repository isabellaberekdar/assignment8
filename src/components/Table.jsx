import React from 'react';
import TableRow from './TableRow'

function Table(props) {
    let rows = []
    for(let i=0; i < props.rows; i++) {
        rows.push(
            <TableRow 
                color={props.color}
                colorAll={props.colorAll}
                cols={props.cols} 
                changeColor={props.changeColor}
            />
        )
    }
    return (
        <div>
            <table>
                {rows.map(row => row)}
            </table>
        </div>
    )
}

export default Table