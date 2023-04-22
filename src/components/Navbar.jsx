

const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false)


          </Link>
        </div>

        {/* Main element of navbar */}
        <div className="item-navbar hidden md:block" id="elements-of-navbar">
          <ul className="flex items-center gap-5 text-white text-[1rem]">
            <li>
              <NavLink to="/" className="inline-block py-2 px-3 text-center font-bold text-white hover:bg-[##FFFFFF]">
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/ProjectsPage"
                className="inline-block py-2 px-3 text-center font-bold text-white hover:bg-[##FFFFFF]"
              >
                Project Page
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/AddYourProjectsGuide"
                className="inline-block py-2 px-3 text-center font-bold text-white hover:bg-[##FFFFFF]"
              >
                Guide
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/ContributorsPage"
                className="inline-block py-2 px-3 text-center font-bold text-white hover:bg-[##FFFFFF]"
              >
                Our Contributers
              </NavLink>
            </li>
          </ul>
        </div>
        {/* Additional elemnt of navbar */}
        <div className="flex justify-center">
          <ul className="flex items-center gap-5 text-white text-[1rem]">
            <li>
              <a
                href="https://github.com/priyankarpal/ProjectsHut"
                target={"_blank"}
                rel={"noreferrer"}
                className="inline-flex h-10 items-center rounded-lg text-white font-extrabold text-[2rem] "
              >
                <FaGithub />
              </a>
            </li>
          </ul>
        </div>

        <Drawer
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: "block", sm: "none" },
            "& .MuiDrawer-paper": { boxSizing: "border-box", width: "56%" },
          }}
        >
          <SideMenu handleDrawerToggle={handleDrawerToggle} />
        </Drawer>
      </div>
    </nav>
  )
}

export default Navbar
