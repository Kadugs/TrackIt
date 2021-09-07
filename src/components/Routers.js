import Login from "./Login-and-Registration/Login";
import Registration from "./Login-and-Registration/Registration.js";
import { Route, Switch } from "react-router-dom";
export default function Routers() {
    return (
        <Switch>
            <Route path="/" exact>
                <Login />
            </Route>
            <Route path="/cadastro" exact>
                <Registration />
            </Route>
        </Switch>
    )
}