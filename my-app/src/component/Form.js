import React from 'react';
import {withFormik, Field} from 'formik';

const Form = ({values}) => {
    
    return (
        <div>
            <Form>
                <label htmlFor='name'>
                    Name:
                </label>
                <Field id='name' type='text' name='name'/>

                <label htmlFor='email'>
                    Email:
                </label>
                <Field id='email' type='email' name='email'/>

                <label htmlFor='password'>
                    Password:
                </label>
                <Field id='password' type='password' name='password' />

                <label htmlFor='terms'>Terms of Service
                <Field id='terms' type='checkbox' name='terms' check={values.terms} />
                </label>

                <button type='submit'>Submit</button>

                
            </Form>
        </div>
    )
}

// Name
//  Email
//  Password
//  Terms of Service (checkbox)
//  A Submit button to send our form data to the server.