import React from 'react';
import {useDispatch, useSelector} from "react-redux";
import {addUsers, deleteAll, deleteUsers} from "./redux/reducers/users";

function App() {
    const dispatch = useDispatch()
    const users = useSelector((store) => store.users.users)
    return (
    <div className="App">
      <button onClick={(e) => {
          e.preventDefault()
          dispatch(deleteAll())
      }}>Delete all</button>
      {
        users.length ? users.map((i) => (
              <React.Fragment key={i.id}>
                <h2>{i.name}</h2>
                <p>{i.klichka}</p>
                <button onClick={(e) => {
                  e.preventDefault()
                      dispatch(deleteUsers(i.id))
                }}>
                  delete
                </button>
              </React.Fragment>
          )) : ' '
      }
      <form onSubmit={(e) => {
        e.preventDefault()
        dispatch(addUsers(e.target[0].value, e.target[1].value, e.target[2].value, e.target[3].value, e.target[4].value))
        e.target[0].value = ''
        e.target[1].value = ''
        e.target[2].value = ''
        e.target[3].value = ''
        e.target[4].value = ''
      }}>
        <input placeholder="name" type="text"/>
        <input placeholder="nickname" type="text"/>
        <input placeholder="car" type="text"/>
        <input placeholder="age" type="number"/>
        <input placeholder="your favorite cake" type="text"/>
        <button type="submit">click</button>
      </form>
    </div>
  );
}

export default App;
