import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import './ourteam.css'

export const Ourteam = () => {
    const cardData = [
        {
          id: 1,
          src: './tikaram.jpg',
          Name: 'Tikaram Acharya',
          Position: 'Frontend Developer',
        },
        {
          id: 2,
          src: './parashar.jpg',
          Name: 'Parashar Baral',
          Position: '.Net Fullstack Developer',
        },
        {
            id: 3,
            src: './rajish.jpg',
            Name: 'Rajish Maharjan',
            Position: '.Net/React Fullstack Developer',
          },
          {
            id: 4,
            src: 'gunner.jpg',
            Name: 'Ural Shrestha',
            Position: '.Net Developer/Network Administrator',
          },
          {
            id: 5,
            src: 'anjal.jpg',
            Name: 'Anjal Thapa',
            Position: 'Business Administrator',
          },
          {
            id: 6,
            src: 'sudan.jpg',
            Name: 'Sudan Shakya',
            Position: '.Net Developer/Designer',
          },
      ];
  return (
    <>
    <h2 className="pagehead">Ourteam</h2>
    <div className="row mx-4">
    {cardData.map((card) => (
        <div key={card.id} className="col-lg-3 col-md-3 col-sm-4 my-3">
        <Card >
      <Card.Img variant="top" src={card.src} />
      <Card.Body>
        <Card.Title>{card.Name}</Card.Title>
        <Card.Text>
        {card.Position}
        </Card.Text>
        <Button variant="primary">View</Button>
      </Card.Body>
    </Card>
        </div>     
        ))}  
    </div>
    </>
  )
}
