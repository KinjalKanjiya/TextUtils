import React from "react"

export default function TextForm(props) {
    const handleUpClick = () =>{
        // console.log("UpperCase was click")
        let newText = text.toUpperCase();
        setText(newText)
        props.showAlert("Converted to Uppercase","success")
    }
    const handleLoClick = () =>{
        let newText = text.toLowerCase();
        setText(newText);
        props.showAlert("Converted to lowercase","success")
    }
    const handleOnChange = (event) =>{
        // console.log("Change")
        setText(event.target.value);
    }
    const handleClrClick = () =>{
      let newText = '';
      setText(newText);
      props.showAlert("Text Cleared!","success")

    }
    const [text,setText] = React.useState('');

    const handleCopy = () =>{
      var text = document.getElementById("myBox");
      text.select();
      navigator.clipboard.writeText(text.value);
      props.showAlert("Copied to Clipboard","success")


    }
    const handleExtraSpaces = () =>{
      let newText = text.split(/[  ]+/);
      setText(newText.join(" "))
      props.showAlert("Extra Spaces Removed!","success")

    }
  return (
    <>
    <div className="container" style={{ color: props.mode==='dark' ? 'white' :'black'}}> 
      <h1>{props.heading}</h1>
      <div className='mb-3'>
        <textarea  className='form-control' value={text} onChange={handleOnChange} style={{backgroundColor: props.mode==='light'?'white':'grey',  color: props.mode==='dark' ? 'white' :'black'}} id='myBox' rows='8'></textarea>
      </div>
      <button className="btn btn-primary mx-2"onClick={handleUpClick}>Convert To Upper Text</button>
      <button className="btn btn-primary mx-2"onClick={handleLoClick}>Convert To Lower Text</button>
      <button className="btn btn-primary mx-2"onClick={handleClrClick}>Clear Text</button>
      <button className="btn btn-primary mx-2"onClick={handleCopy}>Copy Text</button>
      <button className="btn btn-primary mx-2"onClick={handleExtraSpaces}>Remove Extra Spaces</button>

    </div>
    <div className="container my-3"style={{ color: props.mode==='dark' ? 'white' :'black'}}>
        <h2>your Text Summary</h2>
        <p>{text.split(" ").length} words, {text.length} characters</p>
        <p>{0.008 * text.split(" ").length} Minutes read</p>
        <h2>Preview</h2>
        <p>{text.length>0 ? text : "Enter Something in the textbox above to previeww it here "}</p>
    </div>
    </>
  )
}
  