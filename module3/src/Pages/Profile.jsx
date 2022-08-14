import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import Layout from '../Layout';
import { connect, useDispatch, useSelector } from 'react-redux';
import './style.css';
import {getCoursesByApi, getFoodsByApi} from '../Redux/actions'
import image from '../head.jpg';

const Profile = (props) => {
    const dispatch = useDispatch();
    const [foodList, setFoodList] = useState(null);
    const [email, setEmail] = useState(null);
    const [enquiry, setEnquiry] = useState(null);
    const [error, setError] = useState(null);
    const [temp, setTemp] = useState({});
    const [linkCourse, setLinkCourse] = useState(null);

    const { courses, foods } = useSelector((state) => ({
        courses: state?.CourseReducer?.courses,
        foods: state?.CourseReducer?.foods
    }));

    useEffect(()=>{
        if(foods?.length > 0){
            setFoodList(foods);
        }
    },[foods])

    useEffect(()=>{
        if(temp && temp!=={}){
            setLinkCourse({ "id" : temp.id, "name" : temp.courseName });
        }
    },[temp]);

    useEffect(()=>{
        // dispatch(getCoursesByApi());
        dispatch(getFoodsByApi());
    },[]);

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
                    linkedCourse: linkCourse,
                    email: email,
                    enquiry: enquiry
                }),
        }).then((res) => {
            setEmail(null);
            setEnquiry(null);
            setTemp({});
            setLinkCourse(null);
            document.getElementsByClassName("overlay").style.visibility="hidden";
        })
        }
    }


    return (
        <Layout>
            <h3>
                Food Store
            </h3>
            <div className='courses-wrapper'>
                { 
                    foodList?.length > 0 &&
                    <div className='course-items-div' >
                        {
                            foodList?.map((item, idx) => {
                                return (
                                    <div className='course-item' key={idx}>
                                        <div className='course-head-image'>
                                            <img src={item.recipe_img} className="image" alt="temp-img" />
                                        </div>
                                        <div className='course-title'>
                                            <Link className="linkk" to={`food/${item.id}`} >{item.recipe_name} </Link>
                                        </div>
                                        <div className='course-auth'>
                                            Serves {item.servings}
                                        </div>
                                        <div className='course-price'>
                                            Cooking time {item.cooking_time}
                                        </div>
                                        <div className='course-enquire-form' onClick= {() => setTemp(item)}>
                                            <Link className="linkk" to={`food/${item.id}`} >Tap for more details</Link>
                                        </div>
                                    </div>
                                )
                            })
                        }
                    </div>
                }
            </div>


            <div id="popup1" className="overlay">
                <div className="popup">
                    <h2>Enquiry Form</h2>
                        <a className="close" href="#">&times;</a>
                        <div className="content">
                            <div style={{ color: 'black' }}> Enquiry for Product : {temp?.courseName ?? ""} by {temp?.author ?? ""} </div>
                            <form>
                                {error ? error : <></>}
                                <input type="text" name="email" placeholder='Enter your email address' onChange={handleEmailChange} />
                                <input type="text" name="enquiry" placeholder='Enter your enquiry' onChange={handlePassChange} />
                                <button onClick={btnClick}> Submit </button>
                            </form>
                        </div>
                </div>
            </div>
        </Layout>
            
    )
}

const mapStateToProps = (state) => {
  return {
    courses: state.CourseReducer.courses,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    callForCourses: () => dispatch(getCoursesByApi()),
  }
}

// export default connect(mapStateToProps, mapDispatchToProps)(Profile);
export default Profile;