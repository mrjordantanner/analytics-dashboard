import React from 'react';
import { Box } from '@mui/material';

interface Props {
	children: React.ReactNode;
}

export default function Panel({ children }: Props) {
	
  const statsPanelStyle = {
		//border: '2px solid blue',
		width: '100%',
    height: '48vh',
		display: 'flex',
		flexDirection: 'column',
		alignItems: 'center',
    justifyContent: 'space-around',
    marginTop: '10px'
	};

	return (
		<>
			<Box sx={statsPanelStyle}>{children}</Box>
		</>
	);
}
