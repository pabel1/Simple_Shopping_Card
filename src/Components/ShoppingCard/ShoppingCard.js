import React from 'react'
import {Button} from 'react-bootstrap'

export default function ShoppingCard() {
  return (
    <div>
        <h1>Order Summary</h1>
        <p>Item Orders: </p>
        <p>Price: </p>

        <p>Tax : </p>
        <p>Total Amount: </p>
        <Button variant="success">Success</Button>
    </div>
  )
}
