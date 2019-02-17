import React from 'react';
import { FlatList, Alert, ActivityIndicator, Button, Text, View  } from 'react-native';

// local imports
import { ButtonBase } from './Button';

export default class FetchExample extends React.Component {

  constructor(props){
    super(props);
    this.state ={ isLoading: true}
  }

  // The fetch() call returns a promise, which resolves with the Response object associated with 
  // the resource fetch operation. You'll notice that since we are requesting an image, we need to run Body.blob 
  // (Response implements body) to give the response its correct MIME type.
  componentDidMount()  {
    this.setState({
      isLoading: false
    });
    // this.getAllWalmartItems();
  }


  render(){

    if(this.state.isLoading){
      return(
        <View style={{flex: 1, padding: 20}}>
          <ActivityIndicator/>
        </View>
      )
    }

    return(
      <View style={{flex: 1, paddingTop:20}}>
        <Text>Hello World</Text>
        <ButtonBase />
        
        
        {/* <FlatList
          data={this.state.dataSource}
          renderItem={({item}) => <Text>{item.title}, {item.releaseYear}</Text>}
          keyExtractor={({id}, index) => id}
        /> */}


      </View>
    );
  }
}