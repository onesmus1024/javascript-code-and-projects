import { Avatar, CardActionArea, CardActions, CardContent, CardHeader, CardMedia, IconButton, Typography } from '@mui/material';
import Card from '@mui/material/Card';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import FavoriteIcon  from '@mui/icons-material/Favorite';
import ShareIcon  from '@mui/icons-material/Share';
import React from 'react';

const MyCard = () => {
    return (
        <React.Fragment>
            <Card >
               <CardActionArea>
               <CardHeader avatar={<Avatar>
                    R
                </Avatar>} 
                action={<IconButton>
                    <MoreVertIcon></MoreVertIcon>
                </IconButton>}
                title='recipe for pizza romagna'
                subheader="January 1, 2022"
                />
                <CardMedia
                component='img'
                height="200"
                image='https://media.istockphoto.com/photos/mortadella-pizza-by-il-castello-castelvetro-di-modena-emiliaromagna-picture-id1174801196?b=1&k=20&m=1174801196&s=170667a&w=0&h=yetfODlgbZdq1BfY85SezarQO7f3VxX8aqjULcVW_lU='
                alt='pizza'
                />
                <CardContent>
                    <Typography>
                        make you first order
                    </Typography>
                </CardContent>
                <CardActions>
                    <IconButton>
                        <FavoriteIcon>

                        </FavoriteIcon>
                    </IconButton>
                    <IconButton>
                        <ShareIcon>

                        </ShareIcon>
                    </IconButton>
                </CardActions>
               </CardActionArea>
            </Card>
        </React.Fragment>
    )
}

export default MyCard;