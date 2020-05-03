import React, { PureComponent } from 'react';

const withHOC = ChildComponents => {

  return class Wrapper extends PureComponent {
    constructor(props) {
      super(props);
      this.state = {
        navbar: true
      }
    }

    render() {
      return (
        <>
          <ChildComponents/>
        </>
      );
    }
  }
}

export default withHOC;