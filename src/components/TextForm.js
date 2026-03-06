import React,{useState} from 'react'

export default function TextForm(props) {
    const handleUpClick = ()=> {
        // console.log("uppercase was clicked");
        let newText = text.toUpperCase();
        setText(newText);
       props.showAlert("converted to UpperCase", "success")
    }

     const handleLowClick = ()=> {
        // console.log("uppercase was clicked");
        let newText = text.toLowerCase();
        setText(newText);
        props.showAlert("converted to LowerCase", "success")
    }

    const handleOnChange = (event)=> {
        // console.log("On Changed");
        setText(event.target.value);
    }
    const [text, setText] = useState('');
    // setText("new text") correct way to chnge the text
  return (
    <>
    <div className='conatiner'style={{color: props.mode==='dark'?'white':'#042743'}}>
        <h1>{props.heading}  </h1>
      <div className="mb-3">
    <textarea className="form-control" value={text} onChange={handleOnChange} style={{backgroundColor: props.mode==='dark'?'grey':'white',color: props.mode==='dark'?'white':'#042743'}} 
    id="mybox" rows="6"></textarea>
    </div>
    <button className='btn btn-primary mx-2' onClick={handleUpClick}>Convert-To-Uppercase</button>

    <button className='btn btn-primary mx-1' onClick={handleLowClick}>Convert-To-Lowercase</button>
    </div>
    <div className='conatainer my-3'style={{backgroundColor: props.mode==='dark'?'#042743':'white',color: props.mode==='dark'?'white':'#042743'}}>
        <h2>your text summary</h2>
        <p>{text.split(" ").length} words , {text.length}characters</p>
        <p>{0.008*text.split(" ").length}Mintue Read</p>
        <h2>Preview</h2>
        <p>{text.length>0?text:"enter something to preview it here"}</p>

    </div>
    </>

  )
}
