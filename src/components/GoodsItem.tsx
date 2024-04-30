import { IGoodsItem } from '@/types/types';

interface IGoodsItemProps extends IGoodsItem {
	addToBasket: (goodsItem: IGoodsItem) => void;
}

const GoodsItem: React.FC<IGoodsItemProps> = ({ id, name, price, addToBasket }) => {
	return (
		<div className="col-12 col-md-6 px-md-2">
			<div className="card">
				<img
					src={`https://via.placeholder.com/300x150.png?text=${name.slice(0, 12)}`}
					className="card-img-top"
					alt={name}
				/>
				<div className="card-body">
					<h5 className="card-title">{name}</h5>
					<p className="card-text">Цена: {price} руб.</p>
					<button
						className="btn btn-primary"
						onClick={() =>
							addToBasket({
								id,
								name,
								price
							})
						}>
						Купить
					</button>
				</div>
			</div>
		</div>
	);
};

export default GoodsItem;
