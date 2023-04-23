import { Link } from "react-router-dom"
import { useContext } from "react"
import { ThemeContext } from "../context/Theme"

const PageNotFound = () => {
  const { theme } = useContext(ThemeContext)
  return (
    <div
      className="min-h-screen flex flex-col justify-center items-center text-white bg-[#000513] p-5"
      style={{
        background: theme.background,
        color: theme.color,
      }}
    >
      <h1 className="text-6xl font-bold mb-8 animate-bounce">404 - Page Not Found</h1>
      <p className="text-2xl mb-8">
        Oops! Looks like you followed a bad link. If you think this is a mistake, please <Link to="/">contact us</Link>.
      </p>
      <Link to="/" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
        Go to Home
      </Link>
    </div>
  )
}

export default PageNotFound
