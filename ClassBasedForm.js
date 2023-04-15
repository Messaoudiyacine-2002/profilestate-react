import React from 'react'
import {
  Form, FormGroup, Input,
  Label, Col, Button,
} from 'reactstrap'

export default class ClassBasedForm extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      nom: '',
      bio: '',
      profession: '',
    }
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    console.log(this.state);
  }

  render() {
    return (
      <Form onSubmit={ this.handleSubmit }>
        <h1>Class-Based Form</h1>
        <FormGroup row>
          <Label for="examplenom" sm={ 2 }>Nom</Label>
          <Col sm={ 8 }>
            <Input
              type="text"
              name="nom"
              id="examplenom"
              placeholder="nom"
              value={ this.state.nom }
              onChange={ (event) => this.setState({ nom: event.target.value }) }
            />
          </Col>
        </FormGroup>
        <FormGroup row>
          <Label for="examplebio" sm={ 2 }>bio</Label>
          <Col sm={ 8 }>
            <Input
              type="text"
              name="bio"
              id="examplebio"
              placeholder="bio"
              value={ this.state.bio }
              onChange={ (event) => this.setState({ bio: event.target.value })}
            />
          </Col>
        </FormGroup>
        <FormGroup row>
          <Label for="exampleprofession" sm={ 2 }>Profession</Label>
          <Col sm={ 8 }>
            <Input
              type="text"
              name="profession"
              id="exampleprofession"
              placeholder="profession"
              value={ this.state.profession }
              onChange={ (event) => this.setState({ profession: event.target.value })}
            />
          </Col>
        </FormGroup>
        <FormGroup check row>
          <Col sm={ { size: 'auto', offset: 8 } }>
            <Button>Submit</Button>
          </Col>
        </FormGroup>
      </Form>
    )
  }
};