import React from 'react';

const Box = ({colorBox}) => {
    console.log(colorBox)
    return colorBox.map(box => {
       const {width, height, color} = box;
        const boxStyle = {
            width,
            height,
            color
        }
        console.log(boxStyle)
        return <div style={boxStyle}></div>
    })
}
 
export default Box;