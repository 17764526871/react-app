import { Route, Link, Switch, withRouter } from "react-router-dom";
import React, { lazy, Suspense } from "react"

import { Breadcrumb, Alert } from 'antd';

const Home = lazy(() => import('./content/index'));
const Todulist = lazy(() => import('./content/todolist/index'));
const breadcrumbNameMap = {
    '/': '首页',
    '/home': '首页',
    '/todolist': '任务列表',

};

const PageContent = withRouter(props => {
    const { location } = props;
    const pathSnippets = location.pathname.split('/').filter(i => i);
    const extraBreadcrumbItems = pathSnippets.map((_, index) => {
        const url = `/${pathSnippets.slice(0, index + 1).join('/')}`;
        return (
            <Breadcrumb.Item key={url}>
                <Link to={url}>{breadcrumbNameMap[url]}</Link>
            </Breadcrumb.Item>
        );
    });
    const breadcrumbItems = [
        <Breadcrumb.Item key="home">
            <Link to="/home">react app</Link>
        </Breadcrumb.Item>,
    ].concat(extraBreadcrumbItems);
    return (
        <div className="content-breadcrumb">
            <Breadcrumb>{breadcrumbItems}</Breadcrumb>
            <div className="content-comp">
                <Switch>
                    <Route exact path="/" component={Home} breadcrumbName="home" />
                    <Route exact path="/home" component={Home} breadcrumbName="home" />
                    <Route exact path="/todolist" component={Todulist} breadcrumbName="todolist" />
                </Switch>
            </div>
        </div>
    );
});

// class PageContent extends React.Component {

//     constructor(props) {
//         super(props);
//     }

//     render() {
//         return (
//             <Router >

//                 <div className="content-breadcrumb">
//                 </div>
//                 <Suspense fallback={<div></div>}>
//                     <Switch>
//                         <Route exact path="/" component={Home} breadcrumbName="home" />
//                         <Route exact path="/home" component={Home} breadcrumbName="home" />
//                         <Route exact path="/todolist" component={Todulist} breadcrumbName="todolist" />
//                     </Switch>
//                 </Suspense>
//             </Router>
//         )
//     }
// }

export default PageContent
