import React, { useEffect, useState } from 'react'
import Button from '../Button'
import Card from '../Card'
import Nav from '../Nav'
import axios from 'axios'

const Home = () => {
const userName = localStorage.getItem("userName");
  return (
    <>
     <h1>Welcome {userName}</h1>
{/* {hello} */}
      <div>Home page</div>
      <Button title="click me" className={"btn-primary"} />
      <Button title="view" className={"btn-success"} />
      <Card />

    </>
  )
}

export default Home