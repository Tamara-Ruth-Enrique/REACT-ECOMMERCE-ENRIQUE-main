import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";
import "./productCard.css";

const ProductCard = ({ title, price, img, stock, category }) => {
  return (
    <Card sx={{ width: 350, height: 450 }}>
      {}
      <CardMedia sx={{ height: 280 }} image={img} title={title} />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {title}
        </Typography>

        <Typography variant="body2" sx={{ color: "text.secondary" }}>
          {price}
        </Typography>
      </CardContent>
      <CardActions>
        <Button variant="outlined" size="small">
          Ver detalle
        </Button>
      </CardActions>
    </Card>
  );
};

export default ProductCard;
