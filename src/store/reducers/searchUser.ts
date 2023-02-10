import { createSlice, type PayloadAction } from '@reduxjs/toolkit'
import { type searchTypes } from '../../@types/userInList'
import { type userSearchRequestType } from '../../shared/services/searchUser'

export type errorType = 'Usuario não encontrado' | 'Algo deu errado, tente novamente!' | false

export interface StateTypes {
  loading: boolean
  data: searchTypes | null
  error: errorType
}

const initialState: StateTypes = {
  loading: false,
  error: false,
  data: null
}

const searchUserSlice = createSlice({
  initialState,
  name: 'searchUser',
  reducers: {
    request: (state, action: PayloadAction<userSearchRequestType>) => {
      return {
        ...state,
        data: null,
        error: false,
        loading: true
      }
    },
    success: (state, action: PayloadAction<searchTypes>) => {
      return {
        ...state,
        data: action.payload,
        error: false,
        loading: false
      }
    },
    failure: (state, action: PayloadAction<errorType>) => {
      return {
        ...state,
        data: null,
        error: action.payload,
        loading: false
      }
    }
  }

})

const { failure, request, success } = searchUserSlice.actions
const reducer = searchUserSlice.reducer
export { reducer, failure, request, success }
