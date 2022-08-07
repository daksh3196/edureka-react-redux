import React, { useState } from 'react';
import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import Layout from '../Layout';

const Dashboard = (props) => {
    const [id, setId] = useState(null);
    const [data, setData] = useState(null);
    useEffect(()=>{
        if(props.match.params.id){
            console.log(props.match.params.id);
            setId(props.match.params.id);
            const res = fetch(`http://localhost:6700/courses/${props.match.params.id}`, {
            method: "GET"
        })
        .then((res) => res.json())
        .then((data) => {
            console.log(data);
            setData(data);
        });
        }
    },[props.match.params.id]);
    return (
        <Layout>
            <h3>
                Course Details
            </h3>
            <h4>
                Course Id : {id}
            </h4>
        </Layout>
            
    )
}

export default Dashboard;