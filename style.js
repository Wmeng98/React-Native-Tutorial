import { StyleSheet } from 'react-native';

export const globalStyle = StyleSheet.create({

  container: {
    flex: 1,
    justifyContent: 'center',
   },
   buttonContainer: {
     margin: 20
   },
   alternativeLayoutButtonContainer: {
     margin: 20,
     flexDirection: 'row',
     justifyContent: 'space-between'
   }
})