import type from "../../../redux/biodata/types";

export const mapDispatchToProps = dispatch => ({
  firsClick: payload => dispatch({ type: type.firstButton, payload }),
  secondClick: payload => dispatch({ type: type.seconButton, payload })
});
export const mapStateToProps = state => ({
  formData: state.biodataReducer
});
