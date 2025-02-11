import { useRouteError } from "react-router-dom";

const ErrorPage = () => {
  const error = useRouteError()
  console.log(error);
    return (
      <div style={{ textAlign: "center", marginTop: "50px" }}>
        <h1>Oops! Something went wrong.</h1>
        <p>We couldn&apos;t find the page you were looking for.</p>
      </div>
    );
  };
  
  export default ErrorPage;
  