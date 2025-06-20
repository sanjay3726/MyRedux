import {configureStore} from '@reduxjs/toolkit'
import rootReducer from './rootReducer'

const productStore = configureStore({
    reducer: rootReducer
})

export default productStore