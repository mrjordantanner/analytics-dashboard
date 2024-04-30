import { useState } from 'react';
import { Typography, Box,  } from '@mui/material';
import VerticalMenu from './VerticalMenu';
import PolarChart from './PolarChart'
import DxBarGraph from './DxBarGraph'
import Panel from './Panel';
import { DashboardData } from '../data/DashboardData.d';

interface Props {
    labelText: string;
    data: DashboardData;
}

export default function GraphWithToggle({labelText, data}: Props) {
  const [selectedIndex, setSelectedItem] = useState(0);

  const onSelectMenuItem = (index: number) => {
    setSelectedItem(index);
  };
  
  const menuPanelHeaderStyle = {
    //border: '2px solid blue',
    width: '100%',
    display: 'flex',
    margin: '0px 15px',
    padding: '0px 15px',
    justifyContent: 'space-between',
    alignItems: 'center',
  }

  return (
		<>
			<Box sx={menuPanelHeaderStyle}>
				<Typography variant='h6' component='div'>
					{labelText}
				</Typography>
				<VerticalMenu onSelectMenuItem={onSelectMenuItem} />
			</Box>

			<Panel>
				{selectedIndex === 0 && <PolarChart data={data}/>}
        {selectedIndex === 1 && <DxBarGraph data={data}/>}
			</Panel>
		</>
	);}
