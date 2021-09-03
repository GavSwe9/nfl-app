import React from 'react';
import {
    Switch,
    Route,
} from 'react-router-dom';
import { DownAndDistance } from './DownAndDistance/DownAndDistance';
import { Leaderboard } from './Leaderboards/Leaderboard';
import { NotFound } from './NotFound';

export function Routes() {
    return (
        <Switch>
            <Route exact path="/">
                <Leaderboard endpoint="passing" />
            </Route>
            <Route exact path="/DownAndDistance">
                <DownAndDistance />
            </Route>
            <Route exact path="/Passing">
                <Leaderboard endpoint="passing" />
            </Route>
            <Route exact path="/Rushing">
                <Leaderboard endpoint="rushing" />
            </Route>
            <Route exact path="/Receiving">
                <Leaderboard endpoint="receiving" />
            </Route>

            <Route>
                <NotFound />
            </Route>
        </Switch>
    )
}
