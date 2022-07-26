import {
  useLocation,
  useNavigate,
  useParams,
} from "react-router-dom";

// -HL Custom hoc: withRouter

const withRouter = (Component) => {
  const Wrapper = (props) => {
    const history = useNavigate();
    const location = useLocation();
    const params = useParams();

    return (
      <Component
        history={history}
        location={location}
        params={params}
        {...props}
      />
    );
  };
  return Wrapper;
};

export default withRouter;
