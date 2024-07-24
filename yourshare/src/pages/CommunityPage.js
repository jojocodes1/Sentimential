import React from "react";
import { pages } from "../App";
import "../App.css";

export const CommunityPage = (props) => {
  return (

    
    
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
};
