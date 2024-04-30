import {
	Divider,
	Drawer,
	List,
	ListItem,
	ListItemIcon,
	ListItemText,
	Typography
} from '@mui/material';
import { ShoppingBasket } from '@mui/icons-material';

import { BasketItem } from '@components/index';
import { IBasketItem } from '@/types/types';

interface IBasketProps {
	basket: IBasketItem[];
	isBasketOpen: boolean;
	closeBasket: () => void;
	removeFromBasket: (id: string) => void;
}

const Basket: React.FC<IBasketProps> = ({
	basket,
	isBasketOpen,
	closeBasket,
	removeFromBasket
}) => {
	return (
		<Drawer
			anchor="right"
			open={isBasketOpen}
			onClose={closeBasket}>
			<List sx={{ width: '400px' }}>
				<ListItem>
					<ListItemIcon>
						<ShoppingBasket />
					</ListItemIcon>
					<ListItemText primary="Корзина" />
				</ListItem>
				<Divider />

				{!basket.length ? (
					<ListItem>Корзина пуста!</ListItem>
				) : (
					<>
						{basket.map(item => (
							<BasketItem
								key={item.name}
								removeFromBasket={removeFromBasket}
								{...item}
							/>
						))}
						<Divider />
						<ListItem>
							<Typography sx={{ fontWeight: 700 }}>
								Общая стоимость:
								{basket.reduce((acc, item) => {
									return acc + item.price * item.quantity;
								}, 0)}
								рублей.
							</Typography>
						</ListItem>
					</>
				)}
			</List>
		</Drawer>
	);
};

export default Basket;
