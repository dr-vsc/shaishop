import MoreVertIcon from '@mui/icons-material/MoreVert';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';
// import ExpandMoreIcon from '@mui/icons-material/ExpandMore';


import "./Product.css"
// import Product from './components/product/Product';
import TodoConntext from "../../contexts/TodoConntext"
import { useContext } from "react";
import { Link } from "react-router-dom";
import { Card, CardActions, CardContent, CardHeader, CardMedia, Collapse, IconButton, Rating, Typography } from "@mui/material";
// import { Buttons } from "../cart/Buttons";
const Product = ({ image, title, price, id, qty }) => {
    const { addToCart, removeCart } = useContext(TodoConntext);
    // const [quantity, setQuantity] = useState(0);
    const handleIncrease = () => {
        addToCart(id);
        //updates the local state
        // setQuantity(quantity + 1)

    }

    const handleDecrease = () => {
        // updates the global state
        removeCart(id);
        //updates the local state

        // setCount(count-1)
    }

    // const ExpandMore = styled((props) => {
    //     const { expand, ...other } = props;
    //     return <IconButton {...other} />;
    // })
    // (({ theme, expand }) => ({
    //     transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
    //     marginLeft: 'auto',
    //     transition: theme.transitions.create('transform', {
    //         duration: theme.transitions.duration.shortest,
    //     }),
    // }));

    // function RecipeReviewCard() {
    //     const [expanded, setExpanded] = useState(false);

    //     const handleExpandClick = () => {
    //         setExpanded(!expanded);
    //     };

    return (
        <Card sx={{ maxWidth: 200 }}>
            <CardHeader
                action={
                    <IconButton aria-label="settings">
                        <MoreVertIcon />
                    </IconButton>} />
            <h5>{title}</h5>
            <CardMedia
                component="img"
                height="150"
                image={image}
                alt="Paella dish"
            />
            <CardContent>
                <Typography variant="body2" color="text.secondary">
                    <Rating max={5} name="half-rating" defaultValue={2.5} precision={0.5} />

                </Typography>
            </CardContent>
            <Link to={`products/${id}`}>
                <div style={{ margin: "5px" }}><button>Details</button></div>
            </Link>
            <br />
            <div style={{ display: "flex", flexWrap: "nowrap", justifyContent: "center", alignItems: 'center', gap: '10px', margin: "5px" }}>

                <button onClick={handleDecrease} >-</button>
                <p>{qty}</p>
                <button onClick={handleIncrease} >+</button>
            </div>
            <CardActions disableSpacing>
                <IconButton aria-label="add to favorites">
                    <FavoriteIcon />
                </IconButton>
                <IconButton aria-label="share" >
                    <ShareIcon />
                </IconButton>

            </CardActions>
            <Collapse timeout="auto" unmountOnExit>
                <CardContent>
                    <Typography paragraph>{price}</Typography>

                </CardContent>
            </Collapse>
        </Card>
    );
}



export default Product;