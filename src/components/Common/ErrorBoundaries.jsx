import React from "react";
import PropTypes from "prop-types";
import { Button } from "reactstrap";
import { Link } from "react-router-dom";
import Error from "../../assest/img/error.svg"

class ErrorBoundaries extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, error: null };
  }

  componentDidCatch(error) {
    this.setState({
      hasError: true,
      error: error.toString(),
    });
  }

  render() {
    const { children } = this.props;
    const { hasError, error } = this.state;
    if (hasError) {
      // You can render any custom fallback UI
      return (
        <div className=" flex items-center justify-center flex-col">
           <img src={Error} alt="error" />
      <Link to="/">
        <Button className="text-[1.8rem] mt-[3rem]"> Go Back</Button>
      </Link>
      <h2 className="text-danger ">{error}</h2>
        </div>
      );
    }

    return children;
  }
}


ErrorBoundaries.propTypes = {
  children: PropTypes.node.isRequired,
};
export default ErrorBoundaries;
