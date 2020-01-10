import React from 'react';
import TableRow from './TableRow'

function Table(props) {
    let rows = []
    for(let i=0; i < props.rows; i++) {
        rows.push(<TableRow cols={props.cols} />)
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