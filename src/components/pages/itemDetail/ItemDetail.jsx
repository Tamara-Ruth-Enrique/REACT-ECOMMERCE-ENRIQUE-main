import CounterContainer from "../../common/counter/CounterContainer";
import PropTypes from "prop-types";

const ItemDetail = ({ item, onAdd }) => {
  console.log(item);
  return (
    <div style={{ margin: "20px" }}>
      <h1>{item.title}</h1>

      <div className="contenDetail">
        <img
          style={{ width: "300px", margin: "auto" }}
          src={item.img}
          alt={item.title}
        />
      </div>

      <CounterContainer onAdd={onAdd} stock={item.stock} />
    </div>
  );
};

ItemDetail.propTypes = {
  item: PropTypes.object.isRequired,
  onAdd: PropTypes.func.isRequired,
};
export default ItemDetail;
