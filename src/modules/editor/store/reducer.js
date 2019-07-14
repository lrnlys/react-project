import * as constants from './constants';
import { fromJS } from 'immutable';

const defaultState = fromJS({
	pageJson:{}
});

export default (state = defaultState, action) => {
	switch(action.type) {
		case constants.LOAD_PAGE_JSON:
			return state.set('pageJson', {
				title:'testing'
			});
		default:
			return state;
	}
}