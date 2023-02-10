import React, { useEffect } from 'react';
import { Loader } from '../../../../shared/components/Loader';
import { useGetUser } from '../../../../shared/hooks/useGetUser';
import * as SC from './style';

interface Props {
  userName: string;
  closeModal: () => void;
}

export const UserDetails = ({ userName, closeModal }: Props) => {
  const { getUser, loading, user, error } = useGetUser();

  useEffect(() => {
    getUser(userName);
  }, []);

  useEffect(() => {
    if (error) closeModal();
  }, [error]);

  return loading && !user ? (
    <Loader isLoading={!!loading} />
  ) : (
    <SC.Wrapper className="userModal">
      <SC.Header>
        <SC.HeaderTitle>{user?.login}</SC.HeaderTitle>
        <SC.CloseIcon onClick={closeModal} size={30} title="close icon" />
      </SC.Header>
      <SC.MainContainer>
        <SC.imageContainer>
          <SC.Image src={user?.avatar_url} alt={`Foto de ${user?.name}`} />
        </SC.imageContainer>
        <SC.InfoContainer>
          <SC.Name>{user?.name}</SC.Name>
          {user?.email && <SC.Email>{user?.email}</SC.Email>}
          <SC.Location>{user?.location}</SC.Location>
          <SC.Repos>{user?.public_repos} repositorios publicados</SC.Repos>
          <SC.SeeProfileButton href={user?.html_url} target="_blank">
            Ver Perfil
          </SC.SeeProfileButton>
        </SC.InfoContainer>
      </SC.MainContainer>
    </SC.Wrapper>
  );
};
