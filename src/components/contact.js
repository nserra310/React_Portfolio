import React, { Component } from "react";
import { Grid, Cell, List, ListItem, ListItemContent } from "react-mdl";

class Contact extends Component {
  render() {
    return (
      <div className="contact-body">
        <Grid className="contact-grid">
          <Cell col={6}>
            <h2>Nicholas Serra</h2>
            <hr />
            <img
              src="https://drive.google.com/uc?id=1aaBT6zCP6rCdwYrN1e3FZCcuNYW8_P2w"
              alt="avatar"
              style={{ height: "250px" }}
            />
            <p style={{ width: "75%", margin: "auto" }}>
              My name is Nicholas Serra, I have only been coding for the past
              eight months and starting to get the feel for how to build fully
              functional websites. Upon completing this bootcamp I hope to build
              a strong portfolio in order to get a job doing web dev for a
              company in San Deigo. Ultimately I'd like to work for a company in
              SD for a few years and gain enough experience to be able to move
              to Washington and be able to work remotely.
            </p>
          </Cell>
          <Cell col={6}>
            <h2>Contact Me</h2>
            <hr />
            <div className="contact-list">
              <List>
                <ListItem>
                  <ListItemContent style={{fontSize: '25px', fontFamily: 'Anton'}}>
                      <i className="fa fa-phone-square" aria-hidden="true"/>
                    908-328-4374
                  </ListItemContent>
                </ListItem>

                <ListItem>
                  <ListItemContent style={{fontSize: '25px', fontFamily: 'Anton'}}>
                      <i className="fa fa-envelope" aria-hidden="true"/>
                    nserra310@yahoo.com
                  </ListItemContent>
                </ListItem>

                <ListItem>
                  <ListItemContent style={{fontSize: '25px', fontFamily: 'Anton'}}>
                      <i className="fa fa-github" aria-hidden="true"/>
                      github.com/nserra310
                  </ListItemContent>
                </ListItem>

                <ListItem>
                  <ListItemContent style={{fontSize: '25px', fontFamily: 'Anton'}}>
                      <i className="fa fa-skype" aria-hidden="true"/>
                      nserra310@outlook.com
                  </ListItemContent>
                </ListItem>

              </List>
            </div>
          </Cell>
        </Grid>
      </div>
    );
  }
}

export default Contact;
