import React from 'react'

function TableCell(props) {
    if (props.colorAll) {
        
        return <td style={{backgroundColor: 'pink'}} onClick={props.changeColor}></td>
    } else {
        return (
            <td onClick={props.changeColor}></td>
        )
    }

}

export default TableCell