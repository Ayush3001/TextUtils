import React, { useState } from "react";

export default function TextForm(props) {
  const toUppercase = () => {
    //console.log('upper case buuton is clicked');
    let newText = text.toUpperCase();
    setText(newText);
  };
  const toLowercase = () => {
    let newText = text.toLowerCase();
    setText(newText);
  };
  const onChangeHandler = (event) => {
    //console.log('on change');
    setText(event.target.value);
  };
  const handleCopy = () => {
    let text = document.getElementById("myBox");
    text.select();
    navigator.clipboard.writeText(text.value);
    document.getSelection().removeAllRanges();
  };
  const handlesSpace = () => {
    let newText = text.split(/[ ]+/);
    setText(newText.join(" "));
  };
  const clearText = () => {
    setText("");
  };
  const [text, setText] = useState("");
  return (
    <>
      <div className="Container" style={{color: props.mode==='dark'? 'white' : 'black'}}>
        <h1>{props.heading}</h1>
        <div className="mb-3">
          <textarea
            className="form-control"
            value={text}
            onChange={onChangeHandler}
            style={{
                backgroundColor: props.mode === "dark" ? "grey" : "white",
                color: props.mode==='dark'? 'white' : 'black'
              }}
            id="myBox"
            rows="8"
            
          ></textarea>
        </div>
        <button disabled={text.length===0} className="btn btn-primary mx-2 my-1" onClick={toUppercase}>
          convert to uppercase
        </button>
        <button disabled={text.length===0} className="btn btn-primary mx-2 my-1" onClick={toLowercase}>
          convert to lowercase
        </button>
        <button disabled={text.length===0} className="btn btn-primary mx-2 my-1" onClick={handleCopy}>
          copy text
        </button>
        <button disabled={text.length===0} className="btn btn-primary mx-2 my-1" onClick={handlesSpace}>
          remove extra space
        </button>
        <button disabled={text.length===0} className="btn btn-primary mx-2 my-1" onClick={clearText}>
          clear text
        </button>
      </div>
      <div className="container my-3" style={{color: props.mode==='dark'? 'white' : 'black'}}>
        <h2>your text Summary</h2>
        <p>
          {text.split(/\s+/).filter((element)=>{ return element.length!==0}).length} words and {text.length} charcters
        </p>
        <p>{0.008 * text.split(" ").length} minutes taken</p>
        <h2>preview</h2>
        <p>{text.length>0 ?text :"enter the text above in textbox to preview here"}</p>
      </div>
    </>
  );
}
