import React from 'react';
import {Paper} from "@material-ui/core";

const Box = ({colorBox}) => {
    return colorBox.map((box, i) => {
       const {width, height, color} = box;
        const boxStyle = {
            width: parseInt(width),
            height: parseInt(height),
            backgroundColor: color
        }
    return <Paper item key={i} style={boxStyle}></Paper>
    })
}
 
export default Box;