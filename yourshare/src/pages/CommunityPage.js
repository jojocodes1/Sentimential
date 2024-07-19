import React from "react";
import { pages } from "../App";

export const CommunityPage = (props) => {
  return (
    <div>

      <h1>Manage community</h1>
      <div class = "Friends">
        <h2><b>Friends</b></h2>
 

      <table>
          <tr>
            <th>Friends</th>
            <th>Item currently borrowed</th>
            <th>Item currently lent</th>
            <th>Best Friend</th>
          </tr>
      </table>
    

  
      <p onClick={(e) => props.changePage(pages.WelcomePage)}>Welcome Page </p>

    </div>


    </div>

  );
};
