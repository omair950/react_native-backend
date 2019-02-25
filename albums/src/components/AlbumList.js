    import React , {Component} from 'react';
import axios from 'axios';
    import {Platform, StyleSheet, Text, ScrollView} from 'react-native';
    import AlbumDetail from './AlbumDetail';

class AlbumList extends Component {

 state={albums:[]}


componentWillMount(){
    axios.get ('http://rallycoding.herokuapp.com/api/music_albums').then(responce => this.setState({albums: responce.data}));
}
rendrAlbums(){

   return this.state.albums.map(element => <AlbumDetail key={element.title}  element={element} />);
}
    render(){
        // console.log("###Albumlist", this)

return (

            <ScrollView>
         {this.rendrAlbums()}
            </ScrollView>

    )
    }
}

//     const AlbumList =()=>{
// // const { welcome} = styles;
//   return(   <View>
//              <Text> Album List !!! </Text>
//            </View>

//   )
// }

    



    export default AlbumList;