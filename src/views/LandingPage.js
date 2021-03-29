import "./App.css";
import Button from "@material-ui/core/Button";
import FastfoodIcon from "@material-ui/icons/Fastfood";
import Container from "@material-ui/core/Container";

function App() {
  return (
    <div className="App" style={{ maxWidth: "100vw" }}>
      <header>
        <div
          class="logosection"
          style={{ alignItems: "center", justifyItems: "center" }}
        >
          <FastfoodIcon
            style={{ fontSize: "36px", color: "black", padding: "5px 25px" }}
          ></FastfoodIcon>
          <Button
            class="trademark"
            color="inherit"
            style={{
              color: "black",
              fontSize: "30px",
              background: "transparent",
              border: "0",
              padding: "0",
            }}
          >
            RecipeShare
          </Button>
        </div>
        <nav>
          <ul class="nav_links">
            <li>
              <a href="/home">Home</a>
            </li>
            <li>
              <a href="/home">Recipes</a>
            </li>
            <li>
              <a href="/home">Categories</a>
            </li>
            <li>
              <a href="/">Contact Us</a>
            </li>
          </ul>
        </nav>
        <a class="register" href="/">
          <button class="register_btn">Sign Up</button>
        </a>
      </header>

      <Container maxWidth="sm">
        <div class="content">
          <h1>For Foodies by Foodies</h1>
          <h4>
            Inspired by our great love for food and cooking, we created this
            portal for recipe developers, food bloggers, everyday chefs and
            everything in between.
          </h4>
          <div style={{ display: "flex", justifyContent: "center" }}>
            <Button
              variant="outlined"
              color="primary"
              style={{ borderRadius: "50px" }}
            >
              Already have an account?
            </Button>
            <Button
              variant="contained"
              style={{
                backgroundColor: "#4BB543",
                marginLeft: "10px",
                borderRadius: "50px",
              }}
            >
              Sign Up for Free
            </Button>
          </div>
        </div>
      </Container>

      <div class="ocean">
        <div class="wave"></div>
        <div class="wave"></div>
      </div>
    </div>
  );
}

export default App;
