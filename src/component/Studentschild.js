import React from 'react'
import { Button, ListGroupItem } from 'reactstrap'

export default function Studentschild(props) {
    const { student, deleteById, reChecked } = props
    return (
        <ListGroupItem className='student-item'>

            <input type='checkbox' checked={student.checked} onChange={() => reChecked(student.id)} />
            <p className={student.checked ? "student-name active" : "student-name"} onClick={() => reChecked(student.id)}>{student.name}</p>
            <Button onClick={() => { deleteById(student.id) }}><i className='fa-solid fa-close' ></i></Button>
        </ListGroupItem>
    )
}
