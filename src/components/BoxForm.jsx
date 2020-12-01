import React from 'react';

const BoxForm = ({width, height, color, handleChange, handleSubmit}) => {
    
    return ( 
        <form onSubmit={handleSubmit}>
            <h1>Enter The Box Data</h1>
            <label htmlFor="width">Width: </label>
            <input type="number" name="width" value={width} onChange={handleChange}/>
            <br/>
            <label htmlFor="height">Height: </label>
            <input type="number" name="height" value={height} onChange={handleChange}/>
            <br/>
            <br/>
            <label htmlFor="color">Color: </label>
            <input type="color" name="color" value={color} onChange={handleChange}/>
            <br />
            <br />
            <button>Add Box</button>
        </form>
     );
}
 
export default BoxForm;