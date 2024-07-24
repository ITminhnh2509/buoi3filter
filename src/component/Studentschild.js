import React, { useState } from 'react'
import { Button, Input, ListGroupItem } from 'reactstrap'

export default function Studentschild(props) {
    const [isEdit, setIsEdit] = useState(false)
    const { student, deleteById, reChecked, rename } = props
    const [text, setText] = useState(student.name);
    return (
        <ListGroupItem className='student-item'>

            <Input type='checkbox' checked={student.checked} onChange={() => reChecked(student.id)} />
            <div className={student.checked ? "student-name active" : "student-name"} onClick={() => reChecked(student.id)}>

                {
                    !isEdit ? <p onDoubleClick={() => setIsEdit(true)}>{student.name}</p> :

                        <Input className='input-edit' value={text} onChange={(e) => setText(e.target.value)} onKeyDown={(e) => {
                            if (e.key == "Enter") {
                                setIsEdit(false);
                                rename(student.id, text)
                            }
                        }} />
                }
            </div>

            <Button onClick={() => { deleteById(student.id) }}><i className='fa-solid fa-close' ></i></Button>
        </ListGroupItem>
    )
}
