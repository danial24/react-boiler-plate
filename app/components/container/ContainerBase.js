import React from "react";

export default class ContainerBase extends React.Component{

  static contextTypes ={
    router:React.PropTypes.object
  }
}