import React, {useEffect,useState} from 'react';
import CodeEditor from '@uiw/react-textarea-code-editor';
import { WhiteboardCanvas } from './WhiteboardCanvas';
import { useLocation } from 'react-router-dom';


export interface whiteboardProps {
    user?: {};
    question?: string;
    description?: string;     
}

export const Whiteboard = (props: whiteboardProps): JSX.Element => {
  let location:any= useLocation();


    const [code, setCode] = useState<any>(
        `function add(a, b) {\n  return a + b;\n}`
      );    
      useEffect(() => {
        console.log(location.state)
        setCode(location.state.about)
      }, [location]);
    return (
        <div style={{display: "block", height: "10em"}}>
        {/* navbar component */}
        
        {/* React Canvas Draw */}
        <span style={{width: "30%", height: "10%"}}><WhiteboardCanvas/></span>
        {/* Repl */}
        <span style={{width: "30%", height: "35%"}}><CodeEditor
      value={code}
      language="js"
      placeholder="Please enter JS code."
      onChange={(e) => setCode(e.target.value)}
      style={{
        height: 200,
        fontSize: 12,
        backgroundColor: "#f5f5f5",
        fontFamily: 'ui-monospace,SFMono-Regular,SF Mono,Consolas,Liberation Mono,Menlo,monospace',
      }}
    /></span>
        {/* question title -passed down from props*/}
        {/* problem description -passed down from props*/}
        <span>
        <textarea style={{height: "100%", width: "100%"}}></textarea>
        </span>
        </div>
    )
}

 
