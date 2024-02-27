import logo from './assets/react.svg'

function Header() {
  const styles = {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    gap: "2rem",
    fontFamily: "Arial",
  }

  const logoContainer = {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    gap: "1rem",
  }

  const headerContainer = {
    position: "fixed",
    top: 0,
    left: 0,
    backgroundColor: "#121212",
    width: "100%",
  }

  const navContainer = {
    margin: "0 auto",
    maxWidth: "1600px",
    padding: "0 1rem",
  }

  return (
    <header style={headerContainer} className="header-container">
      <nav style={navContainer}>
        <div className="logo" style={styles}>
          <div style={logoContainer} className="logo-container">
            <img src={logo}></img>
            <h1>React.js</h1>
          </div>
          <div className="text-container">
            <p>Practice 1</p>
          </div>
        </div>
      </nav>
    </header >
  );
}

export default Header