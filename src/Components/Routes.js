import React from 'react';
import {
    Switch,
    Route,
} from 'react-router-dom';
import { DownAndDistance } from './DownAndDistance/DownAndDistance';
import { Passing } from './Leaderboards/Passing';
import { Receiving } from './Leaderboards/Receiving';
import { Rushing } from './Leaderboards/Rushing';
import { NotFound } from './NotFound';

export function Routes() {
    return (
        <div className="flex-1">
            <Switch>
                <Route exact path="/">
                    <DownAndDistance />
                </Route>
                <Route exact path="/DownAndDistance">
                    <DownAndDistance />
                </Route>
                <Route exact path="/Passing">
                    <Passing />
                </Route>
                <Route exact path="/Rushing">
                    <Rushing />
                </Route>
                <Route exact path="/Receiving">
                    <Receiving />
                </Route>

                <Route>
                    <NotFound />
                </Route>
            </Switch>
        </div>
    )
}
