import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";
import "./productCard.css";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

const ProductCard = ({ title, price, img, stock, category, id }) => {
  return (
    <Card sx={{ width: 350, height: 450 }}>
      {}
      <CardMedia
        sx={{ height: 280 }}
        image={img}
        title={title}
        category={category}
        stock={stock}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {title}
        </Typography>

        <Typography variant="body2" sx={{ color: "text.secondary" }}>
          {price}
        </Typography>
      </CardContent>
      <CardActions>
        <Link to={`/productDetail/${id}`}>
          <Button variant="outlined" size="small">
            Ver detalle
          </Button>
        </Link>
      </CardActions>
    </Card>
  );
};

ProductCard.propTypes = {
  title: PropTypes.string.isRequired,
  price: PropTypes.string.isRequired,
  img: PropTypes.string.isRequired,
  stock: PropTypes.number.isRequired,
  category: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
};

export default ProductCard;
