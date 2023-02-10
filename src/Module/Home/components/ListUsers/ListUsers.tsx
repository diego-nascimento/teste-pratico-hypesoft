import { searchTypes } from '../../../../@types/userInList';
import { User } from '../User';
import * as SC from './style';

interface Props {
  users: searchTypes | null;
  handleSelectUser: (userName: string) => void;
}

export const ListUsers = ({ users, handleSelectUser }: Props) => {
  return users?.items.length ? (
    <SC.Wrapper>
      {users.items.map((user, index) => {
        return (
          <User
            handleSelectUser={handleSelectUser}
            user={user}
            index={index}
            key={user.id}
          />
        );
      })}
    </SC.Wrapper>
  ) : null;
};
