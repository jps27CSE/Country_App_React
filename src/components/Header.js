import DarkModeIcon from "@mui/icons-material/DarkMode";
const Header = ({ onClick, darkMode }) => {
  return (
    <div className={`header ${darkMode ? "darkMode" : ""}`}>
      <div className="header_container">
        <h2 className="logo">Country Info</h2>
        <div className="switch_mode" onClick={onClick}>
          {/* <DarkModeIcon /> */}
          {/* <h3>Dark Mode</h3> */}
        </div>
      </div>
    </div>
  );
};

export default Header;
