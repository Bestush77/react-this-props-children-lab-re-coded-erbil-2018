import React from 'react';

 class ThemedDecorations extends React.Component {
  render(){
    childrenWithExtraProp = React.children.map(this.children.prop, child => React.cloneElement(child, {className:this.props.theme}));
    return(
      <div>
      {childrenWithExtraProp}
      </div>
      );
  }
}

export default ThemedDecorations;