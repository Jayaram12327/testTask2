import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';


function AutoLayoutExample() {
  return (
    <Container>
      <Row>
        <Col className='mb-4 mt-4'>
        <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="https://dummyimage.com/450x300/dee2e6/6c757d.jpg" />
      <Card.Body>
      <div className="card-body p-4">
                                <div className="text-center">
                                    {/* <!-- Product name--> */}
                                    <h5 className="fw-bolder">Fancy Product</h5>
                                    {/* <!-- Product price--> */}
                                    $40.00 - $80.00
                                </div>
                            </div>
                            <div className="card-footer p-4 pt-0 border-top-0 bg-transparent">
                                <div className="text-center"><a className="btn btn-outline-dark mt-auto" href="#">View options</a></div>
                            </div>
      </Card.Body>
    </Card>
        </Col>
        <Col className='mt-4 mb-4'>
        <Card style={{ width: '18rem' }}>
        {/* <div class="badge bg-dark text-white position-absolute" style="top: 0.5rem; right: 0.5rem">Sale</div> */}
      <Card.Img variant="top" src="https://dummyimage.com/450x300/dee2e6/6c757d.jpg" />
      <Card.Body>
      <div className="card-body p-4">
                                <div className="text-center">
                                    
                                    <h5 className="fw-bolder">Special Item</h5>
                                    
                                    <div className="d-flex justify-content-center small text-warning mb-2">
                                        <div className="bi-star-fill">⭐</div>
                                        <div className="bi-star-fill">⭐</div>
                                        <div className="bi-star-fill">⭐</div>
                                        <div className="bi-star-fill">⭐</div>
                                        <div className="bi-star-fill">⭐</div>
                                    </div>
                                   
                                    <span className="text-muted text-decoration-line-through">$20.00</span>
                                    $18.00
                                </div>
                            </div>
                            
                            <div className="card-footer p-4 pt-0 border-top-0 bg-transparent">
                                <div className="text-center"><a class="btn btn-outline-dark mt-auto" href="#">Add to cart</a></div>
                            </div>
      </Card.Body>
    </Card>
        </Col>
        
        <Col className='mt-4 mb-4'>
        <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="https://dummyimage.com/450x300/dee2e6/6c757d.jpg" />
      <Card.Body>
      <div className="card-body p-4">
                                <div className="text-center">
                                    
                                    <h5 className="fw-bolder">Sale Item</h5>
                                   
                                    <span className="text-muted text-decoration-line-through">$50.00</span>
                                    $25.00
                                </div>
                            </div>
                            
                            <div className="card-footer p-4 pt-0 border-top-0 bg-transparent">
                                <div className="text-center"><a className="btn btn-outline-dark mt-auto" href="#">Add to cart</a></div>
                            </div>
      </Card.Body>
    </Card>
        </Col>
        <Col className='mt-4 mb-4'>
        <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="https://dummyimage.com/450x300/dee2e6/6c757d.jpg" />
      <Card.Body>
      <div className="card-body p-4">
                                <div className="text-center">
                                    
                                    <h5 className="fw-bolder">Popular Item</h5>
                                    
                                    <div className="d-flex justify-content-center small text-warning mb-2">
                                        <div className="bi-star-fill"></div>
                                        <div className="bi-star-fill"></div>
                                        <div className="bi-star-fill"></div>
                                        <div className="bi-star-fill"></div>
                                        <div className="bi-star-fill"></div>
                                    </div>
                                    
                                    $40.00
                                </div>
                            </div>
                            
                            <div className="card-footer p-4 pt-0 border-top-0 bg-transparent">
                                <div className="text-center"><a className="btn btn-outline-dark mt-auto" href="#">Add to cart</a></div>
                            </div>
      </Card.Body>
    </Card>
        </Col>
      </Row>
    </Container>
  );
}

export default AutoLayoutExample;