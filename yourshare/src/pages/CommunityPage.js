import React, { useState } from "react";
// import { pages } from "../App";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "../App.css";


export const CommunityPage = (props) => {

  const [friends, setFriends] = useState([
    { name: "Stacey", borrowed: "None", lent: "None", bestFriend: false },
    { name: "Marcos", borrowed: "None", lent: "None", bestFriend: false },
  ]);
  const [newFriendName, setNewFriendName] = useState("");

  const handleNewFriendChange = (event) => {
    setNewFriendName(event.target.value);
  };

  const addFriend = () => {
    if (newFriendName.trim() !== "") {
      const newFriend = { name: newFriendName, borrowed: "None", lent: "None", bestFriend: false };
      setFriends([...friends, newFriend]);
    }
  };

  const toggleBestFriend = (index) => {
    const updatedFriends = [...friends];
    updatedFriends[index].bestFriend = !updatedFriends[index].bestFriend;
    setFriends(updatedFriends);
  };

  return (

    
    
    // <div>

    // <div>

    //   {/* <p onClick={(e) => props.changePage(pages.WelcomePage)}><button>Welcome Page</button> </p> */}
    //   <Link to="/WelcomePage"></Link>
    //   <p>
    //     Left arrow: <button><i class = "arrow left">
    //       </i>
    <div className="container mt-4">
      <h1>
        <Link to="/WelcomePage"> <button className="btn btn-light"> <i className="arrow left"></i> </button> </Link>
        <p>
          Manage community
        </p>
      </h1>
      <div className="Friends">
        <h2>
          <b>Friends</b>
        </h2>
        <table className="table">
          <thead className="thead-dark">
            <tr>
              <th scope="col">Friends</th>
              <th scope="col">Item currently borrowed</th>
              <th scope="col">Item currently lent</th>
              <th scope="col">Best Friend</th>
            </tr>
          </thead>
          <tbody>
            {friends.map((friend, index) => (
              <tr key={index}>
                <td>{friend.name}</td>
                <td>{friend.borrowed}</td>
                <td>{friend.lent}</td>
                <td>
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      checked={friend.bestFriend}
                      onChange={() => toggleBestFriend(index)}
                      id={`bestFriend-${index}`}
                    />
                    <label className="form-check-label" htmlFor={`bestFriend-${index}`}>
                      Best Friend
                    </label>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <div className="form-group">
          <label htmlFor="newFriendName">New Friend Name:</label>
          <input
            type="text"
            className="form-control"
            id="newFriendName"
            value={newFriendName}
            onChange={handleNewFriendChange}
          />
        </div>
        <button className="btn btn-primary" onClick={addFriend}>
          Add friend
        </button>
      </div>
      <div className="form-group form-check">
  <input
    type="checkbox"
    className="form-check-input"
    id="borrowItemCheckbox"
  />
  <label className="form-check-label" htmlFor="borrowItemCheckbox">
    Text when someone wants to borrow an item
  </label>
</div>

<div className="form-group form-check">
  <input
    type="checkbox"
    className="form-check-input"
    id="allowStealCheckbox"
  />
  <label className="form-check-label" htmlFor="allowStealCheckbox">
    Allow friends to steal
  </label>
</div>

<div className="form-group form-check">
  <input
    type="checkbox"
    className="form-check-input"
    id="blockNoseyCheckbox"
  />
  <label className="form-check-label" htmlFor="blockNoseyCheckbox">
    Block friends of friends from being nosey
  </label>
</div>
      
    </div>
  );
};