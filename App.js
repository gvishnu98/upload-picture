import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View ,Button,TouchableOpacity,Alert,Image} from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import *as DocumentPicker from 'expo-document-picker';
import Pdf from 'rn-pdf-reader-js';

const App = ()=>{

  const [selectedImage,setSelectedImage] = React.useState(null);

  let pickfromgallery = async()=>{
    let permissionResult = await DocumentPicker.getDocumentAsync({});

      if(permissionResult.granted === false){
        alert('you need to give up permission to work');
        return;
      }
          

          setSelectedImage(permissionResult.uri);
        }; 

        if(selectedImage !== null){
        return(
            <View style={styles.container}>
            <View>
            <Image
                 source={{uri:selectedImage}}
                 style = {styles.thumbnail}
              />
              <View style={styles.close}>
              <AntDesign name="closecircle" size={24} color="green" /></View>
              </View>
              
            <TouchableOpacity style={{backgroundColor:'#0C948A',borderRadius:10,width:300,height:45,alignItems:'center',marginBottom:100}} onPress={() => pickfromgallery()}>
        <Text style={{fontSize:16,fontWeight:"bold",color:'#fff',marginTop:10}}>Upload</Text>
      </TouchableOpacity>
      
        <StatusBar style="auto" />
          </View>
          
        )}
        else{
          return(
          <View style={styles.container}>  
            <TouchableOpacity style={{backgroundColor:'#0C948A',borderRadius:10,width:300,height:45,alignItems:'center',marginBottom:100}} onPress={() => pickfromgallery()}>
        <Text style={{fontSize:16,fontWeight:"bold",color:'#fff',marginTop:10}}>Upload</Text>
      </TouchableOpacity>
      
        <StatusBar style="auto" />
          </View>
          
        )
        }
            
}

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  thumbnail: {
    width:200,
    height:100,
  },
  close: {
    marginTop:1,
    marginLeft:188,
    position:'absolute',
    top:-18,
  }
});
