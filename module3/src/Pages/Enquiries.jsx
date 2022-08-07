import React, { useState } from 'react';
import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import Layout from '../Layout';

const Enquiries = () => {
    const [enqList, setEnqList] = useState([]);
    useEffect(()=>{
        const res = fetch("http://localhost:6700/enquiries", {
            method: "GET"
        })
        .then((res) => res.json())
        .then((data) => {
            console.log(data);
            setEnqList(data);
        });
    }, []);

    return (
        <Layout>
        <h1> Enquiries </h1>
        {
            enqList?.length > 0 ?
            <div>
                <table>
                    <thead>
                        <tr>
                            <th> Enquiry for Course:</th>
                            <th> Enquirer Email</th>
                            <th> Enquiry</th>
                        </tr>
                    </thead>
                    <tbody>
                        {enqList.length > 0 && enqList.map((item)=>{
                            return(
                                <>
                                    <tr>
                                        <td>{item.linkedCourse.name}</td>
                                        <td>{item.email}</td>
                                        <td>{item.enquiry}</td>
                                    </tr>
                                </>
                            )
                        })}
                    </tbody>
                </table>
            </div>
            :
            <>
                <div>
                    No Enquiries to Show
                </div>
                <div> Please go to 
                    <Link to="/courses"> Course List </Link> to add Enquires. 
                </div>
            </>
        }
        </Layout>
    )
}

export default Enquiries;