import { CircularProgress } from '@mui/material';

interface Props {
  value: number;
  maxValue: number;
}

const progressStyle = {
    color: 'mediumslateblue',
    //margin: '10px',
    flex: 0.5

}

export default function CircularProgressBar({ value, maxValue }: Props){
    return (
      <>
        <CircularProgress
          sx={progressStyle}
          variant="determinate"
          value={(value / maxValue) * 100}
          size="25%"
          thickness={5}
          
        />
      </>
    );
  };
