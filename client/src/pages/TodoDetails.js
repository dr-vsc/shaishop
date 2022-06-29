/* eslint-disable react-hooks/exhaustive-deps */
import * as React from 'react';
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Collapse from '@mui/material/Collapse';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import MoreVertIcon from '@mui/icons-material/MoreVert';

import { useEffect, useState } from "react"
import { useParams } from 'react-router-dom';
import Loader from "../components/Loader/Loader";
// import TodoConntext from "../contexts/TodoConntext";


export default function TodoDetails() {
    const initialState = {
        image: '',
        title: ' Loading.. ',
        description: ' The Data From Server is not here yet... ',
        price: '$$$$$$$$$$$$$'
    }
    const { _id } = useParams();
    const [todoDetails, setTodoDetails] = useState(initialState)
    const [isLoding, setLoding] = useState(true);

    useEffect(() => {
        setLoding(true)
        fetch(`/api/products/${_id}`)
            .then((res) => res.json())
            .then((todo) => {
                setTodoDetails(todo)
                setLoding(false);
            })
            .catch(err => {
                setLoding(false)
                console.log(err)
            })
    }, []);

    // return :

    //             <div>
    //             <img alt={"alt"} src={todoDetails.image} />
    //             <div className="product-info">
    //                 <h5>{todoDetails.title}</h5>
    //                 <h6>{todoDetails.description}</h6>
    //                 <h6>{todoDetails.price}</h6>
    //             </div>
    //             </div>}
    // </div>
    // }

    const ExpandMore = styled((props) => {
        const { expand, ...other } = props;
        return <IconButton {...other} />;
    })(({ theme, expand }) => ({
        transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
        marginLeft: 'auto',
        transition: theme.transitions.create('transform', {
            duration: theme.transitions.duration.shortest,
        }),
    }));

    // export function RecipeReviewCard() {
    //     const [expanded, setExpanded] = useState(false);

    //     const handleExpandClick = () => {
    //         setExpanded(!expanded);
    //     };

    return (
        Loader ? isLoding :
            <Card sx={{ maxWidth: 345 }}>
                <CardHeader
                    action={
                        <IconButton aria-label="settings">
                            <MoreVertIcon />
                        </IconButton>
                    }
                    title={todoDetails.title}

                />
                <CardMedia
                    component="img"
                    height="194"
                    image={todoDetails.image}
                    alt="Paella dish"
                />
                <CardContent>
                    <Typography variant="body2" color="text.secondary">

                    </Typography>
                </CardContent>
                <CardActions disableSpacing>
                    <IconButton aria-label="add to favorites">
                        <FavoriteIcon />
                    </IconButton>
                    <IconButton aria-label="share" >
                        <ShareIcon />
                    </IconButton>
                    <ExpandMore
                        expand={todoDetails}

                        aria-label="show more"
                    >
                        <ExpandMoreIcon />
                    </ExpandMore>
                </CardActions>
                <Collapse in={todoDetails} timeout="auto" unmountOnExit>
                    <CardContent>
                        <Typography paragraph>{todoDetails.price}</Typography>
                        <Typography paragraph >
                            <h6>{todoDetails.description}</h6>
                        </Typography>


                    </CardContent>
                </Collapse>
            </Card>
    );
}

