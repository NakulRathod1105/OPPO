import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import BackToTopButton from "../HtAf/BackToTopButton";

export default function StoreLocator() {
  return (
    <Container fluid className="p-0 m">
      <Row className="mx-0 p-0 h-100">
        <Col className="p-0">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d3776869.482786959!2d71.3269721!3d22.41588245!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sin!4v1691171305943!5m2!1sen!2sin"
            width="100%"
            height="625"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Google Maps Location"
          ></iframe>
          <BackToTopButton/>
        </Col>
      </Row>
    </Container>
  );
}
