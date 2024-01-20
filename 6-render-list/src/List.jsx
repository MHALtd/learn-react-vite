import PropTypes from "prop-types";

function List(props) {
  //   ALPHABETICAL
  //   fruits.sort((a, b) => a.name.localeCompare(b.name));

  //  REVERSE ALPHABETICAL
  //   fruits.sort((a, b) => b.name.localeCompare(a.name));

  //  CALORIES NUMERIC
  //   fruits.sort((a, b) => a.calories - b.calories);

  //  REVERSE CALORIES NUMERIC
  //   fruits.sort((a, b) => b.calories - a.calories);

  //   FUNCTION TO FILTER LOW CALORIES FRUIT BELOW 100
  //   const lowCalFruits = fruits.filter((fruit) => fruit.calories < 100);

  //   FUNCTION TO FILTER LOW CALORIES FRUIT MORE THAN 100
  //   const highCalFruits = fruits.filter((fruit) => fruit.calories >= 100);

  const category = props.category;
  const itemList = props.items;

  // DISPLAY DEFAULT FRUITS
  const listItems = itemList.map((item) => (
    <li key={item.id}>
      {item.name} :&nbsp;<b>{item.calories}</b>
    </li>
  ));

  // DISPLAY LOW CALORIES FRUIT BELOW 100
  //   const listItems = lowCalFruits.map((lowCalFruit) => (
  //     <li key={lowCalFruit.id}>
  //       {lowCalFruit.name} : &nbsp; <b>{lowCalFruit.calories}</b>
  //     </li>
  //   ));

  // DISPLAY HIGH CALORIES FRUIT MORE THAN 100
  //   const listItems = highCalFruits.map((highCalFruit) => (
  //     <li key={highCalFruit.id}>
  //       {highCalFruit.name} : &nbsp; <b>{highCalFruit.calories}</b>
  //     </li>
  //   ));

  return (
    <>
      <h3 className="list-category">{category}</h3>
      <ol className="list-items">{listItems}</ol>
    </>
  );
}

// PROP TYPES
List.propTypes = {
  category: PropTypes.string,
  items: PropTypes.arrayOf(PropTypes.shape({ id: PropTypes.number, name: PropTypes.string, calories: PropTypes.number })),
};
// DEFAULT PROPS
List.defaultProps = {
  category: "Category",
  items: [],
};

export default List;
