import React, { useEffect } from 'react';
import {withFormik, Form, Field} from 'formik';
import * as Yup from 'yup';

const Form = ({values, errors, touched}) => {
    
    return (
        <div>
            <Form>
                <label htmlFor='name'>
                    Name:
                </label>
                <Field id='name' type='text' name='name'/>
                {touched.name & errors.name && <p>{errors.name}</p>}

                <label htmlFor='email'>
                    Email:
                </label>
                <Field id='email' type='email' name='email'/>
                {touched.email & errors.email && <p>{errors.email}</p>}

                <label htmlFor='password'>
                    Password:
                </label>
                <Field id='password' type='password' name='password' />
                {touched.password & errors.password && <p>{errors.password}</p>}

                <label htmlFor='terms'>Terms of Service
                <Field id='terms' type='checkbox' name='terms' check={values.terms} />
                {touched.terms & errors.terms && <p>{errors.terms}</p>}
                </label>

                <button type='submit'>Submit</button>

                
            </Form>
        </div>
    )
};

const FormikAnimalForm = withFormik({
    mapPropsToValues({name, email, }) {
        return {
            name: name || '',
            email: '',
            terms: terms || false,

        };
    },
    validationSchema: Yup.object().shape({
        name: Yup.string().required(),
        email: Yup.string().required(),
        password: Yup.string().required(),
        terms: yup.boolean().oneOf([true], 'Must Accept Terms of Service'),
    }),
})


export default FormikForm;