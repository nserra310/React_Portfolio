import React, { Component } from "react";
import { Tabs, Tab, Grid, Cell, Card, CardTitle, CardActions, CardText, Button, CardMenu, IconButton } from "react-mdl";

class Projects extends Component {
  constructor(props) {
    super(props);
    this.state = { activeTab: 0 };
  }
  toggleCategories() {
    if (this.state.activeTab === 0) {
      return (
        <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
            <CardTitle style={{color: '#fff', height: '176px', background: 'url(https://mk0optctnl0c96xn9e.kinstacdn.com/wp-content/uploads/2018/07/Hall-of-Mosses-Trail-Hoh-Rain-Forest-2.jpg) center / cover'}}>National Park Trip Planner</CardTitle>
        <CardText>
            Lorem Ipsum is simply the dummy text of the printing and typesetting industry. Lorem Ipsum has been in the Industry's
        </CardText>
        <CardActions>
            <Button colored style={{margin: '15px'}}>GitHub</Button>
            <Button colored style={{margin: '5px'}}>Deployed Website</Button>
        </CardActions>
        <CardMenu style={{color: '#fff'}}>
            <IconButton name="share" />
        </CardMenu>
        </Card>
      )
    } else if (this.state.activeTab === 1) {
      return (
        <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
            <CardTitle style={{color: '#fff', height: '176px', background: 'url(https://modernhiker-storage.s3.amazonaws.com/modernhiker/wp-content/uploads/2017/09/Otay-Mountain-13.jpg) center / cover'}}>HikeSD</CardTitle>
        <CardText>
            Lorem Ipsum is simply the dummy text of the printing and typesetting industry. Lorem Ipsum has been in the Industry's
        </CardText>
        <CardActions>
            <Button colored style={{margin: '15px'}}>GitHub</Button>
            <Button colored style={{margin: '5px'}}>Deployed Website</Button>
        </CardActions>
        <CardMenu style={{color: '#fff'}}>
            <IconButton name="share" />
        </CardMenu>
        </Card>
      )
    } else if (this.state.activeTab === 2) {
      return (
        <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
            <CardTitle style={{color: '#fff', height: '176px', background: 'url(https://cdn.luxatic.com/wp-content/uploads/2018/03/most-expensive-burgers.jpg) center / cover'}}>Burger App</CardTitle>
        <CardText>
            Lorem Ipsum is simply the dummy text of the printing and typesetting industry. Lorem Ipsum has been in the Industry's
        </CardText>
        <CardActions>
            <Button colored style={{margin: '15px'}}>GitHub</Button>
            <Button colored style={{margin: '5px'}}>Deployed Website</Button>
        </CardActions>
        <CardMenu style={{color: '#fff'}}>
            <IconButton name="share" />
        </CardMenu>
        </Card>
      )
    } else if (this.state.activeTab === 3) {
      return (
        <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
        <CardTitle style={{color: '#fff', height: '176px', background: 'url(https://images.idgesg.net/images/article/2018/08/5_password-best-practices_unique-passwords_authentication-100768646-large.jpg) center / cover'}}>Password Generator</CardTitle>
    <CardText>
        Lorem Ipsum is simply the dummy text of the printing and typesetting industry. Lorem Ipsum has been in the Industry's
    </CardText>
    <CardActions>
        <Button colored style={{margin: '15px'}}>GitHub</Button>
        <Button colored style={{margin: '5px'}}>Deployed Website</Button>
    </CardActions>
    <CardMenu style={{color: '#fff'}}>
        <IconButton name="share" />
    </CardMenu>
    </Card>
      );
    }
  }

  render() {
    return (
      <div className="category-tabs">
        <Tabs activeTab={this.state.activeTab} onChange={(tabId) => this.setState({ activeTab: tabId })} ripple>
          <Tab>National Park App</Tab>
          <Tab>Hike SD</Tab>
          <Tab>Burger App</Tab>
          <Tab>Password Generator</Tab>
        </Tabs>
        <section className="projects-grid">
        <Grid className="projects-grid">
            <Cell col={12}>
                <div className="content">{this.toggleCategories()}</div>
            </Cell>
        </Grid>
       
        </section>
      </div>
    );
  }
}

export default Projects;
