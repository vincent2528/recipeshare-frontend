import React from "react";
import Navbar from "../components/Navbar/Navbar";
import Container from "@material-ui/core/Container";
import { makeStyles } from "@material-ui/core/styles";

import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import "./view.scss";
import { withStyles } from "@material-ui/core/styles";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Box from "@material-ui/core/Box";
import PropTypes from "prop-types";

const AntTabs = withStyles({
  root: {
    borderBottom: "1px solid #e8e8e8",
  },
  indicator: {
    backgroundColor: "#1890ff",
  },
})(Tabs);

const AntTab = withStyles((theme) => ({
  root: {
    textTransform: "none",
    minWidth: 72,
    fontWeight: theme.typography.fontWeightRegular,
    marginRight: theme.spacing(4),
    fontFamily: [
      "-apple-system",
      "BlinkMacSystemFont",
      '"Segoe UI"',
      "Roboto",
      '"Helvetica Neue"',
      "Arial",
      "sans-serif",
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
    ].join(","),
    "&:hover": {
      color: "#40a9ff",
      opacity: 1,
    },
    "&$selected": {
      color: "#1890ff",
      fontWeight: theme.typography.fontWeightMedium,
    },
    "&:focus": {
      color: "#40a9ff",
    },
  },
  selected: {},
}))((props) => <Tab disableRipple {...props} />);

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box p={3}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  padding: {
    padding: theme.spacing(3),
  },
  demo1: {
    backgroundColor: theme.palette.background.paper,
  },
  demo2: {
    backgroundColor: "#2e1534",
  },
}));

export default function ViewRecipe() {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const handleChangeIndex = (index) => {
    setValue(index);
  };

  return (
    <div class="recipe-card">
      <div
        style={{
          background:
            "url(https://d2gk7xgygi98cy.cloudfront.net/6267-3-large.jpg) no-repeat 50% 50%",
          backgroundSize: "cover",
          height: "300px",
        }}
      ></div>
      <div class="recipe-card__body">
        <h1 class="recipe-card__heading">Oatmeal Cookies</h1>
        <h2 class="recipe-card__subhead">
          Crunchy around the edges, softer in the center, these oatmeal cookies
          feature the nutty taste and nubbly texture of oats.{" "}
        </h2>
        <div className={classes.root}>
          <div className={classes.demo1}>
            <AntTabs
              value={value}
              onChange={handleChange}
              aria-label="ant example"
            >
              <AntTab label="Ingredients" />
              <AntTab label="Methods" />
            </AntTabs>
            <TabPanel value={value} index={0}>
              <Typography className={classes.padding} />
              <ul class="recipe-card__ingredients">
                <li>&frac14; cup unsalted butter</li>
                <li>&frac14; cup vegetable shortening</li>
                <li>&frac12; cup light brown sugar</li>
                <li>&frac14; cup granulated sugar</li>
                <li>1 teaspoon vanilla extract</li>
                <li>1 &frac14; teaspoons ground cinnamon</li>
                <li>&#8539; teaspoon ground nutmeg</li>
                <li>1/2 teaspoon salt</li>
                <li>1 teaspoon cider or white vinegar*</li>
                <li>1 large egg</li>
                <li>&frac12; teaspoon baking soda</li>
                <li>&frac34; cup All-Purpose Flour</li>
                <li>1 &frac12; cups rolled oats</li>
                <li>1 cup golden raisins, optional</li>
              </ul>
            </TabPanel>
            <TabPanel value={value} index={1}>
              <div
                id="recipe-card__content--preparations"
                class="recipe-card__content"
              >
                <ul class="preparation-steps">
                  <li class="step_info">
                    Cut bread into 1-in. cubes; place half in a greased 13x9-in.
                    baking dish. Cut cream cheese into 1-in. cubes; place over
                    bread. Top with blueberries and remaining bread cubes.
                  </li>

                  <li class="step_info">
                    Whisk the eggs, milk and syrup in a large bowl. Pour over
                    bread mixture. Cover and refrigerate for 8 hours or
                    overnight.
                  </li>

                  <li class="step_info">
                    Remove from the refrigerator 30 minutes before baking. Cover
                    and bake at 350° for 30 minutes. Uncover; bake 25-30 minutes
                    longer or until a knife inserted in center comes out clean.
                  </li>

                  <li class="step_info">
                    Combine the sugar, water and cornstarch until smooth in a
                    small saucepan. Bring to a boil over medium heat; cook and
                    stir until thickened, 3 minutes. Stir in blueberries; bring
                    to a boil. Reduce heat and simmer until berries burst, 8-10
                    minutes. Remove from heat; stir in butter. Serve with French
                    toast.
                  </li>
                </ul>
              </div>
            </TabPanel>
          </div>
        </div>
      </div>
    </div>
  );
}
