import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import Badge from "@mui/material/Badge";

const CartWidget = () => {
  return (
    <div>
      <Badge badgeContent={2} color="primary" max={50}>
        <ShoppingCartIcon />
      </Badge>
    </div>
  );
};

export default CartWidget;
