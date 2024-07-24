import React, { useEffect, useState } from 'react'
import axios from "axios"
export default function LearnAPI() {
    const [data, setData] = useState([]);
    const fetchAPI = () => {
        const url = "https://66a07ba77053166bcabb8de3.mockapi.io/studentt/v1/student"
        axios.get(url).then(function (res) {
            console.log(res);
            setData(res.data)
        })
            .catch(function (erro) {
                console.log(erro)
            })
    }
    useEffect(() => {
        fetchAPI();
    }, [])
    return (
        <div>
            API{
                data.map((item, index) => (
                    <h1 key={index}>{item.id}, {item.name}</h1>
                ))
            }
        </div>
    )
}
