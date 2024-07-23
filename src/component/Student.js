import React, { useState } from "react";
import { Container, ListGroup } from "reactstrap";
import Add from "./Add";
import Studentschild from "./Studentschild";
import Footer from "./Footer";

export default function Student() {
    const [flag, setFlag] = useState();
    const [checkAll, setCheckAll] = useState(false);
    const [list, setList] = useState([
        {
            id: 1,
            name: "Lê Mèo",
            checked: true,
        },
        {
            id: 2,
            name: "Lê Thỏ",
            checked: true,
        },
        {
            id: 3,
            name: "Lê Nai",
            checked: false,
        },
        {
            id: 4,
            name: "Lê Hổ",
            checked: false,
        },
    ]);
    const deleteById = (id) => {
        setList(list.filter(stud => stud.id !== id))
    }
    const reChecked = (id) => {
        setList(list.map((stud => stud.id === id ? { ...stud, checked: !stud.checked } : stud)));
    }

    const addNewStudent = (name) => {
        setList([...list, { id: !list ? 1 : list.length + 1, name: name }]);
    }
    const filterListStudent = (list, flag) => {
        if (flag == "CHECK") {
            return list.filter(stud => stud.checked)
        } else if (flag == "NOCHECK") {
            return list.filter(stud => !stud.checked)
        } else if (flag == "DeleteALL") {
            setList(list.filter(student => student.checked == false))
            setFlag("");
        } else if (flag == "CHECKALL") {
            setList(list.map(student => ({ ...student, checked: !checkAll })));
            setCheckAll(!checkAll);
            setFlag("");
        }
        return list;
    }
    return (
        <div>
            <Container>
                <h1 className="title">Student List</h1>
                <Add addNewStudent={addNewStudent} />
                <ListGroup className="list-group-item">
                    {filterListStudent(list, flag).map((stud, index) => (
                        <Studentschild key={index} student={stud} deleteById={deleteById} reChecked={reChecked} />
                    ))}
                </ListGroup>
                <Footer setFlag={setFlag} checkAll={checkAll} setCheckAll={setCheckAll} />
            </Container>
        </div>
    );
}
