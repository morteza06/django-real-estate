import { combineReducers} from 'redux';
import { propertiesListReducers} from './propertyReducers'

export default combineReducers({
    propertiesList: propertiesListReducer,
});