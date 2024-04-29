import { Grid, Card, CardContent } from '@mui/material';

interface Props {
    children: React.ReactNode
    cardStyle: React.CSSProperties;
    cardContentStyle: React.CSSProperties;
}

export default function StatsCard({children, cardStyle, cardContentStyle}: Props) {
    return(
    <>
        <Grid item xs={12}>
            <Card sx={cardStyle}>
                <CardContent sx={cardContentStyle}>
                    {children}
                </CardContent>
            </Card>
        </Grid>
    </>

)};
