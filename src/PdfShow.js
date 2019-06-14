import React, {Component} from 'react';
import './App.css';
import {Button, Modal, Image,} from 'react-bootstrap';

import EricResume from './img/eric-resume.png'

class PdfShow extends React.Component {
  constructor(props, context) {
    super(props, context);

    this.handleShow = this.handleShow.bind(this);
    this.handleClose = this.handleClose.bind(this);

    this.state = {
      show: false,
    };
  }

  handleClose() {
    this.setState({ show: false });
  }

  handleShow() {
    this.setState({ show: true });
  }

  render() {
    return (
      <>
        <Button variant="primary" onClick={this.handleShow}>
          View Resume
        </Button>

        <div class="container-fluid">



        <Modal size="lg" show={this.state.show} onHide={this.handleClose} fluid>
          <Modal.Header closeButton fluid>

          </Modal.Header>
          <Modal.Body fluid >
            <Image src={EricResume} fluid/>
          </Modal.Body>
          <Modal.Footer fluid>
            <Button variant="secondary" onClick={this.handleClose}>
              Close
            </Button>
          </Modal.Footer>
        </Modal>

      </div>

      </>
    );
  }
}


export default PdfShow;
