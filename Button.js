import React, { Component } from 'react';
import { Alert, Button, StyleSheet, View } from 'react-native';
import {globalStyle} from './style'

export class ButtonBase extends Component {
  
  // constructor(){
  //   this.getAllWalmartItems = this.getAllWalmartItems.bind(this);
  // }

  getAllWalmartItems(){ // response is an object, needs to be converted to json
    return fetch('http://192.168.2.64:3000/api/walmart')
      .then((response) => {
          // Alert.alert(JSON.stringify(response));
          return response.json();
        })
      .then((responseJson) => {
        Alert.alert("Gotten data back as json...");
        Alert.alert(JSON.stringify(responseJson));
        // this.setState({
        //   dataSource: responseJson,
        // }, function(){

        // });
      })
      .catch((error) =>{
        console.error(error);
      });
  }
  
  _onPressButton() {
    Alert.alert("Button tapped");
    // this.getAllWalmartItems();
  }


  render() {
    return (
      <View style={globalStyle.container}>
        <View style={globalStyle.buttonContainer}>
          <Button
            onPress={this.getAllWalmartItems}
            title="Press Me"
          />
        </View>
      </View>
    );
  }
}

// 2 kinds of exports
// 1.) named exports
// 2.) defualt export (can only be one in a module)


// export default class ButtonBasics extends Component {
//   _onPressButton() {
//     Alert.alert('You tapped the button!')
//   }

//   render() {
//     return (
//       <View style={globalStyle.container}>
//         <View style={globalStyle.buttonContainer}>
//           <Button
//             onPress={this._onPressButton}
//             title="Press Me"
//           />
//         </View>
//         <View style={globalStyle.buttonContainer}>
//           <Button
//             onPress={this._onPressButton}
//             title="Press Me"
//             color="#841584"
//           />
//         </View>
//         <View style={globalStyle.alternativeLayoutButtonContainer}>
//           <Button
//             onPress={this._onPressButton}
//             title="This looks great!"
//           />
//           <Button
//             onPress={this._onPressButton}
//             title="OK!"
//             color="#841584"
//           />
//         </View>
//       </View>
//     );
//   }
// }

