// 路由：
import React, { lazy, Suspense } from 'react';
import {
    HashRouter as Router,
    Route,
    Switch
} from 'react-router-dom'
const Home = lazy(() => import('../pages/home.js'));

function App() {

    return (
        <Router>
            <Suspense fallback={<div>Loading...</div>}>
                <Switch>
                    <Route exact path="/" component={Home} />
                </Switch>
            </Suspense>
        </Router>
    )
}

export default App