import { Store } from 'phrontend';
import * as ActionTypes from '../actions/ActionTypes';
import Util from '../utils/Util';

class AppStore extends Store {

    constructor() {
        super();
        this.initData();
    }

    initData(){
        this.stories = {
            top:{
                loading:true,
                list:[],
                error:""
            },
            newest:{
                loading:true,
                list:[],
                error:""
            },
            ask:{
                loading:true,
                list:[],
                error:""
            },
            show:{
                loading:true,
                list:[],
                error:""
            },
            jobs:{
                loading:true,
                list:[],
                error:""
            },
        }
    }

    getStories(){
        return this.stories;
    }
    handler(payload){
        var emitChanges = true;
        switch (payload.actionType) {
            case "Testing":            
            break;
          default:
            emitChanges = false;
            break;
        }
          if(emitChanges){
            this.actionType = payload.actionType;
            this.emitChange();
          }
      }

}

export default new AppStore();  