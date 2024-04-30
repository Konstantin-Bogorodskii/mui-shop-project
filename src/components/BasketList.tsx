import BasketItem from './BasketItem';
import { IBasketItem } from '@/types/types';

interface IBasketListProps {
	basket: IBasketItem[];
	removeFromBasket: (id: string) => void;
}

const BasketList: React.FC<IBasketListProps> = ({ basket, removeFromBasket }) => {
	if (!basket.length) {
		return (
			<ul className="basket list-group col-md-4">
				<li className="list-group-item active">Корзина</li>
				<li className="list-group-item">Товаров нет</li>
			</ul>
		);
	}

	return (
		<ul className="basket list-group col-md-4">
			<li className="list-group-item active">Корзина</li>
			{basket.map((item, index) => (
				<BasketItem
					key={index}
					removeFromBasket={removeFromBasket}
					{...item}
				/>
			))}
			<li className="list-group-item active">
				Общая стоимость:
				{basket.reduce((acc, item) => {
					return acc + item.price * item.quantity;
				}, 0)}
				рублей.
			</li>
		</ul>
	);
};

export default BasketList;
