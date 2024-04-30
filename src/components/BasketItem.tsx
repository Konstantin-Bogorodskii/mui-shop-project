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
		<li className="list-group-item">
			{name} {price}руб x{quantity}
			<button
				className="btn btn-primary"
				onClick={() => removeFromBasket(id)}>
				Удалить из корзины
			</button>
		</li>
	);
};

export default BasketItem;
