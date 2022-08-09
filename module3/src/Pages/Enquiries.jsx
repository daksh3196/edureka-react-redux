import React, { useState } from 'react';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import Layout from '../Layout';
import { getCoursesByApi, getEnquiriesByApi } from '../Redux/actions';

const Enquiries = () => {
    const dispatch = useDispatch();
    const [courseList, setCourseList] = useState([]);
    const [enqList, setEnqList] = useState([]);
    const [temp, setTemp] = useState({});
    const [email, setEmail] = useState('');
    const [enquiry, setEnquiry] = useState('');
    const [selectedCourse, setSelectedCourse] = useState(null);
    const [bodyCourse, setBodyCourse] = useState({});

    const {
        enquiries,
        courses
    } = useSelector((state)=> ({
        enquiries: state?.EnquiriesReducer?.enquiries,
        courses: state?.CourseReducer?.courses
    }));


    useEffect(()=>{
        dispatch(getEnquiriesByApi());
        dispatch(getCoursesByApi());
    },[]);

    useEffect(()=>{
        if(courses?.length > 0){
            setCourseList(courses)
            setSelectedCourse(courses[0].id);
            setBodyCourse({ "id" : courses[0].id, "name": courses[0].courseName})
        }
    },[enquiries]);

    useEffect(()=>{
        if(enquiries?.length > 0){
            setEnqList(enquiries)
        }
    },[enquiries]);

    const handleEmailChange = (e) =>{
       setEmail(e.target.value);
    }

    const handlePassChange = (e) => {
       setEnquiry(e.target.value);
    }

    const btnClick = async (e) => {
        e.preventDefault();
        if(email && enquiry){
            const res = await fetch("http://localhost:6700/enquiries", {
                method: "POST",
                headers: {
                    "Content-Type" : "application/json"
                },
                body: JSON.stringify({
                    linkedCourse: bodyCourse,
                    email: email,
                    enquiry: enquiry
                }),
        }).then((res) => {
            setEmail(null);
            setEnquiry(null);
            setTemp({});
            dispatch(getEnquiriesByApi());
            setTimeout(()=>{},2000);
            setEnqList(enquiries);
        })
        }
    }
    const changeSelect = (e) => {
        setSelectedCourse(e.target.value);
        let xx = {};
        for( let i =0; i<courseList.length;i++){
            if(courseList[i].id == e.target.value ?? selectedCourse)
                xx={ "id" : e.target.value, "name": courseList[i].courseName}
        }
        setBodyCourse(xx);
    }

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
                                    <tr key={item}>
                                        <td>{item?.linkedCourse.name}</td>
                                        <td>{item?.email}</td>
                                        <td>{item?.enquiry}</td>
                                    </tr>
                                </>
                            )
                        })}
                    </tbody>
                </table>
                <div>
                    <div className="popup1">
                    <h2>Enquiry Form</h2>
                        <div className="content">
                            <form>
                                <input type="text" name="email" placeholder='Enter your email address' onChange={handleEmailChange} />
                                <input type="text" name="enquiry" placeholder='Enter your enquiry' onChange={handlePassChange} />
                                {
                                    courseList?.length>0 &&
                                        <select value = {selectedCourse} onChange={changeSelect} >
                                            {courseList.map((item, idx)=>{
                                                return (
                                                    <option 
                                                        value={ item.id } 
                                                        key={idx}
                                                    >
                                                        {item.courseName}
                                                    </option>
                                                )
                                            })}
                                        </select>
                                }

                                <button onClick={btnClick}> Submit </button>
                            </form>
                        </div>
                </div>
                </div>
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