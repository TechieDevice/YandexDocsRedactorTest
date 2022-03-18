import React from 'react';
import { Button, Form } from "react-bootstrap";
import './App.css';

export default class MainPage extends React.Component {
  constructor(props) {
    super(props);

    this.state = { link: ""};
  }

  getLink = () => {
    document.getElementById('myframe').src = this.state.link;
  }

  render() {
    return (
      <div className="App">
          
          <Form onSubmit={e => {
                e.preventDefault();
                console.log(this.state.link)
                this.getLink();
            }} >
            <Form.Group>
              <h2>Редактор</h2>
              <div className="flexing">
                  <Form.Control style={{ margin: '1%', width: '30%' }}
                      placeholder='enter file id'
                      onChange={e => this.setState({ link: "https://yadi.sk/i/" + e.target.value })} />
                  <Button style={{ margin: '1%', backgroundColor: 'white', borderColor: '#020008' }}
                      type='submit' disabled={!this.state.link}>
                      <h5 className="font-face-gm" style={{ margin: '0%' }}>Открыть</h5>
                  </Button>
              </div>
            </Form.Group>
            <iframe id='myframe' src="about:blank" width="1200" height="600">
            </iframe>
          </Form>      
      </div>
    );
  }
}
