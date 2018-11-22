import React from 'react';
import { Meteor } from 'meteor/meteor';
import { Checkbox, Menu, Search, Icon, Sidebar, Grid, Card } from 'semantic-ui-react';
import PropTypes from 'prop-types';
import { withTracker } from 'meteor/react-meteor-data';
import { sortBy } from 'underscore';
import CategoryMenu from '../components/CategoryMenu';
import { Categories } from '../../api/category/category';
import { Items } from '../../api/item/item';
import CategoriesMenu from '../components/CategoriesMenu';

/** A simple static component to render some text for the landing page. */
class CategoryPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = { visible: true,
                   sorter: 'title' };
    this.onClick = this.onClick.bind(this);
  }

  sortByItem(items, cat, sortKey) {
    const stuff = sortBy(items, sortKey);
    return stuff.filter(item => item.category === cat).map((item) => <CategoryMenu key={item._id} item={item}/>);
  }

  sortByCategory(categories) {
    const stuff = sortBy(categories, 'name');
    return stuff.map((category) => <CategoriesMenu key={category._id} category={category}/>);
  }

  onClick() {
    console.log('the click is happening');
  }

  render() {
    const { visible } = this.state;
    const titleStyle = {
      fontSize: '32px',
      fontFamily: 'Cinzel',
    };
    const mainContainerStyle = {
      paddingTop: '20px',
      paddingBottom: '20px',
      marginBottom: '24vh',
    };
    const catSideMenu = {
      fontWeight: 'bold',
    };

    return (

        <div>
          <Sidebar.Pushable>
            <Sidebar
                as={Menu}
                vertical
                visible={visible}
                width='wide'>
              <Menu.Item>
                <Menu.Header style={titleStyle}>
                  <Icon size='big' name={this.props.match.params.icon}/> {`${this.props.match.params.name}`}
                </Menu.Header>
              </Menu.Item>
              <Menu.Item>
                <Search/>
              </Menu.Item>
              <Menu.Item>
                <Checkbox label='Title'/>
              </Menu.Item>
              <Menu.Item>
                <Checkbox label='Date'/>
              </Menu.Item>
              <Menu.Item>
                <Checkbox label='Price'/>
              </Menu.Item>
              <Menu.Item style={catSideMenu}>
                { this.sortByCategory(this.props.categories) }
              </Menu.Item>
            </Sidebar>
            <Sidebar.Pusher>
              <Grid container style={mainContainerStyle}>
                <style>{'body {background-color: #def2f1;, color: }'}</style>
                <Card.Group>
                  {this.sortByItem(this.props.items, this.props.match.params.name, this.state.sorter)}
                </Card.Group>
              </Grid>
            </Sidebar.Pusher>
          </Sidebar.Pushable>
        </div>
    );
  }
}

CategoryPage.propTypes = {
  match: PropTypes.object,
  categories: PropTypes.array.isRequired,
  items: PropTypes.array.isRequired,
  ready: PropTypes.bool.isRequired,
  ready2: PropTypes.bool.isRequired,
};

export default withTracker(() => {
  const subscription = Meteor.subscribe('Categories');
  const itemSubscription = Meteor.subscribe('Items');
  return {
    categories: Categories.find({}).fetch(),
    items: Items.find({}).fetch(),
    ready: itemSubscription.ready(),
    ready2: subscription.ready(),
  };
})(CategoryPage);
