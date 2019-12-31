import React from "react";
import ReactDOM from "react-dom";


const App = () => {

    const buttonText = 'Click me!';
    const style = { backgroundColor: 'blue', color: 'white' };



    return (
        <div>
            <label className="label" htmlFor="name">Enter Name</label>
            <input type="text" id="name" />
            <button  style={style}>
                {buttonText}
            </button>
        </div>

    );
};

ReactDOM.render(<App />, document.querySelector('#root'));