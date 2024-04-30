import GoodsItem from './GoodsItem';
import { IGoodsItem } from '@/types/types';

interface IGoodsListProps {
	goods: IGoodsItem[];
	addToBasket: (goodsItem: IGoodsItem) => void;
}

const GoodsList: React.FC<IGoodsListProps> = ({ goods, addToBasket }) => {
	return (
		<div className="goods-list col-md-8">
			<div className="row">
				{goods.map(item => (
					<GoodsItem
						key={item.id}
						addToBasket={addToBasket}
						{...item}
					/>
				))}
			</div>
		</div>
	);
};

export default GoodsList;
