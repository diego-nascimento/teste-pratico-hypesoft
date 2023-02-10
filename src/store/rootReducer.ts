import { combineReducers } from '@reduxjs/toolkit'
import { reducer as searchUser, type StateTypes as searchUserStateTypes } from './reducers/searchUser'
import { reducer as getUserProfile, type StateTypes as getUserProfileTypes } from './reducers/getUserProfile'

export const reducer = combineReducers({ searchUser, getUserProfile })

export interface RootState {
  searchUser: searchUserStateTypes
  getUserProfile: getUserProfileTypes
}
