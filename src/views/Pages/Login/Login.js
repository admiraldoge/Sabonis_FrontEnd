import React, { Component } from 'react';
import { Link, withRouter} from 'react-router-dom';
import { Button, Card, CardBody, CardGroup, Col, Container, Form, Input, InputGroup, InputGroupAddon, InputGroupText, Row } from 'reactstrap';
import { createSecurePair } from 'tls';

class Login extends Component {

  constructor(props) {
    super(props);
    //console.log("THIS CONSTRUCTOR", this);
    this.routeChange = this.routeChange.bind(this);
  }
  routeChange() {
    let path = "/404";
    console.log("THIIIIIS", this);
    this.props.history.push(path);
  }
  render() {
    return (
      <div className="app flex-row align-items-center">
        <Container>
          <Row className="justify-content-center">
            <Col md="8">
              <CardGroup>
                <Card className="p-4">
                  <CardBody>
                    <Form>
                      <h1>Iniciar Sesión</h1>
                      <p className="text-muted">Ingresa a tu cuenta</p>
                      <InputGroup className="mb-3">
                        <InputGroupAddon addonType="prepend">
                          <InputGroupText>
                            <i className="icon-user"></i>
                          </InputGroupText>
                        </InputGroupAddon>
                        <Input type="text" placeholder="Username" autoComplete="username" />
                      </InputGroup>
                      <InputGroup className="mb-4">
                        <InputGroupAddon addonType="prepend">
                          <InputGroupText>
                            <i className="icon-lock"></i>
                          </InputGroupText>
                        </InputGroupAddon>
                        <Input type="password" placeholder="Password" autoComplete="current-password" />
                      </InputGroup>
                      <Row>
                        <Col xs="6">
                          <Button onClick={this.routeChange} color="primary" className="px-4">Ingresar</Button>
                        </Col>
                        <Col xs="6" className="text-right">
                          <Button color="link" className="px-0">Olvidaste tu contraseña</Button>
                        </Col>
                      </Row>
                    </Form>
                  </CardBody>
                </Card>
                <Card className="text-white bg-primary py-5 d-md-down-none" style={{ width: '44%' }}>
                  <CardBody className="text-center">
                    <div>
                      <h2>Mantenimiento</h2>
                      <p>En caso de cualquier duda o error, porfavor contactese al numero: 73567281 o mande un correo al email: max.vinsum@gmail.com</p>
                      <Link to="/register">
                        <Button color="primary" className="mt-3" active tabIndex={-1}></Button>
                      </Link>
                    </div>
                  </CardBody>
                </Card>
              </CardGroup>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default withRouter(Login);
