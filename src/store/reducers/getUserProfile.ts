import { createSlice, type PayloadAction } from '@reduxjs/toolkit'
import { type userProfileTypes } from '../../@types/userProfile'
import { type getUserProfileSearchRequestType } from '../../shared/services/getUserProfile'

export type errorType = 'Usuario não encontrado' | 'Algo deu errado, tente novamente!' | false

export interface StateTypes {
  loading: boolean
  data: userProfileTypes | null
  error: errorType
}

const initialState: StateTypes = {
  loading: false,
  error: false,
  data: null
}

const getUserProfileSlice = createSlice({
  initialState,
  name: 'getUserProfile',
  reducers: {
    request: (state, action: PayloadAction<getUserProfileSearchRequestType>) => {
      return {
        ...state,
        data: null,
        error: false,
        loading: true
      }
    },
    success: (state, action: PayloadAction<userProfileTypes>) => {
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
    },
  }
})

const { failure, request, success } = getUserProfileSlice.actions
const reducer = getUserProfileSlice.reducer
export { reducer, failure, request, success }
