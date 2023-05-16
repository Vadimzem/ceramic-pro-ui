import React from 'react';
import './App.scss';
import {TextField} from "./components/TextField/TextField";
import {TextArea} from "./components/TextArea/TextArea";

function App() {
    return (
        <div className="App">
            <TextField />
            <TextArea />
        </div>
    );
}

export default App;
