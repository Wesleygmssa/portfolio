import React from "react";
import { Switch, Route } from "react-router-dom";
import About from "../pages/about";
import Home from "../pages/Home";
import Projects from "../pages/projects/index";
import CardsVideos from "../pages/CardsVideos";
import Videos from "../pages/Videos";

const Routes: React.FC = () => {
    return (
        <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/about" exact component={About} />
            <Route path="/projects" component={Projects} />
            <Route path="/cardsvideos" component={CardsVideos} />
            <Route path="/:id" component={Videos} />
        </Switch>
    );
};

export default Routes;
