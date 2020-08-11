import React from "react";
import {
    View,
    Text,
    StyleSheet,
    Button,
    Image,
    ImageBackground,
    Dimensions
} from "react-native";
import Ionicons from "react-native-vector-icons/Ionicons";

export default class Home extends React.Component {

    render() {
        return (
            <View style={styles.container}>
               <ImageBackground 
                    source={require('./asset/header_detail.png')}
                    resizeMode="stretch"
                    style={{ flex:1, alignItems: 'center'}}
               >
               <View style={styles.image_container}>
                   <Image 
                        style={styles.image}
                        source={this.props.navigation.state.params.image}
                   />
               </View>
               <View style={styles.back}>
                    <Ionicons 
                        name="ios-arrow-round-back"
                        color="white"
                        size={35}
                        onPress={() => this.props.navigation.goBack()}
                    />
               </View>
               </ImageBackground>
               <View style={styles.footer}>

               </View>
            </View>

        )
    }
}

const height = Dimensions.get("screen").height;
const height_image = height * 0.5 * 0.5;

var styles = StyleSheet.create({
    container: {
      flex:1,
      backgroundColor:'white',
    },
    footer: {
        flex:1,
        paddingHorizontal: 40
    },
    image_container: {
        width: height_image,
        height: height_image,
        marginTop: height_image/3,
    },
    image: {
        width: '100%',
        height: '100%',
        borderWidth: 5,
        borderColor: 'white',
        borderRadius: height_image/2
    },
    back: {
        position: 'absolute',
        left: 0,
        marginTop: 30,
        marginLeft: 15
    }
});