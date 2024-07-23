import React, { useEffect, useState } from "react";
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
    useEffect(() => {
        if (localStorage.getItem("listtodo")) {
            setList(JSON.parse(localStorage.getItem("listtodo")))
        } else {
            localStorage.setItem("listtodo", JSON.stringify(list))
        }
    })
    const deleteById = (id) => {
        let newList = list.filter(stud => stud.id !== id);
        setList(newList);
        localStorage.setItem("listtodo", JSON.stringify(newList));
    }
    const reChecked = (id) => {
        let newlist = list.map((stud => stud.id === id ? { ...stud, checked: !stud.checked } : stud));
        setList(newlist);
        localStorage.setItem("listtodo", JSON.stringify(newlist));
    }
    const rename = (id, name) => {
        let newlist = list.map(stud => stud.id == id ? { ...stud, name: name } : stud);
        setList(newlist);
        localStorage.setItem("listtodo", JSON.stringify(newlist));
    }
    const addNewStudent = (name) => {
        let newList = [...list, { id: list.length == 0 ? 1 : list.reduce((value, item) => Math.max(item.id, value) + 1, 0), name: name }];
        setList(newList);
        localStorage.setItem("listtodo", JSON.stringify(newList));
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
                        <Studentschild key={index} student={stud} deleteById={deleteById} reChecked={reChecked} rename={rename} />
                    ))}
                </ListGroup>
                <Footer setFlag={setFlag} checkAll={checkAll} setCheckAll={setCheckAll} />
            </Container>
        </div>
    );
}
