import { useState, useEffect } from "react";
import axios from "axios";

const DisplayStudents = () => {
        const [data, setData] = useState ([])

        useEffect(() => {
            axios.get("http://localhost:4000/api/student/getallstudent")
            .then(res => {setData(res.data) })
            .then(err => console.log(err))
        })
    
    return (
        <table className="mx-auto w-25 table table-hover table-striped table-secondary">
            <thead>
                <tr>
                    <th>firstName</th>
                    <th>lastName</th>
                    <th>Gender</th>
                </tr>
            </thead>
            <tbody>
                {data.map((d, i) => (
                    <tr key={i}>
                        <td>{d.firstname}</td>
                        <td>{d.lastname}</td>
                        <td>{d.gender}</td>
                    </tr>
                ))}
            </tbody>
        </table>
    );
}

export default DisplayStudents;