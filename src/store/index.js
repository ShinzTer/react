import { createStore } from 'redux';
import {reducer} from '../reducers/userReduser'

export const store = createStore(reducer)