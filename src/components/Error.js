import { useRouteError } from "react-router";
const Error = () => {
  const error = useRouteError();
  //   console.log(error);
  return (
    <div>
      <h1>Oops!! Page not found</h1>
      <h3>Status : {error.status}</h3>
    </div>
  );
};

export default Error;
