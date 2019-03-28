import React, { Component } from "react";
import { Switch, Route, withRouter } from "react-router-dom";
import "./Styles/global.scss";
import Homepage from "./Components/Homepage";
import Mobile from "./Components/Mobile";
import SearchContainer from "./Components/SearchPage/SearchContainer";
import IndividualRecipe from "./Components/Recipes/IndividualRecipe";
import Feature from "./Components/Featurepage/Feature";
import FeatureAll from "./Components/Featurepage/FeatureAll";
import axios from "axios";
import Navbarr from "./Components/Navbar";
import Footer from "./Components/Footer";
import AvailableItem from "./Components/Featurepage/ExistedList/AvailableItem";
import ImageRecognition from "./Components/Featurepage/AddNew/ImageRecognition";

const foodListURL = "/feature/";

class App extends Component {
  state = {
    recipes: [],
    data: [],
    foodItems: [],
    presetValues: null,
    foodItem: "",
    chosenIngredients: [],
    showList: false
  };

  handleSubmitRecipes = event => {
    event.preventDefault();
    event.target.reset();
    var query = this.state.chosenIngredients.join(",");
    axios.get(`/search?q=${query}`).then(response => {
      this.setState({
        recipes: response.data.recipe
      });
      this.props.history.push(`/search?q=${query}`);
      this.setState({
        chosenIngredients: []
      });
    });
  };

  handleOnChangeIngredients = e => {
    let x = this.state.chosenIngredients;
    if (e.target.checked) {
      x.push(e.target.value);
    } else {
      const i = x.indexOf(e.target.value);
      x.splice(i, 1);
    }
    this.setState({ chosenIngredients: x });
  };

  searchRecipe = event => {
    event.preventDefault();
    const { value } = event.target.query;
    axios.get(`/search?q=${value}`).then(response => {
      this.setState(
        {
          recipes: response.data.recipe
        }
      );
    });
  };

  componentDidMount() {
    axios.get(foodListURL).then(response => {
      this.setState({
        foodItems: response.data
      });
    });
  }

  handleSubmitEvent = event => {
    event.preventDefault();
    axios
      .post(foodListURL, {
        foodItem: event.target.foodItem.value,
        category: event.target.category.value,
        expiryDate: event.target.expiryDate.value
      })
      .then(response => {
        this.setState({
          foodItems: response.data,
          uploading: false
        });
      })
      .catch(err => {
        console.log(err);
      });
    event.target.foodItem.value = "";
    event.target.category.value = "";
    event.target.expiryDate.value = "";

    this.setState({
      presetValues: null
    });
    this.props.history.push("/feature/all");
  };

  removeItem = id => {
    axios.delete(`${foodListURL}${id}`).then(response => {
      this.setState({
        foodItems: response.data
      });
    });
  };

  sendToAddItems = event => {
    this.setState({
      presetValues: {
        foodName: event
      }
    });

    this.props.history.push("/feature");
  };

  render() {
    return (
      <div className="App">
        <Navbarr />

        <Switch>
          <Route exact path="/" component={Homepage} />

          <Route exact path="/app" component={Mobile} />
          <Route
            exact
            path="/webcam"
            render={routeProps => {
              return <ImageRecognition sendToAddItems={this.sendToAddItems} />;
            }}
          />

          <Route
            exact
            path="/search"
            render={routeProps => {
              return (
                <SearchContainer
                  searchRecipe={this.searchRecipe}
                  recipes={this.state.recipes}
                  getSingleRecipe={this.getSingleRecipe}
                  chosenIngredients={this.state.chosenIngredients}
                />
              );
            }}
          />
          <Route
            exact
            path="/search/:i"
            render={routeProps => {
              return <IndividualRecipe item={routeProps.location.state.item} />;
            }}
          />

          <Route
            exact
            path="/feature"
            render={routeProps => {
              return (
                <Feature
                  routeProps={routeProps.match}
                  handleSubmitEvent={this.handleSubmitEvent}
                  foodItems={this.state.foodItems}
                  removeItem={this.removeItem}
                  content={this.content}
                  presetValues={this.state.presetValues}
                />
              );
            }}
          />
          <Route
            exact
            path="/feature/all"
            render={routeProps => {
              return (
                <FeatureAll
                  foodItems={this.state.foodItems}
                  removeItem={this.removeItem}
                  handleSubmitRecipes={this.handleSubmitRecipes}
                  handleOnChangeIngredients={this.handleOnChangeIngredients}
                  checked={this.state.checked}
                />
              );
            }}
          />
          <Route path="/feature/:id" component={AvailableItem} />
        </Switch>
        <Footer />
      </div>
    );
  }
}

export default withRouter(App);
