import React from 'react'
import {DataContext} from '../Context/Context'

import { useContext } from 'react';
import classes from './CourseCard.module.css'
import {Button} from 'react-bootstrap'


export default function CourseCard() {

  const [course,hundler] = useContext(DataContext);
  

  return (
    <>
      {course.map((cours) => (
        <div className={classes.card}>
          <div className="courseCard-img">
            <img style={{width:"200px"}} src={cours.image} alt="" />
          </div>
          <div className={classes.courseCardDetails}>
            <h1>Course Title:{cours.CourseName} </h1>
            <p>Instructor Name:{cours.CoursePrice} </p>
            <p>Price:{cours.InstructorName} </p>
            <Button onClick={hundler} variant="primary">Enroll Now</Button>
          </div>
        </div>
      ))}
    </>
  );
}
