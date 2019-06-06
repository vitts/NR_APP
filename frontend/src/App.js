/*import React, { Component } from 'react';
 import logo from './logo.svg';
 import './App.css';
 
 class App extends Component {
 render() {
 return (
 <div className="App">
 <header className="App-header">
 <img src={logo} className="App-logo" alt="logo" />
 <h1 className="App-title">Welcome to React</h1>
 </header>
 <p className="App-intro">
 To get started, edit <code>src/App.js</code> and save to reload.
 </p>
 </div>
 );
 }
 }
 
 export default App;
 */

/**
 *  Just commented above default code. And trying to create new app class with route for GuestBook
 */

import React, {Component} from 'react';
import './Guestbook.css';
import { Navbar,Nav,NavItem,Grid,Row,Col,Form,FormGroup,ControlLabel,FormControl,Button } from 'react-bootstrap';
import { BrowserRouter  as Router,Route,Link } from 'react-router-dom';
//import $ from 'jquery';
class GuestBook extends Component {
  
    render()
    {
        return(
                
             <Router>
              <Grid>
                <Row className='show-grid'>
                 <Col xs={12} md={12}>
                      <Navbar>
                         <Navbar.Header>
                             <Navbar.Brand>
                                <div className='gb-title'> 
                                   <Link to='/'>Guest Book</Link>
                                </div>  
                             </Navbar.Brand>
                          </Navbar.Header>
                          <Nav>
                             <NavItem href='#'>
                                 <Link to='/'> Home </Link>
                             </NavItem>
                             <NavItem href='#'>
                                  <Link to='/enq'> Enquiry </Link>
                             </NavItem>
                          </Nav>
                       </Navbar>
                  </Col>
               </Row>
               <hr/>
                <Row className='show-grid'>
                 <Col xs={12} md={12}>
                      <Route exact path='/' component={Home} />
                         <Route path='/enq' component={Enquiry} />
                  </Col>
               </Row>
              </Grid>
              </Router>
                
            );
    }
}

// creating inner pages as component

const Home = () => {
    return (<div>
        <h2> Welcome Guest </h2>
        <p>
            
What is Lorem Ipsum?

Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.

            </p>
    </div>
    );
};

const Enquiry = () => { return(<EnqForm />) };




// Form Instance

class EnqForm extends React.Component{
    constructor(props)
    {
        super(props);
        this.state={
            custname:'Jon Doe',
            custemail:'jondoe@abc.com'
        };
        
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    
    // function defination
    handleChange(event){
        const target = event.target;
        const value = target.value;
        const name = target.name;
        
        this.setState({
            [name]:value
        });
    }
    
    componentDidMount()
    {
        var url = 'http://localhost:4000/api/guestdata';
        
        fetch(url,{
        method: 'POST',
        body: JSON.stringify({
         name : this.state.custname
        }),
        headers: {"Content-Type": "application/json"}
  })
  .then(function(response){
     console.log(response);
  }).then(function(body){
    console.log(body);
    
  });
    }
   
   
    
    handleSubmit(event)
    {
        
       // const formdata = this.state;

        
    }
    
   render(){
       return(
           <Form horizontal onSubmit={this.handleSubmit}>
            <FormGroup controlId='formHorizontalText'>
                <Col componentClass={ControlLabel} sm={12} md={2}>
                        Name
                </Col>
                <Col sm={12} md={10}>
                    <FormControl type='text' name='custname' placeholder='Enter your name' required='required' value={this.state.custname} onChange={this.handleChange} />
                </Col>
            </FormGroup>
            <FormGroup controlId='formControlsText'>
                <Col componentClass={ControlLabel} sm={12} md={2}>
                        Email
                </Col>
                <Col sm={12} md={10}>
                    <FormControl type='email' name='custemail' placeholder='Enter your email' required='required' value={this.state.custemail} onChange={this.handleChange} />
                </Col>
            </FormGroup>
            <Col sm={10}>
                <Button bsClass='btn btn-primary gb-btn' type='submit'>Submit</Button>
            </Col>
            </Form>
        );
   }
};



/*class EssayForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: 'Please write an essay about your favorite DOM element.'
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({value: event.target.value});
  }

  handleSubmit(event) {
    alert('An essay was submitted: ' + this.state.value);
    event.preventDefault();
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          Essay:
          <textarea value={this.state.value} onChange={this.handleChange} />
        </label>
        <input type="submit" value="Submit" />
      </form>
    );
  }
}*/





export default GuestBook;



