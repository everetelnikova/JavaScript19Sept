'use strict';

const e = React.createElement;

class LikeButton extends React.Component {
  constructor(props) {
    super(props);
    this.state = { liked: false };
  }

  render() {
    if (this.state.liked) {
      return 'You liked this.';
    }

    return e(
      'button',
      { onClick: () => this.setState({ liked: true }) },
      'Like'
    );
  }
}
const domContainer = document.querySelector('#btn_cont');
ReactDOM.render(e(LikeButton), domContainer);

const element = React.createElement('h1', null, 'Hello world');
 ReactDOM.render(element, document.getElementById('root'));