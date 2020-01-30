import React, { useState, useEffect } from 'react';
import {withFormik, Form, Field} from 'formik';
import * as Yup from 'yup';
import axios from 'axios';

const UserForm = ({values, errors, touched, status}) => {
    const [users, setUsers] = useState([]);
    useEffect(() => {
        status && setUsers(users => [...users, status]);
    }, [status]);
    
    return (
        <div>
            <Form>
                <label htmlFor='name'>
                    Name:
                    <Field id='name' type='text' name='name'/>
                    {touched.name && errors.name && (<p>{errors.name}</p>)}
                </label>

                <label htmlFor='email'>
                    Email:
                    <Field id='email' type='email' name='email'/>
                    {touched.email && errors.email && (<p>{errors.email}</p>)}
                </label>

                <label htmlFor='password'>
                    Password:
                    <Field id='password' type='password' name='password' />
                    {touched.password && errors.password && (<p>{errors.password}</p>)}
                </label>

                <label>Terms of Service
                <Field type='checkbox' name='terms' checked={values.terms} />
                <span className="checkmark" />
                {touched.terms && errors.terms && (<p>{errors.terms}</p>)}
                </label>

                <button type='submit'>Submit</button>

                
            </Form>
            {users.map(user => {
                return (
                    <ul key={user.id}>
                        <li>name: {user.name}</li>
                        <li>email: {user.email}</li>
                        
                    </ul>
                );
            })}
        </div>
    )
};

const FormikUserForm = withFormik({
    mapPropsToValues({name, email, password, terms }) {
        return {
            name: name || '',
            email: '',
            password: '',
            terms: terms || false,

        };
    },
    validationSchema: Yup.object().shape({
        name: Yup.string().required(),
        email: Yup.string().required(),
        password: Yup.string().required(),
        terms: Yup.boolean().oneOf([true], 'Must Accept Terms of Service'),
    }),
   handleSubmit(values, {setStatus, resetForm}) {
       console.log(values);
    axios
      .post("https://reqres.in/api/users/", values)
      .then(res => {
        setStatus(res.data);
        resetForm();
        
    })
    .catch(err => console.log(err.response));
   }
})(UserForm);


export default FormikUserForm;