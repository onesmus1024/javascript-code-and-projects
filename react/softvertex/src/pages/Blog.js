import { Card, CardContent, CardActionArea, CardActions, CardMedia, Avatar, CardHeader, Typography, IconButton, CircularProgress } from '@mui/material'
import { Box } from '@mui/system';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';
import axios from 'axios';
import React, { useEffect } from 'react'
import { useState } from 'react'




function Blog() {
    const [posts, setstate] = useState([]);
    useEffect(() => {


       const getPosts = async () => {

             await axios.get('http://127.0.0.1:8000/api/post/').then(response => {
                console.log(response.data);
                setstate(response.data)

                
            }).catch(erro => {
                console.log(erro);
            })
        }

        getPosts();
        
       
    }, []);
    const [like, setlikes] = useState(0);


    const handlelikes= async (id,likes,heading,post)=>{
        setlikes(likes + 1);
        
        console.log(id)
        await axios.put(`http://127.0.0.1:8000/api/update/${id}/`,{heading:heading,post:post,likes:like})
    }


    const handleLikes =  async(post) =>{

        setlikes(post.likes + 1);

       await axios.put(`http://127.0.0.1:8000/api/update/${post.id}/`,{heading:post.heading,post: post.post,likes:like})

}
    return (
        <div>
            {
                posts.length ? posts.map(post =>
                    <Card padding='200' key={post.id}>
                            <CardHeader avatar={<Avatar src='https://media.istockphoto.com/photos/smiling-indian-business-man-working-on-laptop-at-home-office-young-picture-id1307615661?b=1&k=20&m=1307615661&s=170667a&w=0&h=Zp9_27RVS_UdlIm2k8sa8PuutX9K3HTs8xdK0UfKmYk=' alt={post.heading}>
                                
                            </Avatar>}
                                action={<IconButton>
                                    <MoreVertIcon></MoreVertIcon>
                                </IconButton>}
                                title={post.heading}
                                subheader={'posted on ' + post.date_posted}
                            />
                            {/* <CardMedia
                                component='img'
                                height="200"
                                image='https://media.istockphoto.com/photos/mortadella-pizza-by-il-castello-castelvetro-di-modena-emiliaromagna-picture-id1174801196?b=1&k=20&m=1174801196&s=170667a&w=0&h=yetfODlgbZdq1BfY85SezarQO7f3VxX8aqjULcVW_lU='
                                alt='pizza'
                            /> */}
                            <CardContent>
                                <Typography>
                                    {post.post}
                                </Typography>
                            </CardContent>
                            <CardActions>
                                <IconButton 


                           
                                onClick={
                                    
                                    ()=>
                                   
                                    handlelikes(post.id,post.likes,post.heading,post.post)
                                
                                }>
                                    {post.likes} likes
                                    <FavoriteIcon color='secondary'>

                                    </FavoriteIcon>
                                </IconButton>
                                <IconButton>
                                    <ShareIcon onClick ={

                                        () => handleLikes(post)
                                    } color='secondary'>

                                    </ShareIcon>
                                </IconButton>
                            </CardActions>

                        
                    </Card>
                ) : <Box textAlign={'center'} padding={'20%'}>
                    <CircularProgress></CircularProgress>
                </Box>
            }
        </div>
    )
}

export default Blog
