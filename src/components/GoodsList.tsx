import { GoodsItem } from '@components/index';
import { Grid } from '@mui/material';

import { IGoodsItem } from '@/types/types';

interface IGoodsListProps {
	goods: IGoodsItem[];
	addToBasket: (goodsItem: IGoodsItem) => void;
}

const GoodsList: React.FC<IGoodsListProps> = ({ goods, addToBasket }) => {
	return (
		<Grid
			container
			spacing={2}>
			{goods.map(item => (
				<GoodsItem
					key={item.id}
					addToBasket={addToBasket}
					{...item}
				/>
			))}
		</Grid>
	);
};

export default GoodsList;
