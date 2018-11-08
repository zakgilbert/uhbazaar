import React from 'react';
import { Card, Icon } from 'semantic-ui-react';

export default class CategoryMenu extends React.Component {
  render() {
    /*
    const categoryCards = [
      { header: 'Books' },
      { header: 'Furniture' },
      { header: 'Free' },
      { header: 'Housing' },
      { header: 'Personals' },
      { header: 'Pets' },
      { header: 'Recreation' },
    ]; */
   // const createCards = () => <Card.Group items={ categoryCards }/>;
    return (
        <Card.Group centered>
        <Card>
          <Card.Content >
            <Card.Header> <Icon size='big' name='book'/>Books</Card.Header>
          </Card.Content>
        </Card>
          <Card>
            <Card.Content>
              <Card.Header> <Icon size='big' name='bed'/>Furniture</Card.Header>
            </Card.Content>
          </Card>
          <Card>
            <Card.Content>
              <Card.Header> <Icon size='big' name='heart'/>Personals</Card.Header>
            </Card.Content>
          </Card>
          <Card>
            <Card.Content>
              <Card.Header> <Icon size='big' name='circle'/>Free</Card.Header>
            </Card.Content>
          </Card>
          <Card>
            <Card.Content>
              <Card.Header> <Icon size='big' name='home'/>Housing</Card.Header>
            </Card.Content>
          </Card>
          <Card>
            <Card.Content>
              <Card.Header> <Icon size='big' name='sticker mule'/>Pets</Card.Header>
            </Card.Content>
          </Card>
        </Card.Group>
    );
  }
}
