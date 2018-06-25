/**
 *  Just commented above default code. And trying to create new app class with route for GuestBook
 */

import React, {Component} from 'react';
import './Guestbook.css';
import { Navbar,Nav,NavItem,Grid,Row,Col,Form,FormGroup,ControlLabel,FormControl,Button } from 'react-bootstrap';
import { BrowserRouter  as Router,Route,Link } from 'react-router-dom';
import $ from 'jquery';
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
            custname:'',
            custemail:'',
            mobile:'',
            comment:''
        };
        
        this.onChange = this.onChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
        
    }
   
    onChange = (e) =>{
        // this code is used to update input type state
        
        this.setState({ [e.target.name]: e.target.value });
    }
    
    onSubmit = (e) =>{
        e.preventDefault();
        // get form data out of state
        const {custname,custemail,mobile,comment} = this.state;
        
       fetch('/postexp',{
           method:'POST',
           body: JSON.stringify({
               name:custname,
               email:custemail,
               mobnum:mobile,
               comment:comment
           }),
           headers: {'Content-Type' : 'application/json'}
        })
        .then(response => response.json())
        .then(json => alert(json.message));
        
       
    }
        
    /*postCallApi = async () => {
        const resp = await fetch('/postexp',{
           method:'POST',
           body: JSON.stringify({
               name:this.state.custname,
               email:this.state.custemail,
               mobnum:this.state.mobile,
               comment:this.state.comment
           }),
           headers: {'Content-Type' : 'application/json'}
        });

        const rbody = await resp.json();

        if (resp.status !== 200) throw Error(rbody.message);

        return rbody;
    }*/
    
    
   render(){
       const {custname,custemail,mobile,comment} = this.state;
       return(
           <Form horizontal onSubmit={this.onSubmit}>
            <FormGroup controlId='formHorizontalText'>
                <Col componentClass={ControlLabel} sm={12} md={2}>
                        Name
                </Col>
                <Col sm={12} md={10}>
                    <FormControl type='text' name='custname' placeholder='Enter your name' required='required' value={custname} onChange={this.onChange} />
                </Col>
            </FormGroup>
            <FormGroup controlId='formControlsText'>
                <Col componentClass={ControlLabel} sm={12} md={2}>
                        Email
                </Col>
                <Col sm={12} md={10}>
                    <FormControl type='email' name='custemail' placeholder='Enter your email' required='required' value={custemail} onChange={this.onChange} />
                </Col>
            </FormGroup>
             <FormGroup controlId='formControlsText'>
                <Col componentClass={ControlLabel} sm={12} md={2}>
                        Mobile Number
                </Col>
                <Col sm={12} md={10}>
                    <FormControl type='text' name='mobile' placeholder='Enter Mobile number' required='required' value={mobile} onChange={this.onChange} />
                </Col>
            </FormGroup>
            <FormGroup controlId='formControlsText'>
                <Col componentClass={ControlLabel} sm={12} md={2}>
                     Message
                </Col>
                <Col sm={12} md={10}>
                    <FormControl componentClass='textarea' name='comment' value={comment} onChange={this.onChange} />
                </Col>
            </FormGroup>
            <Col sm={10}>
                <Button bsClass='btn btn-primary gb-btn' type='submit'>Submit</Button>
            </Col>
            </Form>
        );
   }
};


export default GuestBook;



