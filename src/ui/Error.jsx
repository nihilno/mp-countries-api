import { useNavigate, useRouteError } from "react-router-dom";

function Error() {
  const navigate = useNavigate();
  const error = useRouteError();

  return (
    <div className="flex flex-col items-center justify-center h-[100dvh] gap-2 md:gap-10 md:text-4xl text-center">
      <h1 className="font-bold">Something went wrong 😿</h1>
      <p className="underline">{error.data || error.message}</p>
      <button
        className="cursor-pointer text-blue-600"
        onClick={() => navigate(-1)}
      >
        &larr; Go back
      </button>
    </div>
  );
}

export default Error;
