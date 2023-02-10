import * as SC from './style';
import { AiFillGithub, AiOutlineEye } from 'react-icons/ai';
import { userInList } from '../../../../@types/userInList';

interface Props {
  user: userInList;
  handleSelectUser: (userName: string) => void;
  index: number;
}

export const User = ({ user, handleSelectUser, index }: Props) => {
  return (
    <SC.UserCardWrapper index={index}>
      <SC.IconsContainer onClick={() => handleSelectUser(user.login)}>
        <AiOutlineEye size={20} title="Open Modal Button" />
      </SC.IconsContainer>
      <SC.ImageContainer>
        <SC.Image src={user.avatar_url} alt={`Avatar de ${user.login}`} />
      </SC.ImageContainer>

      <SC.InformationContainer>
        <SC.LoginName>{user.login}</SC.LoginName>
        <SC.GitURLWrapper>
          <AiFillGithub size={20} />
          <SC.GitUrl>{user.html_url}</SC.GitUrl>
        </SC.GitURLWrapper>
      </SC.InformationContainer>
    </SC.UserCardWrapper>
  );
};
