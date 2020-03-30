import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Pokemon extends Component {
  state = {
    transform: 'scale(1.0)',
    boxShadow: 'none'
  };
  onMouseOver = () => {
    this.setState({
      transform: 'scale(1.05)',
      boxShadow: '0px 5px 15px 5px rgba(87,255,196,0.5)'
    });
  };
  onMouseOut = () => {
    this.setState({
      transform: 'scale(1.0)',
      boxShadow: 'none'
    });
  };
  getStyle = () => {
    return {
      boxShadow: this.state.boxShadow,
      transition: 'transform .2s',
      transform: this.state.transform,
      borderRadius: '20px'
    };
  };
  render() {
    const pokemon = this.props.poke;
    console.log(pokemon);
    return (
      <Link style={{ textDecoration: 'none' }} to={`/pokemon/${pokemon}`}>
        <img
          src={`https://res.cloudinary.com/aldencloud/image/upload/v1581096275/pokemon/poke-${pokemon}.png`}
          style={this.getStyle()}
          width='100%'
          onMouseOver={this.onMouseOver}
          onMouseOut={this.onMouseOut}
          onTouchStart={this.onMouseOver}
          onTouchEnd={this.onMouseOut}
        />
      </Link>
    );
  }
}

export default Pokemon;