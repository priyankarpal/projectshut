import Link from "next/link";

function PageNotFound() {
  return (
    <div className="min-h-screen flex flex-col justify-center items-center text-white bg-[#000513] p-5">
      <h1 className="text-6xl font-bold mb-8 animate-bounce">
        404 - Page Not Found
      </h1>
      <p className="text-2xl mb-8">
        Oops! Looks like you followed a bad link. If you think this is a
        mistake, please <Link href="/">contact us</Link>.
      </p>
      <Link
        href="/"
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
      >
        Go to Home
      </Link>
    </div>
  );
}

export default PageNotFound;
