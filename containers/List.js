// react redux's connect function
import { connect } from "react-redux";

// import in the List component
import List from "../screens/List";

// import in the getTitles API action
import { getFilms } from "../data/api";

// mapStateToProps is passed in the current state
// it should return an object, which gets passed in as props to the connected component
const mapStateToProps = state => {
  return {
    films: state.films,
  };
};

// setup mapDispatchToProps to call the action
const mapDispatchToProps = dispatch => {
  return {
    onLoad: () => dispatch(getFilms()),
  };
};

// connect up mapStateToProps with the List component
// List's props are now controlled by this file
export default connect(mapStateToProps, mapDispatchToProps)(List);
