import { CircularProgress } from '@mui/material';

interface Props {
  value: number;
  maxValue: number;
}

const progressStyle = {
    color: '#6b75ca',
    flex: 1
}

export default function CircularProgressBar({ value, maxValue }: Props){
    return (
      <>
        <CircularProgress
          sx={progressStyle}
          variant="determinate"
          value={(value / maxValue) * 100}
          size="100%"
          thickness={4}
          
        />
      </>
    );
  };
