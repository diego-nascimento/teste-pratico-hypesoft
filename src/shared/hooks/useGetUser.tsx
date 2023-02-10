import { useCallback, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { request } from '../../store/reducers/getUserProfile';

import { RootState } from '../../store/rootReducer';
import { useAlertContext } from '../contexts/alertContext';

export const useGetUser = () => {
  const { data, loading, error } = useSelector(
    (state: RootState) => state.getUserProfile,
  );
  const dispatch = useDispatch();
  const { notify } = useAlertContext();

  const getUser = (userName: string) => {
    dispatch(request({ userName }));
  };

  const handleError = useCallback(() => {
    if (error) notify(error, 'error');
  }, [error]);

  useEffect(() => {
    handleError();
  }, [handleError]);

  return {
    getUser,
    user: data,
    loading,
    error,
  };
};
