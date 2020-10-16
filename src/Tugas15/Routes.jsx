import React from 'react'
import { Switch, Route } from "react-router";
import Tugas10 from '../Tugas-10/Tugas10';
import Tugas11 from '../Tugas-11/Tugas11';
import Tugas12 from '../Tugas-12/Tugas12';
import Tugas13 from '../Tugas-13/Tugas13';
import Tugas14 from '../Tugas-14/Tugas14';
import Tugas9 from '../Tugas-9/Tugas9';

const Routes = () => {
    return (
        <Switch>
            <Route exact path="/">
                <Tugas15 />
            </Route>
            <Route exact path="/tugas9">
                <Tugas9 />
            </Route>
            <Route exact path="/tugas10">
                <Tugas10 />
            </Route>
            <Route exact path="/tugas11">
                <Tugas11 />
            </Route>
            <Route exact path="/tugas12">
                <Tugas12 />
            </Route>
            <Route exact path="/tugas13">
                <Tugas13 />
            </Route>
            <Route exact path="/tugas14">
                <Tugas14 />
            </Route>
        </Switch>
    )
}

export default Routes

const Tugas15 = () => {
    return <h1>Ini Adalah Tugas 15</h1>
}