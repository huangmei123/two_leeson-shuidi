import {creatStore} from 'redux'
import reducer from './reducer'
const store = creatStore(reducer)
export default store