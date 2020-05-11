import React, { Component } from 'react';
import AppNav from './AppNav';
import DatePicker from 'react-datepicker';
import './App.css';
import "react-datepicker/dist/react-datepicker.css";
import { FormGroup, Button, Container, Input, Label, Form } from 'reactstrap';
import { Link } from 'react-router-dom';


class Expenses extends Component {
    state = {  }
    handleChange
    render() { 
        return ( 
            <div>
                <AppNav />
                <Container>
                    <Form>
                        <FormGroup>
                            <label for="title">Title</label>
                            <input type="text" name="title" id="title" onChange={this.handleChange}/>
                        </FormGroup>

                        <FormGroup>
                            <label for="category">Category</label>
                            <input type="text" name="category" id="category" onChange={this.handleChange}/>
                        </FormGroup>

                        <FormGroup>
                            <label for="expenseDate">Expense Date</label>
                            <input type="text" name="expenseDate" id="expenseDate" onChange={this.handleChange}/>
                        </FormGroup>

                        <FormGroup>
                            <label for="location">Location</label>
                            <input type="text" name="location" id="location" onChange={this.handleChange}/>
                        </FormGroup>

                        <FormGroup>
                            <Button color="primary" type="submit">Save</Button>
                            <Button tag="secondary" tag={Link} to="/category">Cancel</Button>
                            </FormGroup>
                    </Form>
                </Container>
            </div>
         );
    }
}
 
export default Expenses;