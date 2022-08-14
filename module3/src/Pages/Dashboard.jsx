import React, { useState } from 'react';
import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import Layout from '../Layout';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const Dashboard = (props) => {
    const [id, setId] = useState(null);
    const [data, setData] = useState(null);
    const [set, isSet] = useState(false);
    console.log(props.match.params.id);
    useEffect(()=>{
        if(props.match.params.id){
            console.log(props.match.params.id);
            setId(props.match.params.id);
            const res = fetch(`http://localhost:6700/courses/${props.match.params.id}`, {
            method: "GET"
        })
        .then((res) => res.json())
        .then((data) => {
            console.log("hello", data);
            setData(data);
            isSet(true)
        });
        }
    },[props.match.params.id]);
    return (
        <Layout>
            <h3>
                Course Details
            </h3>
            <h4>
                Course Id : {id} for {data?.courseName ?? ""}
            </h4>
            {/* { isSet &&
            <Container>
                <Row>
                    <Col>
                        <img src={data?.recipe_img} className="image" alt="temp-img" />
                    </Col>
                    <Col>
                        Cooking Time : {data?.prep_time}
                    </Col>
                </Row>
                <Row>
                    <Col> Ingredients:
                        <ol>
                            {data?.ingredients.map((item, idx)=>{
                                return (
                                    <li key={idx}>{item}</li>
                                )
                            })}
                        </ol>
                    </Col>
                    <Col> Recipe:
                        <ol>
                            {data?.recipe_details.map((item, idx)=>{
                                return (
                                    <li key={idx}>{item}</li>
                                )
                            })}
                        </ol>
                    </Col>
                </Row>
            </Container>
} */}
        </Layout>
            
    )
}

export default Dashboard;