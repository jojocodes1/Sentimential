import React from "react";
import { pages } from "../App";

export const CommunityPage = (props) => {
  return (

    
    
    <div>

    <div>

      <p onClick={(e) => props.changePage(pages.WelcomePage)}><button>Welcome Page</button> </p>
      <p>
        Left arrow: <button><i class = "arrow left">
          </i>
          </button>
          </p>

    </div>
    

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
