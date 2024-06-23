import { HeaderContainer } from "./styles";
import svgLogo from '../../assets/Logo.svg'

export function Header() {
  return(
    <HeaderContainer>
      <img src={svgLogo} />
    </HeaderContainer>
  )
}