import { useState } from 'react';


function TextForm(props) {
    
    const [text, setText] = useState('');
    
    function handleCopy(){
        if(text === "")
            props.showAlert("Please Enter Any Text!","Faliure");
        else{
            let text = document.getElementById("mybox");
            navigator.clipboard.writeText(text.value);
            props.showAlert("Your Text is copied","Success");
        }
    }


    function handleExtraSpace(){
        let tex = text.split(/[ ]+/);
        setText(tex.join(" "));
    }

    function handleclickUpper() {
        if(text === "")
            props.showAlert("Enter Your text First","Faliure");
        else{
            let newText = text.toUpperCase();
            setText(newText);
            props.showAlert("Converted To UpperCase","Success");
        }
    }

    function handleclickLower() {
        if(text === "")
            props.showAlert("Enter text First","Faliure");
        else{
            let newText = text.toLowerCase();
            setText(newText);
            props.showAlert("Converted To LowerCase","Success");
        }
    }

    function handleOnChange(event) {
        setText(event.target.value);
    }


    function handleclear(){
        if(text === ""){
            props.showAlert("Please Enter Text","Faliure");
        }
        setText("");
    }



    const speak = () => {
        let msg = new SpeechSynthesisUtterance();
        msg.text = text;
        window.speechSynthesis.speak(msg);
    }

    
    return (
        <div>
            <div className="container" style= {{color:props.mode==='dark'?'white':'#042743'}}>
                <h1>{props.heading}</h1>
                <textarea className="form-control" value={text} onChange={handleOnChange} style= {{backgroundColor:props.mode==='light'?'white':'#13466e',color:props.mode==='dark'?'white':'#042743'}} id="mybox" rows="8"></textarea>
            </div>
            <button className="btn btn-primary mx-4 my-4" onClick={handleclickUpper}>Convert To UpperCase</button>
            <button className="btn btn-primary " onClick={handleclickLower}>Convert To LowerCase</button>
            <button className="btn btn-primary mx-4" onClick={handleclear}>Clear Text</button>
            <button className="btn btn-primary mx-4" onClick={handleCopy}>Copy Text</button>
            <button className="btn btn-primary mx-4" onClick={handleExtraSpace}>Remove Extra Space</button>
            <button className="btn btn-primary mx-4" onClick={speak}>Speak</button>

            <div className='container' style= {{color:props.mode==='dark'?'white':'#042743'}}>
                <p onChange={handleOnChange}>Number of Words: {text.split(/\s+/).filter((element)=>{return element.length !== 0}).length}</p>
            </div>
            <div style= {{color:props.mode==='dark'?'white':'#042743'}}>
                <p>Number Of Character: {text.length}</p>
            </div>
        </div>
    );
}

export default TextForm;

