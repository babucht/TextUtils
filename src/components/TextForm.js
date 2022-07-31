import React, {useState} from 'react'



export default function TextForm(props) {


const handleUpClick =()=>{
  console.log("Uppercase was clicked");
  let newText = text.toUpperCase();
  //setText("You have clicked on handleUpClick");
  setText(newText)
  props.showAlert("Converted to uppercase!","success");
}
const handleLoClick =()=>{
  //console.log("Lowerercase was clicked");
  let newText = text.toLowerCase();
  setText(newText)
  props.showAlert("Converted to lowercase!","success");
}
const handleClear =()=>{
  //console.log("Lowerercase was clicked");
  let newText = '';
  setText(newText);
  props.showAlert("Text Cleared!","success");
}
const handleOnChange =(event)=>{
  console.log("On Change");
  setText(event.target.value);
}

const handleCopy = () =>{
  console.log('Hello from copy');
  let text = document.getElementById('txt1');
  text.select();
  navigator.clipboard.writeText(text.value);
  props.showAlert("Copied to Clipboard","success");
}

const handleExtraSpaces = ()=>{
  let newText = text.split(/[ ]+/);
  setText(newText.join(" "))
  props.showAlert("Extra spaces removed!","success");
}
  const [text, setText] = useState('');
  //text = "new text "; // wrong
  // setText("new text"); // right

  return (
    <>
    <div className='container' style={{color: props.mode==='dark'?'white':'#042743'}}>
        <div className="mb-3">
          <h3>{props.heading} - {text}</h3>
            {/* <textarea className="form-control" value={text} onChange={handleOnChange} id="txt1" rows="3"></textarea> */}
            <textarea className="form-control" value={text} onChange={handleOnChange} style={{backgroundColor: props.mode==='dark'?'grey':'white',
          color: props.mode==='dark'?'white':'#042743'}} id="txt1" rows="3"></textarea>
        </div>
        <button className='btn btn-primary mx-1' onClick={handleUpClick}>Convert to Uppercase</button>
        <button className='btn btn-success mx-1' onClick={handleLoClick}>Convert to Lowercase</button>
        <button className='btn btn-warning mx-1' onClick={handleClear}>Clear</button>
        <button className='btn btn-primary mx-1' onClick={handleCopy}>Copy</button>
        <button className='btn btn-danger mx-1' onClick={handleExtraSpaces}>Remove Spaces</button>


    </div>

    <div className="container my-3" style={{color: props.mode==='dark'?'white':'#042743'}}>
      <h3>Your text summary</h3>
      <p>{text.split(" ").length} words and {text.length} characters</p>
      <p>{0.008 * text.split(" ").length} Minutes read</p>
      <h3>Preview</h3>
      <p>{text.length>0?text:"Enter something in the textbox avobe to preview it here"}</p>
    </div>

    </>
  )
}
