import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Col, Row, Container } from "../../components/Grid";
import Jumbotron from "../../components/Jumbotron";
import API from "../../utils/API";

class Saved extends Component {
  state = {
    articles: []
  };

  componentDidMount() {
//Make the api call here to get saved articles
  }

  render() {
    return (
      <Container>
        <Jumbotron 
          title = "Saved New York Times Articles"
          lead = "Here are your saved articles..."
          fontawesome = "fas fa-bookmark"
        />
      </Container>
    );
  }
}

export default Saved;
