import React from 'react';
import { IconButton, Menu, MenuItem } from '@mui/material';
import MoreVertIcon from '@mui/icons-material/MoreVert';

interface Props {
	onSelectMenuItem: (index: number) => void;
}

export default function VerticalMenu({ onSelectMenuItem }: Props) {
	const [anchorElement, setAnchorElement] = React.useState<null | HTMLElement>(
		null
	);

	const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
		setAnchorElement(event.currentTarget);
	};

	const handleClose = () => {
		setAnchorElement(null);
	};

	const handleMenuItemClick = (index: number) => {
		onSelectMenuItem(index);
		handleClose();
	};

	return (
		<div>
			<IconButton
				aria-controls='vertical-menu'
				aria-haspopup='true'
				onClick={handleClick}
				color='inherit'>
				<MoreVertIcon />
			</IconButton>

			<Menu
				id='vertical-menu'
				anchorEl={anchorElement}
				open={Boolean(anchorElement)}
				onClose={handleClose}>
				<MenuItem onClick={() => handleMenuItemClick(0)}>Polar Graph</MenuItem>
				<MenuItem onClick={() => handleMenuItemClick(1)}>Bar Graph</MenuItem>
			</Menu>
		</div>
	);
}
