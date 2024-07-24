import React, { useEffect, useState } from "react";
import { Button, Container, Input, Table } from "reactstrap";
import axios from "axios";
import Swal from 'sweetalert2'
export default function Student() {
    const [data, setData] = useState([]);
    const [isEdit, setIsEdit] = useState({ id: "", flag: false })
    const [text, setText] = useState();
    const [textEdit, setTextEdit] = useState();
    const urlAPI =
        "https://66a07ba77053166bcabb8de3.mockapi.io/studentt/v1/student";
    const getStudent = () => {
        axios({
            method: 'get',
            url: urlAPI
        }).then(function (res) {
            setData(res.data);
        })
            .catch(function (erro) {
                console.log(erro);
            });
    };

    const deleteStudent = (id) => {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {
                axios({
                    method: 'delete',
                    url: urlAPI + '/' + id
                })
                    .then(function (res) {
                        setData(data.filter(data => data.id !== id))

                    })
                    .catch(function (erro) {
                        console.log(erro);
                    });
                Swal.fire({
                    title: "Deleted!",
                    text: "Your file has been deleted.",
                    icon: "success",
                    timer: 1500
                });
            }
        });

    }
    const addNewStudent = (name) => {

        axios({
            method: 'post',
            url: urlAPI,
            data: {
                name: name
            }
        })
            .then(function (res) {

                setData([...data, { id: res.data.id, name: name }])
                Swal.fire({
                    icon: "success",
                    title: "Your work has been saved",
                    showConfirmButton: false,
                    timer: 1000
                });
            })
            .catch(function (erro) {
                console.log(erro);
            });
    }
    const editStudent = (id, name) => {
        axios({
            method: 'put',
            url: urlAPI + '/' + id,
            data: {
                name: name
            }
        }).then(function (res) {
            // alert("add success")
            // setText("");
            // getStudent();
            setData(data.map(item => item.id == id ? { ...item, name: name } : item))
            Swal.fire({
                icon: "success",
                title: "Your work has been saved",
                showConfirmButton: false,
                timer: 1000
            });
        })
            .catch(function (erro) {
                console.log(erro);
            });
    }
    useEffect(() => {
        getStudent();
    }, []);
    return (
        <div>
            <Container>
                <Input type="text" value={text} onChange={(e) => setText(e.target.value)}
                    onKeyDown={(e) => {
                        if (e.key == "Enter") {
                            addNewStudent(text);
                            setText("");
                        }
                    }}
                />
                <h1>Table</h1>
                <Table className="mt-3">
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Name</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            data && data.map((item, index) => (
                                <tr>
                                    <th scope="row">{item.id}</th>

                                    {
                                        isEdit.id === item.id && isEdit.flag === true ?

                                            <Input value={textEdit} onChange={(e) => setTextEdit(e.target.value)}
                                                onKeyDown={(e) => {
                                                    if (e.key == "Enter") {
                                                        editStudent(item.id, textEdit);
                                                        setIsEdit({ id: "", flag: false });
                                                        setTextEdit("");
                                                    }
                                                }} /> : <td td onDoubleClick={() => {
                                                    setIsEdit({ id: item.id, flag: true });
                                                    setTextEdit(item.name);
                                                }}>{item.name}</td>
                                    }
                                    <td>
                                        <Button className="btn btn-danger" onClick={() => { deleteStudent(item.id) }}>Delete</Button>
                                    </td>
                                </tr>
                            ))

                        }
                    </tbody>
                </Table>
            </Container>
        </div >
    );
}
