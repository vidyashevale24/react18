import React, {useState} from 'react'
export default function TextForm(props) {
    const handleOnChange = (event)=>{
        console.log("handleOnChange clicked");
        setText(event.target.value);
    }

    const handleUpCaseClick = ()=>{
        console.log('handleUpCaseClick clicked' + text);
        let newText = text.toUpperCase();
        setText(newText);
    }
    const handleLowerCaseClick = ()=>{
        console.log('handleLowerCaseClick clicked' + text);
        let newText = text.toLowerCase();
        setText(newText);
    }
    const handleClearTextClick = ()=>{
        console.log('handleClearTextClick clicked' + text);
        let newText = '';
        setText(newText);
    }
    const [text, setText] = useState("Enter Text Here");
    console.log(useState);
    return (
        <>
           <div className='container'>
                <div className="mb-3">
                    <h1>{props.heading}</h1>
                    <textarea className="form-control" id="myBox" value={text} rows="8" onChange={handleOnChange}></textarea>
                </div>
                <button className='btn btn-primary mx-2' onClick={handleUpCaseClick}>Convert To Upper Case</button>
                <button className='btn btn-primary mx-2' onClick={handleLowerCaseClick}>Convert To Lower Case</button>
                <button className='btn btn-primary mx-2' onClick={handleClearTextClick}>Clear Text</button>
            </div>
            <div className='container my-3'>
                <h1>Your Text Summary</h1>
                <p>{text.split(' ').length} words and {text.length} characters</p>
                <p>{0.008 * text.split(' ').length} Minutes to read</p>
                <h1>Preview</h1>
                <pre>{text}</pre>
            </div>
        </>
    )
}
