import { AppBar, Badge, IconButton, Toolbar, Typography } from '@mui/material';
import { ShoppingBasket } from '@mui/icons-material';

interface IHeaderProps {
	setBasketOpen: () => void;
	basketLength: number;
}

const Header: React.FC<IHeaderProps> = ({ setBasketOpen, basketLength }) => {
	return (
		<AppBar position="static">
			<Toolbar>
				<Typography
					variant="h6"
					component="span"
					sx={{ flexGrow: 1 }}>
					MUI Shop
				</Typography>
				<IconButton
					color="inherit"
					onClick={setBasketOpen}>
					<Badge
						color="secondary"
						badgeContent={basketLength}>
						<ShoppingBasket />
					</Badge>
				</IconButton>
			</Toolbar>
		</AppBar>
	);
};

export default Header;
