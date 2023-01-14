import { Card, CardContent, CardActions, CardActionArea, CardMedia } from '@mui/material';
import { Typography } from '@mui/material';
import { Button } from '@mui/material';
import { Box } from '@mui/material';
import { Stack } from '@mui/system';

export default function StoryCard(story) {
    return (
        <Card sx={{ maxWidth: 235, maxHeight:400 }}>
            <CardActionArea>
                <CardMedia
                component="img"
                height="140"
                image="https://www.google.com/url?sa=i&url=http%3A%2F%2Ft2.gstatic.com%2Flicensed-image%3Fq%3Dtbn%3AANd9GcSBJh08PvQ6eaN1JuPclUvtBC9CFjvPlrFYIjgu8pxL8oA0fhxeJ1Fqdtjlsr5P8zFv71xCC7VgKuvjmTw&psig=AOvVaw33mXecMNJ8hKl0MymVsWZb&ust=1673772209469000&source=images&cd=vfe&ved=0CA8QjRxqFwoTCOi_ksHVxvwCFQAAAAAdAAAAABAE"
                alt="green iguana"
                />
                <CardContent>
                    <Typography variant="h5" component="div">
                            {story.story.title}
                    </Typography>
                    <Stack spacing={1}>
                        <div className='h-1/6'>
                            <Typography noWrap sx={{
                                overflow: "hidden",
                                textOverflow: "ellipsis",
                                WebkitLineClamp: "6",
                            }} variant="body2" color="text.secondary">
                                Lizards are a widespread group of squamate reptiles, with over 6,000
                                species, ranging across all continents except Antarctica
                            </Typography>
                        </div>
                        <Typography fontWeight="bold" variant="body2" color="text.secondary">
                            Type: {story.story.type}
                        </Typography>
                        <Typography fontWeight="bold" variant="body2" color="text.secondary">
                            Author: {story.story.user}
                        </Typography>
                    </Stack>
                </CardContent>
            </CardActionArea>
            {/* <CardActions sx={{ justifyContent: 'center' }}>
                <Button className='bg-[#000080] text-white w-5/6 rounded-md hover:text-black'>link</Button>
            </CardActions> */}
        </Card>
    )
}