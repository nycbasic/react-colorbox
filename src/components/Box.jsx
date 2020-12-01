import React from 'react';

const Box = ({colorBox}) => {
    return colorBox.map(box => {
       const {width, height, color} = box;
        const boxStyle = {
            width: parseInt(width),
            height: parseInt(height),
            backgroundColor: color
        }
        console.group(box)
    return <div style={boxStyle}></div>
    })
}
 
export default Box;