import { useTheme } from "../hooks/useTheme";

// eslint-disable-next-line react/prop-types
function Header() {
  const [isDark, setIsDark] = useTheme();
  // if(isDark){
  //   document.body.classList.add("dark");

  // }else{
  //   document.body.classList.remove("dark");

  // }
  return (
    <header className={`header-container ${isDark ? "dark" : ""}`}>
      <div className="header-content">
        <h2 className="font-col">Where in the World?</h2>
        <p
          className="theme-changer"
          onClick={() => {
            setIsDark(!isDark);
            localStorage.setItem("isDarkMode", !isDark);
          }}
        >
          <i className={`fa-solid fa-${isDark ? "sun" : "moon"}`} />
          &nbsp;&nbsp;{`${isDark ? "Light Mode" : "Dark Mode"}`}
        </p>
      </div>
    </header>
  );
}

export default Header;
