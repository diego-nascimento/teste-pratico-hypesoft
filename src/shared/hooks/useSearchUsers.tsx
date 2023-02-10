import { useCallback, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { request } from '../../store/reducers/searchUser';
import { type RootState } from '../../store/rootReducer';
import { useAlertContext } from '../contexts/alertContext';
import { usePagination } from './usePagination';

export const useSearchUsers = () => {
  const { goToPageOne, changeTotalOfUsers, ...usePaginationData } =
    usePagination();
  const [userName, setUserName] = useState('');
  const { notify } = useAlertContext();

  const { data, loading, error } = useSelector(
    (state: RootState) => state.searchUser,
  );
  const dispatch = useDispatch();

  const handleSearch = useCallback(
    (userName: string) => {
      dispatch(
        request({
          userName: userName,
          page: usePaginationData.page,
          per_page: usePaginationData.userPerPage,
        }),
      );
    },
    [userName, usePaginationData.page, usePaginationData.userPerPage],
  );

  const handleOnSubmit = (userName: string) => {
    if (userName === '') return notify('O campo deve ser preenchido', 'error');
    setUserName(userName);
    goToPageOne();
    handleSearch(userName);
  };

  useEffect(() => {
    changeTotalOfUsers(data?.total_count ?? 0);
  }, [data]);

  useEffect(() => {
    userName && handleSearch(userName);
  }, [usePaginationData.page, usePaginationData.userPerPage]);

  const handleError = useCallback(() => {
    if (error) notify(error, 'error');
  }, [error]);

  useEffect(() => {
    handleError();
  }, [handleError]);

  return {
    loading,
    users: data,
    usePaginationData,
    handleOnSubmit,
  };
};
