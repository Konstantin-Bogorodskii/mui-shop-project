interface ISearchProps {
	value: string;
	onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const Search: React.FC<ISearchProps> = ({ onChange, value }) => {
	return (
		<input
			type="search"
			value={value}
			onChange={onChange}
		/>
	);
};

export default Search;
