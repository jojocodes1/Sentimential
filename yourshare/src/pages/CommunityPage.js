
import React, { useState } from "react";
import { pages } from "../App";
import "bootstrap/dist/css/bootstrap.min.css";
import "../App.css";


export const CommunityPage = (props) => {

  const [friends, setFriends] = useState([
    { name: "Stacey", borrowed: "None", lent: "None", bestFriend: false },
    { name: "Marcos", borrowed: "None", lent: "None", bestFriend: false },
  ]);
  const [newFriendName, setNewFriendName] = useState("");

  // Function to update new friend input
  const handleNewFriendChange = (event) => {
    setNewFriendName(event.target.value);
  };

  // Function to add a new friend to the list
  const addFriend = () => {
    if (newFriendName.trim() !== "") {
      const newFriend = { name: newFriendName, borrowed: "None", lent: "None", bestFriend: false };
      setFriends([...friends, newFriend]);
      setNewFriendName(""); // Clear input field after adding
    }
  };

  // Function to toggle best friend status
  const toggleBestFriend = (index) => {
    const updatedFriends = [...friends];
    updatedFriends[index].bestFriend = !updatedFriends[index].bestFriend;
    setFriends(updatedFriends);
  };

  return (
    <div className="container mt-4">
      <h1>
        <p onClick={(e) => props.changePage(pages.WelcomePage)}>
          <button className="btn btn-light">
            <i className="arrow left"></i>
          </button>
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
    </div>
  );
};
/*xport const CommunityPage = (props) => {
  const [friends, setFriends] = useState([
    { name: "Stacey", borrowed: "None", lent: "None", bestFriend: false },
    { name: "Marcos", borrowed: "None", lent: "None", bestFriend: false },
  ]);
  const [newFriendName, setNewFriendName] = useState("");


   const handleNewFriendChange = (event) => {
    setNewFriendName(event.target.value);
  };
  const addFriend = () => {
    const newFriend = { name: "New Friend", borrowed: "None", lent: "None", bestFriend: false };
    setFriends([...friends, newFriend]);
    setNewFriendName("");
  };

    
    
    <div>


    <div>

      

    </div>


    
      <div>


          <header>
              <h1 class = "ma">
                  <button onClick={(e) => props.changePage(pages.WelcomePage)}>
                        <i className="arrow left"></i>
                  </button>
                  
                  Manage community

              </h1>
          </header>
          
          <br>
          </br>

      </div>


 

  // Function to toggle best friend status
  const toggleBestFriend = (index) => {
    const updatedFriends = [...friends];
    updatedFriends[index].bestFriend = !updatedFriends[index].bestFriend;
    setFriends(updatedFriends);
  };
  return (
    <div className="container mt-4">
      <h1>
        <p onClick={(e) => props.changePage(pages.WelcomePage)}>
          <button className="btn btn-light">
            <i className="arrow left"></i>
          </button>
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
    </div>
  );
};
        /*  <h1>
      <p onClick={(e) => props.changePage(pages.WelcomePage)}><button><i class = "arrow left">
          </i>
          </button>Manage community</p></h1>

      <div class = "Friends">
        
        <h2><b>Friends</b></h2>
 

      <table>
      <thead> 
          <tr>
            <th>Friends</th>
            <th>Item currently borrowed</th>
            <th>Item currently lent</th>
            <th>Best Friend</th>
            
          </tr>
          </thead>
          <tbody>
          {friends.map((friend, index) => (
              <tr key={index}>
                <td>{friend.name}</td>
                <td>{friend.borrowed}</td>
                <td>{friend.lent}</td>
                <td>
                  <input
                    type="checkbox"
                    checked={friend.bestFriend}
                    onChange={() => toggleBestFriend(index)}
                  />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <button onClick={addFriend}>Add friend</button>
      </div>
    </div>
  );
};
         /* </thead>
          <tbody>
            <th>Stacey</th>
            <th><i>None</i></th>
            <th><i>None</i></th>

          <tr>
            <td>Stacey</td>
            <td><i>None</i></td>
            <td><i>None</i></td>  
            <input type = "checkbox"
                  id = "s2"
                  name = "s2"
                  value = "Stacey1"
            >     
            </input>



          </tr>


          <tr>
            <td>Marcos</td>
            <td><i>None</i></td>
            <td><i>None</i></td>
            <input type = "checkbox"
                  id = "m1"
                  name = "m1"
                  value = "Marcos1"
            >     
            </input>
            
          </tr>

          <tr>
            <td>Cam</td>
            <td><i>None</i></td>
            <td><i>None</i></td>
            <input type = "checkbox"
                  id = "c1"
                  name = "c1"
                  value = "Cam1"
            >     
            </input>
          </tr>

          <tr>
            <td>Jim</td>
            <td><i>None</i></td>
            <td><i>None</i></td>
            <input type = "checkbox"
                  id = "j1"
                  name = "j1"
                  value = "Jim1"
            >     
            </input>
          </tr>


      </table>

      <button>Add friend</button>
    

 

    </div>

    <div class = "check2">
    <input type = "checkbox"
                  id = "tex1"
                  name = "tex1"
                  value = "tex"
    >   
            </input>
            <label for="c1">   Text me when someone wants to borrow an item</label><br></br>
    
    <input type = "checkbox"
                  id = "tex2"
                  name = "tex2"
                  value = "tex"
    >   
            </input>
            <label for="c1">   Allow best friends without approval</label><br></br>

    <input type = "checkbox"
                  id = "tex3"
                  name = "tex3"
                  value = "tex"
    >   
            </input>
            <label for="c1">   Block friends of friends from seeing my items</label><br></br>

            
    </div> 


    </div>

  );
};*/
