import Loadable from 'react-loadable';
import React from 'react';
import * as AppPaths from '../app/utils/AppPaths';

var getloader = ()=>{
  return <div>Loading test...</div>
}

export var childRoutesArray = [
  {
    path: AppPaths.LANDING_PATH,
    component: Loadable({
      loader: () => import('./components/container/HomeScreen'),
      loading: getloader
    })
  },
];
