import { Container, HeaderLogo, HeaderTitle, HeaderSearch, HeaderSearchInput, HeaderSearchButton, HeaderAutentication, HeaderAutenticationLink } from './styles';


const Header = () => {
	return (
		<Container>
			<HeaderLogo>
				<HeaderTitle>Trasle</HeaderTitle>
			</HeaderLogo>
			<HeaderSearch action="">
				<HeaderSearchInput type="text" name="search" />
					<HeaderSearchButton><i class="fas fa-search"></i></HeaderSearchButton>
				</HeaderSearch>
					<HeaderAutentication>
						<HeaderAutenticationLink href="">sign in</HeaderAutenticationLink> /
						<HeaderAutenticationLink href="">sign up</HeaderAutenticationLink>
					</HeaderAutentication>
			</Container>
					)
					}

					export default Header;
