import { IconButton, ListItem, Typography } from '@mui/material';
import { Close } from '@mui/icons-material';

import { IBasketItem } from '@/types/types';

interface IBasketItemProps extends IBasketItem {
	removeFromBasket: (id: string) => void;
}

const BasketItem: React.FC<IBasketItemProps> = ({
	name,
	price,
	quantity,
	id,
	removeFromBasket
}) => {
	return (
		<ListItem>
			<Typography variant="body1">
				{name} {price}руб x{quantity}
			</Typography>
			<IconButton onClick={() => removeFromBasket(id)}>
				<Close />
			</IconButton>
		</ListItem>
	);
};

export default BasketItem;
