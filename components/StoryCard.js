import { Card, CardContent, CardActions, CardActionArea, CardMedia } from '@mui/material';
import { Typography } from '@mui/material';
import { Button } from '@mui/material';
import { Box } from '@mui/material';
import { Stack } from '@mui/system';

export default function StoryCard(story) {
    return (
        <Card sx={{ width: 235, height:400 }} className="drop-shadow-lg">
            <CardActionArea sx={{ width: 235, height:400 }} className="flex flex-col justify-evenly">
                <CardMedia
                component="img"
                height="140"
                image={story.story.imageUrl}
                />
                    <CardContent>
                        <Typography sx={{
                                    display: '-webkit-box',
                                    overflow: 'hidden',
                                    WebkitBoxOrient: 'vertical',
                                    WebkitLineClamp: 2
                                }}
                                    className="text-[#23395d] font-bold leading-5 pb-2" variant="h6" component="div">
                                {story.story.title}
                        </Typography>
                        <div className="flex flex-col justify-evenly">
                            <div className="mt-5">
                                <Typography sx={{
                                    display: '-webkit-box',
                                    overflow: 'hidden',
                                    WebkitBoxOrient: 'vertical',
                                    WebkitLineClamp: 3
                                }} variant="body2" color="text.secondary">
                                    {story.story.storyResult}
                                </Typography>
                            </div>
                            <div className="mt-5">
                                <Typography sx={{
                                    display: '-webkit-box',
                                    overflow: 'hidden',
                                    WebkitLineClamp: 1 }} fontWeight="bold" variant="body2" color="text.secondary">
                                    Type: {story.story.type}
                                </Typography>
                                <Typography  sx={{
                                    display: '-webkit-box',
                                    textOverflow: 'hidden',
                                    WebkitLineClamp: 1}} fontWeight="bold" variant="body2" color="text.secondary">
                                    Author: {story.story.author}
                                </Typography>
                            </div>
                            
                        </div>
                    </CardContent>
                
            </CardActionArea>
        </Card>
    )
}