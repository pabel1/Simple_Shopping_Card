import React from 'react'
import Header from '../Header/Header'
import Course from '../Course/Course.js'
import ShoppingCard from '../ShoppingCard/ShoppingCard'
import classes from './Layout.module.css'


export default function Layout() {
  return (
    <div>
      <Header></Header>
      <div className={classes.courseCard}>
         <div className={classes.courseComponents}>
          <Course></Course>
        </div>
        <div className="shoppingCardCompo">
          <ShoppingCard />
        </div>
      </div>
    </div>
  );
}
