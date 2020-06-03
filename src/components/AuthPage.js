import React, { useState } from "react";

import LoginForm from "./LoginForm";
import SignupForm from "./SignupForm";

const AuthPage = () => {
    const [returningUser, setReturningUser] = useState(true);

    return (
        <div>
            {returningUser ? (
                <LoginForm setReturningUser={setReturningUser} />
            ) : (
                <SignupForm setReturningUser={setReturningUser} />
            )}
            ;
        </div>
    );
};

export default AuthPage;
