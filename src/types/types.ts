export interface IGoodsItem {
	id: string;
	category?: string;
	name: string;
	poster?: string;
	price: number;
}

export interface IBasketItem {
	id: string;
	name: string;
	price: number;
	quantity: number;
}
