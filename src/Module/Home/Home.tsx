import { useState } from 'react';
import { Filters } from './components/Filters';

import { Modal } from '../../shared/components/Modal/Modal';
import { NavigationBar } from './components/NavigationBar';
import { TextInput } from '../../shared/components/TextInput/TextInput';
import { useSearchUsers } from '../../shared/hooks/useSearchUsers';
import { useTextField } from '../../shared/hooks/useTextField';
import * as SC from './style';
import { ListUsers } from './components/ListUsers/ListUsers';
import { UserDetails } from './components/UserDetails/UserDetails';
import { Loader } from '../../shared/components/Loader';

interface Props {}

export const Home = ({}: Props) => {
  const [userSelected, setUserSelected] = useState<string | null>(null);
  const useSearchUsersProps = useSearchUsers();
  const { handleOnChangeField, search } = useTextField();

  const handleSelectUser = (userName: string) => {
    setUserSelected(userName);
  };

  const handleUnselectUser = () => {
    setUserSelected(null);
  };

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    useSearchUsersProps.handleOnSubmit(search);
  };

  return (
    <SC.Wrapper>
      {userSelected && (
        <Modal>
          <UserDetails
            userName={userSelected}
            closeModal={handleUnselectUser}
          />
        </Modal>
      )}
      <TextInput
        onChange={handleOnChangeField}
        value={search}
        placeholder="Nome de usuario"
        onSubmit={onSubmit}
        disabled={useSearchUsersProps.loading}
      />
      <Filters
        changeNumberPerPage={
          useSearchUsersProps.usePaginationData.changeUsersPerPage
        }
        amountPerPage={useSearchUsersProps.usePaginationData.userPerPage}
      />
      <Loader isLoading={!!useSearchUsersProps.loading} />
      <ListUsers
        handleSelectUser={handleSelectUser}
        users={useSearchUsersProps.users}
      />
      {useSearchUsersProps.users && (
        <NavigationBar {...useSearchUsersProps.usePaginationData} />
      )}
    </SC.Wrapper>
  );
};
