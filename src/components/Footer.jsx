

export default function Footer() {
  const { theme } = useContext(ThemeContext)
  const bgColor = theme.mode === "dark" ? theme.navbar.background : theme.background

  return (

          <a
            href="https://github.com/priyankarpal/ProjectsHut/blob/main/LICENSE"
            target="_blank"
            className="text-white"

          >
            Under MIT License
          </a>
        </div>
      </div>
    </footer>
  )
}
