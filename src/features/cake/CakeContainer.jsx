import React, { useState } from 'react'
import { useSelector,useDispatch } from 'react-redux'
import {ordered,restocked} from './cakeSlice'

const CakeContainer = () => {
  const [cake,setCake]=useState(1)
  const numOfCakes = useSelector((state) => state.cake.numOfCakes)
    const dispatch=useDispatch()
  
  return (
    <div>
          <h2>No of Cakes - { numOfCakes}</h2>
      <button onClick={() => dispatch(ordered())}>Order</button>
      <input type="number" value={cake} onChange={(e)=>setCake(e.target.value)} />
          <button onClick={()=>dispatch(restocked(cake))}>Restock</button>
          
    </div>
  )
}

export default CakeContainer
