import React from "react";
import { pages } from "../App";

export const CommunityPage = (props) => {
  return (

    
    
    <div>
    

      <h1>
      <p onClick={(e) => props.changePage(pages.WelcomePage)}><button><i class = "arrow left">
          </i>
          </button>Manage community</p></h1>
      <div class = "Friends">
        <h2><b>Friends</b></h2>
 

      <table>
          <tr>
            <th>Friends</th>
            <th>Item currently borrowed</th>
            <th>Item currently lent</th>
            <th>Best Friend</th>
          </tr>

          <tr>
            <th>Stacey</th>
            <th><i>None</i></th>
            <th><i>None</i></th>

            
          </tr>

          <tr>
            <th>Marcos</th>
            <th><i>None</i></th>
            <th><i>None</i></th>
            
          </tr>

          <tr>
            <th>Stacey</th>
            <th><i>None</i></th>
            <th><i>None</i></th>
  
          </tr>

      </table>

      <button>Add friend</button>
    

 

    </div>


    </div>

  );
};
