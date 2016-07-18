import React, { Component, PropTypes } from 'react';

class Images extends Component {
  componentDidMount() {
    // const {
    //   query
    // } = this.props;

    // this.props.query();
  }

  render() {
    const {
      query,
      images
    } = this.props;

    return (
      <div>
        {
          images ? images.map((image, index) => {
            return <div key={index}>{image.title}</div>
          }) : null
        }
        <button onClick={query}>Query</button>
      </div>
    );
  }
}

Images.propsType = {
  images: PropTypes.array.isRequired
}

export default Images;