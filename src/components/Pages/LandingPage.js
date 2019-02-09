import React from "react";
import { Container, Row, Col } from "reactstrap";
import Carousel from "../Wip/LandingPage/Carousel";
import Agenda from "../Wip/LandingPage/Agenda";
import TwitterFeed from "../Wip/LandingPage/TwitterFeed";
import FeaturedMember from "../Wip/LandingPage/FeaturedMember";
import Announcements from "../Wip/LandingPage/Announcements";

export default class LandingPage extends React.Component {
  render() {
    return (
      <Container>
        <Row>The Landing Page</Row>
        <Row>
          <Carousel />
        </Row>
        <Row>
          <Col>
            <Announcements />
          </Col>
          <Col>
            <Agenda />
          </Col>
        </Row>
        <Row>
          <Col>
            <TwitterFeed />
          </Col>
          <Col>
            <FeaturedMember />
          </Col>
        </Row>
      </Container>
    );
  }
}
