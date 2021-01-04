import { Container, Menu, Option, Link, Divider, Caption } from './styles';


const Aside = () => {
	return (
		<Container>
			<Menu>
				<Option className="active"><Link href="">Home</Link></Option>
				<Option><Link href="">About</Link></Option>
				<Divider />
				<Caption>Your Library</Caption>
				<Option><Link>Recently Played</Link></Option>
				<Option><Link>Songs</Link></Option>
				<Option><Link>Albums</Link></Option>
				<Option><Link>Artists</Link></Option>
				<Option><Link>Podcasts</Link></Option>
				<Divider />
				<Caption>Playlist</Caption>
				<Option><Link>THE BESTI</Link></Option>
			</Menu>
		</Container>
	)
}

export default Aside;
