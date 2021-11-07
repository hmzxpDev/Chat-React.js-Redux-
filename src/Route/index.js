import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { NotFound } from "../view/404";
import { Chat } from '../components/Chat'
import { MainView } from "../view/Main";
import { Profile } from "../components/Profile";

export const Routes = () => {
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/" exact>
                    <MainView />
                </Route>
                <Route path="/profile">
                    <Profile />
                </Route>
                <Route path="/chats/:ChatId?">
                    <Chat />
                </Route>
                <Route>
                    <NotFound />
                </Route>
            </Switch>
        </BrowserRouter>
    )
}