import React, { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";

export const WelcomePage = (props) => {
  const location = useLocation();
  const { username } = location.state || { username: "Guest" };
  const navigate = useNavigate();

  const [items, setItems] = useState([]);
  const [newItem, setNewItem] = useState("");
  const [lentTo, setLentTo] = useState("");

  const handleNewItemChange = (event) => {
    setNewItem(event.target.value);
  };

  const handleLentToChange = (event) => {
    setLentTo(event.target.value);
  };

  const addItem = () => {
    if (newItem.trim() !== "" && lentTo.trim() !== "") {
      const newItemEntry = { item: newItem, lentTo: lentTo };
      setItems([...items, newItemEntry]);
      setNewItem(""); // Clear input field after adding
      setLentTo(""); // Clear lent to field after adding
    }
  };

  const handleBorrowItemClick = () => {
    navigate("/BorrowItemPage");
  };

  return (
    <div className="container">
      <h1>Welcome {username}</h1>

      <table className="table">
        <thead>
          <tr>
            <th>Items for borrowing</th>
            <th>Lender</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              <button onClick={handleBorrowItemClick}
              style={{
                background: "none", 
                border: "none", 
                padding: "0", 
                color: "black", 
                textDecoration: "", 
                cursor: "pointer"

              }}
              
              >Blender</button>
            </td>
            <td>Stacey</td>
          </tr>
          <tr>
            <td>Rake</td>
            <td>Marcos</td>
          </tr>
          <tr>
            <td>Car</td>
            <td>Marcos</td>
          </tr>
          <tr>
            <td>Bike</td>
            <td>Cam</td>
          </tr>
          <tr>
            <td>Drill</td>
            <td>Stacey</td>
          </tr>
          <tr>
            <td>Ladder</td>
            <td>Marcos</td>
          </tr>
          <tr>
            <td>Kayak</td>
            <td>Cam</td>
          </tr>
          <tr>
            <td>The Office DVD Box Set</td>
            <td>Stacey</td>
          </tr>
          <tr>
            <td>Cart</td>
            <td>Jim</td>
          </tr>
        </tbody>
      </table>

      <div className="right">
        <table className="table">
          <thead>
            <tr>
              <th>Your items</th>
              <th>Lent to</th>
            </tr>
          </thead>
          <tbody>
            {items.map((itemEntry, index) => (
              <tr key={index}>
                <td>{itemEntry.item}</td>
                <td>{itemEntry.lentTo}</td>
              </tr>
            ))}
            <tr>
              <td>
                <input
                  type="text"
                  value={newItem}
                  onChange={handleNewItemChange}
                  placeholder="Add your first item"
                />
              </td>
              <td>
                <input
                  type="text"
                  value={lentTo}
                  onChange={handleLentToChange}
                  placeholder="A friend"
                />
              </td>
              <td>
                <button onClick={addItem}>Add</button>
              </td>
            </tr>
          </tbody>
        </table>

        <div className="buttons">
          <button>
            <Link to="/AddItemPage">Add item</Link>
          </button>
          <button>
            <Link to="/CommunityPage">Manage community</Link>
          </button>
        </div>
      </div>
    </div>
  );
};
