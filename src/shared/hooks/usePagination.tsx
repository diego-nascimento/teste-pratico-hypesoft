import { useCallback, useMemo, useState } from 'react';

export const usePagination = () => {
  const [page, setPage] = useState(1);
  const [userPerPage, setUsersPerPage] = useState(10);
  const [total, setTotal] = useState(0);

  const amountOfPages = useMemo(() => {
    const totalOfUsers = total >= 1000 ? 1000 : total;
    return Math.ceil(totalOfUsers / userPerPage);
  }, [userPerPage]);

  const isFirstPage = useMemo(() => page === 1, [page]);
  const isLastPage = useMemo(
    () => page === amountOfPages,
    [page, amountOfPages],
  );

  const changeUsersPerPage = (amount: number) => {
    setUsersPerPage(amount);
  };

  const changeTotalOfUsers = (total: number) => {
    setTotal(total);
  };

  const goToPageOne = () => {
    setPage(1);
  };

  const goToNext = useCallback(() => {
    setPage(page + 1);
  }, [page]);

  const goToPrevious = useCallback(() => {
    setPage(page - 1);
  }, [page]);

  return {
    page,
    userPerPage,
    isFirstPage,
    isLastPage,
    goToNext,
    goToPageOne,
    changeTotalOfUsers,
    goToPrevious,
    changeUsersPerPage,
  };
};
