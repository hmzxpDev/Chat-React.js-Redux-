import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { NotFound } from "../404 Not Found";
import { Chat } from '../Chat'
import { MainView } from "../mainView";
import { Profile } from "../Profile";

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