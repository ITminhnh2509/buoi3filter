import React, { useState } from 'react'

export default function Bai1() {
    const [student, setStudent] = useState({ name: "", age: 0 })
    return (
        <>
            <div>
                <h1>Em tên là {student.name}. Em năm nay {student.age} tuổi</h1>
                <form>
                    <input type='text' placeholder='hãy nhập tên' value={student.name} onChange={(e) => setStudent({ ...student, name: e.target.value })} /> <br></br>
                    <input type='number' placeholder='hãy tuổi' value={student.age} onChange={(e) => setStudent({ ...student, age: e.target.value })} /> <br></br>
                </form >
            </div >
        </>

    )
}
