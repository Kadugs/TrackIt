import Login from "./Login";
import { Route, Switch } from "react-router-dom";

export default function Routers() {
    return (
        <Switch>
            <Route path="/" exact>
                <Login />
            </Route>
        </Switch>
    )
}