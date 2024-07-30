import React from "react";
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import { useNavigate } from 'react-router-dom'

const ProfOverview = (props) => {
    const navigate = useNavigate()

    const onButtonClick = () => {
    
        navigate('/listPage');  
      
      }

return(

    <div className={'mainContainer'} >
        <h1>Mind Bridge</h1>
        
      
        <Row xs={1} md={10} className="g-4">
      {Array.from({ length: 1 }).map((_, idx) => (
        <Col key={idx}>
          <Card border="secondary">
            <Card.Img variant="top" src="holder.js/100px160" />
            <Card.Body>
              <Card.Title><h1>Sentiment Analysis Emotion Images</h1></Card.Title>
              <Card.Text>
                
                <p> </p>

              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        
      ))}
    </Row>
    <br />
    <Row xs={1} md={10} className="g-4">
      {Array.from({ length: 1 }).map((_, idx) => (
        <Col key={idx}>
          <Card border="secondary">
            <Card.Img variant="top" src="holder.js/100px160" />
            <Card.Body>
              <Card.Title><h1>Common Keywords</h1></Card.Title>
              <Card.Text>
              <ul>
                    <li>Pain</li>
                    <li>Cry</li>
                    <li>Happy</li>
                    <li>Need You</li>

                </ul>
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        
      ))}
    </Row>
    <br />
    <Row xs={1} md={10} className="g-4">
      {Array.from({ length: 1 }).map((_, idx) => (
        <Col key={idx}>
          <Card border="secondary">
            <Card.Img variant="top" src="holder.js/100px160" />
            <Card.Body>
              <Card.Title><h1>Common Genres</h1></Card.Title>
              <Card.Text>
              <ul>
                    <li>Pain</li>
                    <li>Cry</li>
                    <li>Happy</li>
                    <li>Need You</li>

                </ul>
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        
      ))}
    </Row>
    
      <div className={'buttonContainer'}>
         <input
          className={'inputButton'}
          type="button"
          onClick={onButtonClick}
          value={' Back To Client List '}
        />
      </div>
    </div>
    
)

}

export default ProfOverview;