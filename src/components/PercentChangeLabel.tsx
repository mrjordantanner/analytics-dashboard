import { Typography } from '@mui/material';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

interface Props {
	percentChange: number;
}

export default function PercentChangeLabel({ percentChange }: Props) {
	const textColor = percentChange >= 0 ? 'chartreuse' : 'tomato';
	const signedPercentChange =
		percentChange >= 0 ? `+${percentChange}%` : `${percentChange}%`;

	const arrowColor = percentChange >= 0 ? 'chartreuse' : 'tomato';
	const arrowRotation = percentChange >= 0 ? '270deg' : '90deg';

	return (
		<div style={{ display: 'flex', alignItems: 'center' }}>
			<ArrowForwardIosIcon
				style={{
					color: arrowColor,
					transform: `rotate(${arrowRotation}) scale(0.5)`,
				}}
			/>
			<Typography variant='h5' component='div' style={{ color: textColor }}>
				{signedPercentChange}
			</Typography>
		</div>
	);
}
