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
                image={story.story.imageUrl}
                />
                <CardContent>
                    <Typography className="text-[#23395d] font-bold" variant="h6" component="div">
                            {story.story.title}
                    </Typography>
                    <Stack spacing={1}>
                        <div className='h-1/6'>
                            <Typography sx={{
                                display: '-webkit-box',
                                overflow: 'hidden',
                                WebkitBoxOrient: 'vertical',
                                WebkitLineClamp: 3
                            }} variant="body2" color="text.secondary">
                                {story.story.storyResult}
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