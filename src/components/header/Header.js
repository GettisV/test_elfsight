import styled from 'styled-components';
import { Logo } from './Logo';
import { Filters } from '../Filters/Filters';

export function Header() {
  return (
    <HeaderContainer>
      <Logo />
      <Filters />
    </HeaderContainer>
  );
}

const HeaderContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  @media (min-width: 1520px) {
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
  }
`;
