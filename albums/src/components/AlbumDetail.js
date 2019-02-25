    import React , {Component} from 'react';

    import {Platform, StyleSheet, Text, View, Image , Linking} from 'react-native';
   import Card from './Card';
      import CardSection from './CardSection';
   import Button from './Button';

             // <Text> {title}</Text>
    // const AlbumDetail = (Props) =>{
    //  <Text> {Props.element.artist}</Text>
      // console.log("###detail",this);

          const AlbumDetail = ({element}) =>{
               const { title,artist ,thumbnail_image,image ,url}=element;
 const {thumbnailStyle  ,headerTextStyle,thumbnailContainer, container ,imageStyle} = styles;
  
  return( <Card>
  <CardSection >

  <View style ={thumbnailContainer} >
 <Image style ={thumbnailStyle} source={{uri:thumbnail_image}}/>
  </View>
  <View style ={container} >
     <Text style ={headerTextStyle} > {title}</Text>
  
         <Text> {artist}</Text>
         </View>
  </CardSection>
   

<CardSection>
<Image style ={imageStyle} source={{uri:image}}/>
</CardSection>
     <CardSection>
<Button  onPress ={() => Linking.openURL(url)} />
</CardSection>
  
          </Card>
  )
}


const styles = {
  container: {



  flexDirection:'column',
  justifyContent: 'space-around',


  

   
  },
   headerTextStyle:{
fontSize:18
 
  },
  thumbnailStyle:{
    height:50,
    width:50
  },
   thumbnailContainer:{

      justifyContent: 'center',

marginLeft:10,
marginRight:10
  },
     
imageStyle:{
    height:300,
  flex:1,
  width:null
  }
}
export default AlbumDetail;