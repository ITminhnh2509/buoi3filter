import React, { useState } from 'react'
import { Input } from 'reactstrap'

export default function Add(props) {
    const { addNewStudent } = props;
    const [text, setText] = useState("")
    return (
        <div>
            <Input className='my-2 px-4' value={text} onChange={(e) => setText(e.target.value)} onKeyDown={
                (e) => {
                    if (e.key == "Enter") {
                        addNewStudent(text);
                        setText("");
                    }
                }
            } />
        </div>
    )
}
