import React from 'react';
import { Route,Redirect } from 'react-router-dom';

export default function PrivateRoute({children, ...rest}) {
    return (
        <Route
            {...rest}
            render={({location}) =>
                // fakeAuth.isAuthenticated ? (
                localStorage.getItem('user_token') ? (
                    children
                ) : (
                    <Redirect
                        to={{
                            pathname: "/login",
                            state: {from: location}
                        }}
                    />
                )
            }
        />
    );
}