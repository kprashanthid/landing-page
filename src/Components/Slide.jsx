import React from 'react'
import Carousel from 'react-bootstrap/Carousel';

export default function Slide() {
  return<>
     <Carousel>
      <Carousel.Item interval={1000}>
      <img 
          style={{height:'500px', width:'100%'}}
          className="d-block w-100"
          src="https://wallpapers.com/images/hd/720p-food-background-1280-x-720-fycintdxg0gl76dk.jpg"
          alt="First slide" fluid
        />
        <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={500}>
      <img
      style={{height:'500px', width:'100%'}}
          className="d-block w-100"
          src="https://t4.ftcdn.net/jpg/02/59/77/71/360_F_259777118_87AFYXDLfrdDzMSwWUI7oEExUjnMFxyE.jpg"
          alt="First slide" fluid
        />
        <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
      <img style={{height:'500px', width:'100%'}}
          className="d-block w-100"
          src="https://thumbs.dreamstime.com/b/vegetables-spices-ingredient-cooking-italian-food-black-wooden-old-board-rustic-style-76334485.jpg"
          alt="First slide" fluid
        />
        <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
    </>
  
}
