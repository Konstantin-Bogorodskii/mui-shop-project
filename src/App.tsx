import { useState } from 'react';

import { Basket, GoodsList, Header, Snack } from '@components/index';
import { Search } from '@shared/index';
import { Container } from '@mui/material';

import { goodsData } from '@assets/data/goods';
import { IGoodsItem, IBasketItem } from '@/types/types';

const App = () => {
	const [basket, setBasket] = useState<IBasketItem[]>([]);
	const [search, setSearch] = useState<string>('');
	const [goods, setGoods] = useState<IGoodsItem[]>(goodsData);
	const [isBasketOpen, setBasketOpen] = useState(false);
	const [isSnackOpen, setSnackOpen] = useState(false);

	const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		if (!e.target.value) {
			setGoods(goodsData);
			setSearch('');
			return;
		}

		setSearch(e.target.value);
		setGoods(
			goodsData.filter(good => {
				return good.name.toLowerCase().includes(e.target.value.toLowerCase());
			})
		);
	};

	const addToBasket = (goodsItem: IGoodsItem) => {
		let quantity = 1;

		const indexInBasket = basket.findIndex(item => item.id === goodsItem.id);

		if (indexInBasket > -1) {
			quantity = basket[indexInBasket].quantity + 1;

			setBasket(
				basket.map(item => {
					if (item.id !== goodsItem.id) return item;

					return {
						id: item.id,
						name: item.name,
						price: item.price,
						quantity
					};
				})
			);
		} else {
			setBasket([
				...basket,
				{
					id: goodsItem.id,
					name: goodsItem.name,
					price: goodsItem.price,
					quantity
				}
			]);
		}

		setSnackOpen(true);
	};

	const removeFromBasket = (goodsItemId: string) => {
		setBasket(basket.filter(item => item.id !== goodsItemId));
	};

	return (
		<>
			<Header
				setBasketOpen={() => setBasketOpen(true)}
				basketLength={basket.length}
			/>
			<Container
				sx={{
					mt: '1rem'
				}}>
				<Search
					value={search}
					onChange={handleChange}
				/>
				<GoodsList
					goods={goods}
					addToBasket={addToBasket}
				/>
			</Container>
			<Basket
				basket={basket}
				removeFromBasket={removeFromBasket}
				isBasketOpen={isBasketOpen}
				closeBasket={() => setBasketOpen(false)}
			/>
			<Snack
				isSnackOpen={isSnackOpen}
				setSnackOpen={() => setSnackOpen(false)}
			/>
		</>
	);
};

export default App;
