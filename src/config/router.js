import React from "react";
import {
    BrowserRouter as Router,
    Routes,
    Route,
    Link,
} from "react-router-dom";
import { SignUpScreen } from "../screen/signup";
import LoginScreen from "../screen/login";
import Dashboard from "../screen/dashboard";

export default function MyRouter() {
    return (
        <Router>
            {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
            <Routes>
                <Route path="/:id" element={<Dashboard />} />
                <Route path="/login" element={<LoginScreen />} />
                <Route path="/" element={<SignUpScreen />} />
             
            </Routes>
        </Router>
    );
}

