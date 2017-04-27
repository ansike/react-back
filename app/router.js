import React, {
	Component
} from 'react';
import ReactDOM from 'react-dom';
import main from './main';
import {
	Router,
	Route,
	IndexRoute,
	hashHistory
} from 'react-router';
/*同步中心模块导入*/
import statistics from './modules/syncCenter/statistics';
import fontInfo from './modules/syncCenter/fontInfo';
import activities from './modules/syncCenter/activities';
import dataSource from './modules/syncCenter/dataSource';
/*项目管理模块导入*/
import activitie from './modules/proManager/activities';


/*项目管理模块导入*/


ReactDOM.render(<Router history={hashHistory}>
			        <Route path='/' component = {main} >
			        	<IndexRoute component={statistics}/>
						<Route path='/home/fontInfo' component = {fontInfo} />
				        <Route path='/home/activities' component = {activities} />
				        <Route path='/home/dataSource' component = {dataSource} />
			        </Route>
			        <Route path='/pro' component = {main} >
			        	<IndexRoute component={activitie}/>
						<Route path='/pro/activitie' component = {activitie} />
			        </Route>
			    </Router>,
	document.getElementById('content'));