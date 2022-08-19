import React, { useEffect } from 'react'
import { useSelector,useDispatch } from 'react-redux'
import {fetchUsers} from './userSlice'

const UserContainer = () => {
  const user=useSelector(state=>state.user)
  const dispatch=useDispatch()

  useEffect(() => {
    dispatch(fetchUsers())
  },[])
  return (
    <div>
      <h1>List of users</h1>
      {user.loading && <p>Loading</p>}
      {!user.loading && user.error ? <div>Error :{user.error}</div>:null}
      {!user.loading && user.users.length ? (
        <ul>
          {user.users.map((user) => (
            <li key={user.id}>{ user.name}</li>
          ))}
        </ul>
      ):null}
    </div>
  )
}

export default UserContainer
