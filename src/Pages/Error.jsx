
const Error = () => {
    const mass = "Oops! The page you're looking for doesn't exist."
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 text-gray-800">
      <div className="text-center">
        <h1 className="text-9xl font-bold text-error">404</h1>
        <h2 className="text-4xl font-semibold mt-4">Page Not Found</h2>
        <p className="mt-2 text-lg text-gray-600">
          {mass}
        </p>
        <div className="mt-6">
          <a
            href="/"
            className="btn btn-primary btn-wide"
          >
            Go Back Home
          </a>
        </div>
      </div>
    </div>
  );
};

export default Error;
