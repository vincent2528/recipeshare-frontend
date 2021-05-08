import React from "react";
import Navbar from "../../components/Navbar/Navbar";
import Container from "@material-ui/core/Container";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import FavoriteIcon from "@material-ui/icons/Favorite";
import BookmarkIcon from "@material-ui/icons/Bookmark";
import IconButton from "@material-ui/core/IconButton";
import VisibilityIcon from "@material-ui/icons/Visibility";
import "./style.scss";
import AccessTimeIcon from "@material-ui/icons/AccessTime";
import MenuBookIcon from "@material-ui/icons/MenuBook";
import PersonIcon from "@material-ui/icons/Person";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    height: 140,
    width: 100,
    background: "red",
  },
  control: {
    padding: theme.spacing(2),
  },
  media: {
    height: 200,
  },
  expand: {
    marginLeft: "auto",
  },
  btn: {
    marginLeft: "auto",

    backgroundColor: "#00b712",
    backgroundImage: "linear-gradient(315deg, #00b712 0%, #5aff15 74%)",

    padding: "5px 10px",
    borderRadius: "10px",
    color: "#fff",
    fontWeight: 700,
    boxShadow: "0 1px 3px rgba(15, 15, 15, 0.13)",
    "&:hover": {
      background: "#00b712",
      backgroundImage: "",
    },
  },
}));

export default function HomePage() {
  const classes = useStyles();

  return (
    <div>
      <Navbar />
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          width: "100%",
          height: "300px",
          padding: "50px 100px",
          backgroundImage:
            "url(https://images.unsplash.com/photo-1514986888952-8cd320577b68?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1355&q=80)",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
        }}
      >
        <div
          style={{
            fontSize: "40px",
            fontWeight: "800",
            display: "flex",
            maxWidth: "500px",
            color: "#6c5ce7",
          }}
        >
          Enjoy you meals at your own comfort
        </div>
        <Button
          variant="contained"
          style={{
            width: "200px",
            marginTop: "20px",
            backgroundColor: "#00b712",
            borderRadius: "5px",
            fontSize: "18px",
            color: "#fff",
          }}
        >
          Create Recipe
        </Button>{" "}
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          padding: "10px",
          marginTop: "20px",
        }}
      >
        {/* <div
          style={{ padding: "5px 20px", fontSize: "22px", fontWeight: "700" }}
        >
          Cuisine :
        </div> */}
        <select
          name="cars"
          id="cars"
          style={{
            padding: "5px 20px",
            borderRadius: "30px",
            fontSize: "20px",
            outline: "none",
          }}
        >
          <option value="volvo">Default</option>
          <option value="saab">Indian</option>
          <option value="mex">Mexican</option>
          <option value="chin">Chinese</option>
          <option value="southI">South Indian</option>
        </select>
      </div>
      <div
        style={{
          height: "100%",
          width: "100%",
          display: "flex",
          justifyContent: "center",
          minHeight: "600px",
        }}
      >
        <Container
          maxWidth="lg"
          style={{
            height: "100%",
            width: "100%",
            marginTop: "20px",
          }}
        >
          <Grid container className={classes.root} spacing={2}>
            <Grid item xs={12}>
              <Grid container justify="center" spacing={3}>
                {[0, 1, 2, 4].map((value) => (
                  // <Grid key={value} item>
                  //   <Card style={{ maxWidth: "300px" }}>
                  //     <CardActionArea>
                  //       <CardMedia
                  //         className={classes.media}
                  //         image="https://images.unsplash.com/photo-1512621776951-a57141f2eefd?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1350&q=80"
                  //         title="Contemplative Reptile"
                  //       />
                  //       <CardContent>
                  //         <Typography gutterBottom variant="h5" component="h2">
                  //           Lizard
                  //         </Typography>
                  //         <Typography
                  //           variant="body2"
                  //           color="textSecondary"
                  //           component="p"
                  //         >
                  //           Lizards are a widespread group of squamate reptiles,
                  //           with over 6,000 species, ranging across all
                  //           continents except Antarctica
                  //         </Typography>
                  //       </CardContent>
                  //     </CardActionArea>
                  //     <CardActions disableSpacing>
                  //       <IconButton aria-label="like">
                  //         <FavoriteIcon />
                  //       </IconButton>
                  //       <IconButton aria-label="bookmark">
                  //         <BookmarkIcon />
                  //       </IconButton>
                  //       <Button
                  //         size="small"
                  //         color="primary"
                  //         className={classes.btn}
                  //         // endIcon={
                  //         //   <ArrowForwardIosIcon
                  //         //     style={{
                  //         //       fontSize: "16px",
                  //         //     }}
                  //         //   ></ArrowForwardIosIcon>
                  //         // }
                  //         endIcon={
                  //           <VisibilityIcon style={{ fontSize: "18px" }} />
                  //         }
                  //       >
                  //         View
                  //       </Button>{" "}
                  //     </CardActions>
                  //   </Card>{" "}
                  // </Grid>
                  <div className="ft-recipe">
                    <img
                      src="https://zippypaws.com/app/uploads/2018/05/strawberry-waffles-1024x668.jpg"
                      alt="Strawberry Waffle"
                    />
                    <div className="ft-recipe__content">
                      <header className="content__header">
                        <div className="row-wrapper">
                          <h2 className="recipe-title">Strawberry Waffle</h2>
                        </div>
                        <ul className="recipe-details">
                          {" "}
                          <li className="recipe-details-item">
                            <AccessTimeIcon />
                            <span className="value"> 20</span>
                            <span className="title"> Minutes</span>{" "}
                          </li>
                          <li className="recipe-details-item">
                            <MenuBookIcon></MenuBookIcon>
                            <span className="value"> 5</span>
                            <span className="title">Ingredient</span>
                          </li>{" "}
                          <li className="recipe-details-item">
                            <PersonIcon />
                            <span className="value"> 4-6</span>
                            <span className="title"> Serving</span>
                          </li>
                        </ul>
                      </header>
                      <p className="description">
                        There’s no better way to celebrate May being National
                        Strawberry Month than by sharing a sweet treat with your
                        pup!!! Strawberries...
                      </p>
                      <footer className="content__footer">
                        {" "}
                        <a href="#">View Recipe</a>
                      </footer>
                    </div>
                  </div>
                ))}
              </Grid>
            </Grid>
          </Grid>
        </Container>
      </div>
    </div>
  );
}
