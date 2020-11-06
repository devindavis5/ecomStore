import React from 'react'
import { Row, Col } from 'react-bootstrap'
import Product from '../components/Product.js'
import CarouselImg from '../components/CarouselImg'

class HomeScreen extends React.Component {

  render() {
    return (
      <div>
        <Row>
          {this.props.allProducts.map(product => (
            <Col sm={12} md={6} lg={4} xl={3}>
              <Product product={product} />
            </Col>
          ))}
        </Row>
      </div>
    )
  }
}

export default HomeScreen
