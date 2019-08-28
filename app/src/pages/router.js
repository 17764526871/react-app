import { HashRouter as Router, Route, Link, Switch } from "react-router-dom";
import CacheRoute, { CacheSwitch } from 'react-router-cache-route';
import React, { lazy, Suspense } from "react"

const Home = lazy(() => import('./content/index'));
const Todulist = lazy(() => import('./content/todulist/index'));


class PageContent extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <Router>

                <Suspense fallback={<div></div>}>
                    <CacheSwitch>
                        <Route exact path="/" component={Home} />
                        <Route exact path="/home" component={Home} />
                        <Route exact path="/todolist" component={Todulist} />
                    </CacheSwitch>
                </Suspense>
            </Router>
        )
    }
}

export default PageContent
