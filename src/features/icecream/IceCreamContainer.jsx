import React from 'react'
import { useSelector,useDispatch } from 'react-redux'
import {ordered,restocked} from './iceCreamSlice'

const IceCreamContainer = () => {
    const numOfIceCreams=useSelector((state)=>state.iceCream.numOfIceCreams)
    const dispatch=useDispatch()
  return (
    <div>
          <h1>No of iceCreams - { numOfIceCreams}</h1>
          <button onClick={()=>dispatch(ordered())}>Order</button>
          <button onClick={()=>dispatch(restocked(5))}>Restock</button>
    </div>
  )
}

export default IceCreamContainer
