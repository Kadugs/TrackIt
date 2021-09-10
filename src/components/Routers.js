import { Route, Switch } from "react-router-dom";
import Login from "./Login-and-Registration-Page/Login";
import Registration from "./Login-and-Registration-Page/Registration.js";
import Habits from "./Habits-Page/Habits.js"
import Today from "./Today-Page/Today"

export default function Routers() {
    return (
        <Switch>
            <Route path="/" exact>
                <Login />
            </Route>
            <Route path="/cadastro" exact>
                <Registration />
            </Route>
            <Route path="/habitos" exact>
                <Habits 
                />
            </Route>
            <Route path="/hoje" exact>
                <Today />
            </Route>
        </Switch>
    )
}