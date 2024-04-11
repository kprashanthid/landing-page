import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';





function Cards(props) {
  return <>
    <Card style={{ width: '70%', height:'500px'}}>
      <Card.Img  style={{ maxWidth: '100%', height:'auto'}}className="img-fluid" alt="Responsive image" src={props.src}  />
      <Card.Body>
        <Card.Title>{props.title}</Card.Title>
        <Card.Text>
       {props.text}
        </Card.Text>
        <Button variant="primary">{props.btn}</Button>
      </Card.Body>
    </Card>
    </>
}

export default Cards;