import { useRouteError } from "react-router-dom";

const ErrorPage = () => {
  const error = useRouteError();

  return (
    <div className="flex justify-center min-h-screen items-center flex-col">
      <h1 className="text-3xl font-bold mb-2 text-red-600">Oops!</h1>
      <p className="font-medium text-slate-500">Sorry, an unexpected error has occured</p>
      <p className="font-medium text-slate-500">{error.statusText || error.message} </p>
    </div>
  );
};

export default ErrorPage