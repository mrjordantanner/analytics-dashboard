import { CircularProgress } from '@mui/material';

interface Props {
  value: number;
  maxValue: number;
}

const progressStyle = {
    //backgroundColor: 'cyan',
    color: '#6b75ca',
    minHeight: '50px',
    minWidth: '50px'
}

export default function CircularProgressBar({ value, maxValue }: Props){
    return (
      <>
        <CircularProgress
          sx={progressStyle}
          variant="determinate"
          value={(value / maxValue) * 100}
          thickness={4}
        />
      </>
    );
  };
