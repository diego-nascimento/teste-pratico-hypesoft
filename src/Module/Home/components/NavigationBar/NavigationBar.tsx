import * as SC from './style';

interface Props {
  page: number;
  isFirstPage: boolean;
  isLastPage: boolean;
  goToNext: () => void;
  goToPrevious: () => void;
}

export const NavigationBar = ({
  isFirstPage,
  isLastPage,
  page,
  goToNext,
  goToPrevious,
}: Props) => {
  return (
    <SC.Wrapper>
      <SC.PageNumberContainer>
        <SC.PageNumber> Página {page}</SC.PageNumber>
      </SC.PageNumberContainer>
      <SC.Container>
        <SC.Button onClick={goToPrevious} disabled={isFirstPage}>
          Anterior
        </SC.Button>
        <SC.Button onClick={goToNext} disabled={isLastPage}>
          Próxima
        </SC.Button>
      </SC.Container>
    </SC.Wrapper>
  );
};
