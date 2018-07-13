import React from 'react';
import { Field, reduxForm } from 'redux-form';
import { validateLoginForm, renderField, required } from '../utils/validators';
import { userAuth } from '../store/actions/Login_Auth';

let LoginPage = props => {
    const { handleSubmit } = props;
    console.log(props);
    return (
        <form onSubmit={handleSubmit}>
            <div>
                <label htmlFor="username">Username</label>
                <Field name="username" component={renderField} type="text" validate={required} />
            </div>
            <div>
                <label htmlFor="password">Password</label>
                <Field name="password" component={renderField} type="text" />
            </div>
            <button type="submit">Login</button>
        </form>
    );
};

LoginPage = reduxForm({
    form: 'login',
    validateLoginForm
})(LoginPage);


export default LoginPage;
