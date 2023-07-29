import React, { useState } from 'react'

export default function TextForm(props) {
    //------------- 1- converting text to uppercase 
    const handleUpClick = () => {
        // console.log("uppercase was clicked" + text);
        let newText = text.toUpperCase();
        setText(newText)
        // props.showAlert("Converted to uppercase!", "success");
    }
    //------------- 2- converting text to lowercase
    const handleLowClick = () => {
        // console.log("uppercase was clicked" + text);
        let newText = text.toLowerCase();
        setText(newText)
        // props.showAlert("Converted to lowercase!", "success");
    }
    //------------- 3- converting text to bold
    // const boldText = () => {
    //     let boldChar = text.charAt(0)
    //     let newText = boldChar.big();
    //     setText(newText);
    // }

  //------------- 4- converting first character of a text to capital   
    const capitalize = () => {

        let firstchar = text.charAt(0); // storing the first char of the string
        let newText = firstchar.toUpperCase(); // converting that to uppercase
        setText(newText + text.slice(1)); // printing it with rest excluding the first char by using slice

    }

    //------------- 5-
    const handleOnChange = (event) => {
        // console.log("on change");
        setText(event.target.value);
    }

    //------------- 6- copy text
    const handlCopy = () => {
        // console.log("copy hu main");
        var text = document.getElementById("myBox");
        text.select();
        navigator.clipboard.writeText(text.value);
        document.getSelection().removeAllRanges();
        // props.showAlert("Copied to Clipboard!", "success");
    }

    //------------- 7- delete extra spaces
    const handleExtraSpaces =() =>{
        let newText = text.split(/[ ]+/);
        setText(newText.join(" "))
        // props.showAlert("Extra spaces removed", "success");
    }
//------------- 8- clear text
const handleclearClick =() =>{
    let newText = '';
    setText(newText);
    // props.showAlert("Text cleared!", "success");
}

    //------------- front view of a project
    const [text, setText] = useState('');
    // text = "new text"; // wrong way to change the state
    // setText("new text"); // correct way to change the state
    return (
        <>
            <div className="container" style={{ color: props.mode === 'dark' ? 'white' : '#6a7777' }}>
                <h1 className="my-2">{props.heading}</h1>
                <div className="mb-3">
                    <textarea className="form-control" value={text} onChange={handleOnChange} style={{backgroundColor: props.mode === 'dark' ? '#13466e' : 'white',
                        color: props.mode === 'dark' ? 'white' : '#1E2931'}} id="myBox" rows="5"></textarea>
                </div>
                <button disabled={text.length===0} className="btn btn-primary mx-2 my-1" onClick={handleUpClick}>Convert to uppercase</button>
                <button disabled={text.length===0} className="btn btn-primary mx-2 my-1" onClick={handleLowClick}>Convert to lowercase</button>
                <button disabled={text.length===0} className="btn btn-primary mx-2 my-1" onClick={capitalize}>Convert first letter to uppercase</button>
                {/* <button disabled={text.length===0} className="btn btn-primary my-1" onClick={boldText}>Convert to bold</button> */}
                <button disabled={text.length===0} className="btn btn-primary mx-2 my-1" onClick={handlCopy}  >copy text</button>
                <button disabled={text.length===0} className="btn btn-primary mx-2 my-1" onClick={handleExtraSpaces}  >Remove ExtraSpaces</button>
                <button disabled={text.length===0} className="btn btn-primary mx-2 my-1" onClick={handleclearClick}  >Clear Text</button>

            </div>
            <div className="container my-3" style={{ color: props.mode === 'dark' ? 'white' : '#6a7777' }}>
                <h2>Your text summary</h2>
                <p>{text.split(/\s+/).filter((element)=> {return element.length!==0}).length} words and {text.length} characters</p>
                <p>{0.008 * text.split(" ").filter((element)=> {return element.length!==0}).length} Minutes to read it.</p>
                <h2>Preview</h2>
                <p>{text.length > 0 ? text : "Enter somethong in the textbox above to preview it here"}</p>
            </div>
        </>
    )
}
