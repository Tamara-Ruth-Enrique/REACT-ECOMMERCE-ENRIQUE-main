import ProductCard from "../../common/productCard/ProductCard";
import PropTypes from "prop-types";

const ItemList = ({ items }) => {
  console.log(items);

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        gap: "20px",
        flexWrap: "wrap",
        marginTop: "50px",
      }}
    >
      {items.map((item) => {
        return <ProductCard key={item.id} {...item} />;
      })}
    </div>
  );
};

ItemList.propTypes = {
  items: PropTypes.array.isRequired,
};

export default ItemList;
