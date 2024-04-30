import { TextField } from '@mui/material';

interface ISearchProps {
	value: string;
	onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const Search: React.FC<ISearchProps> = ({ onChange, value }) => {
	return (
		<TextField
			label="search"
			variant="standard"
			fullWidth
			type="search"
			value={value}
			onChange={onChange}
			sx={{
				mb: '1.5rem'
			}}
		/>
	);
};

export default Search;
