import { Alert, Snackbar } from '@mui/material';

interface ISnackProps {
	isSnackOpen: boolean;
	setSnackOpen: () => void;
}

const Snack: React.FC<ISnackProps> = ({ isSnackOpen, setSnackOpen }) => {
	return (
		<Snackbar
			open={isSnackOpen}
			onClose={setSnackOpen}
			autoHideDuration={3000}>
			<Alert severity="success">Товар добавлен в корзину!</Alert>
		</Snackbar>
	);
};

export default Snack;
