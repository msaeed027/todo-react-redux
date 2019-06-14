import { connect } from "react-redux";
import Filter from "./Filter";
import { setVisibilityFilter } from "../../redux/actions/todoActions";

const mapStateToProps = state => ({
  visibilityFilter: state.visibilityFilter
});

function mapDispatchToProps(dispatch) {
  return {
    applyFilter: filter => dispatch(setVisibilityFilter(filter))
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Filter);
