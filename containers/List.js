// react redux's connect function
import { connect } from "react-redux";

// import in the List component
import List from "../screens/List";

// mapStateToProps is passed in the current state
// it should return an object, which gets passed in as props to the connected component
const mapStateToProps = state => {
  return {
    names: state.fims,
  };
};

// connect up mapStateToProps with the List component
// List's props are now controlled by this file
export default connect(mapStateToProps)(List);
