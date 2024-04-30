import { AppBar, Badge, IconButton, Toolbar, Typography } from '@mui/material';
import { ShoppingBasket } from '@mui/icons-material';

function Header() {
	return (
		<AppBar position="static">
			<Toolbar>
				<Typography
					variant="h6"
					component="span"
					sx={{ flexGrow: 1 }}>
					MUI Shop
				</Typography>
				<IconButton color="inherit">
					<Badge color="secondary">
						<ShoppingBasket />
					</Badge>
				</IconButton>
			</Toolbar>
		</AppBar>
	);
}

export default Header;
