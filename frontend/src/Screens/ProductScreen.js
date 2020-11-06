import React from 'react'
import { Link } from 'react-router-dom'
import { Row, Col, Image, ListGroup, Card, Button } from 'react-bootstrap'

const URL = 'http://localhost:3000/api/v1/products/'

class ProductScreen extends React.Component {
  state = {
    name: '',
    image_url: '',
    brand: '',
    description: '',
    price: '',
    num_in_stock: ''
  }

  componentDidMount() {
    console.log('hello', this.props.match.params.id)
    let id = this.props.match.params.id
    fetch(`http://localhost:3000/api/v1/products/${id}`)
      .then(res => res.json())
      .then(prod =>
        this.setState({
          name: prod.name,
          image_url: prod.image_url,
          brand: prod.brand,
          description: prod.description,
          price: prod.price,
          num_in_stock: prod.num_in_stock
        })
      )
  }

  render() {
    return (
      <div>
        <Link className='btn btn-secondary my-3' to='/'>
          Go Back
        </Link>
        <Row>
          <Col md={6}>
            <Image src={this.state.image_url} alt={this.state.name} fluid />
          </Col>

          <Col md={4}>
            <Card>
              <ListGroup varian='flush'>
                <ListGroup.Item>
                  <h3>{this.state.name}</h3>
                </ListGroup.Item>
                <ListGroup.Item>
                  <h3>Ratings</h3>
                </ListGroup.Item>

                <ListGroup.Item>
                  Description: {this.state.description}
                </ListGroup.Item>
                <ListGroup.Item>
                  <Row>
                    <Col>Price:</Col>
                    <Col>
                      <strong>${this.state.price}</strong>
                    </Col>
                  </Row>
                </ListGroup.Item>

                <ListGroup.Item>
                  <Row>
                    <Col>Status:</Col>
                    <Col>
                      {this.state.num_in_stock > 0
                        ? 'In Stock'
                        : 'Out Of Stock'}
                    </Col>
                  </Row>
                </ListGroup.Item>
                <ListGroup.Item>
                  <Button
                    className='btn-block'
                    type='button'
                    disabled={this.state.num_in_stock === 0}
                  >
                    Add To Cart
                  </Button>
                </ListGroup.Item>
              </ListGroup>
            </Card>
          </Col>
        </Row>
        {/* <Row>
          <Col md={6}>
            <h3>{this.state.name}</h3>
            <Image src={this.state.image_url} alt={this.state.name} fluid />
          </Col>
          <Col md={6}>
            <ListGroup variant='flush'>
              <ListGroup.Item>
                Description: {this.state.description}
              </ListGroup.Item>
              <ListGroup.Item>Price: ${this.state.price}</ListGroup.Item>
            </ListGroup>
          </Col>
          <Col md={6}>
            <Card>
              <ListGroup variant='flush'>
                <ListGroup.Item>
                  <Row>
                    <Col>Price:</Col>
                    <Col>${this.state.price}</Col>
                  </Row>
                </ListGroup.Item>
                <ListGroup.Item>
                  <Row>
                    <Col>Stock: </Col>
                    <Col>{this.state.num_in_stock}</Col>
                  </Row>
                </ListGroup.Item>
              </ListGroup>
            </Card>
          </Col>
        </Row> */}

        {/* <h8>Made By:{this.state.brand}</h8>
        <h8>{this.state.description}</h8>
        <br></br>
        <button>Add to Cart</button> */}
      </div>
    )
  }
}

export default ProductScreen
