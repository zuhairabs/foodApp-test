import React from "react";
import {
    View,
    Text,
    StyleSheet,
    Button,
    Image,
    ImageBackground,
	StatusBar,
    Dimensions,
	ScrollView
} from "react-native";
import Ionicons from "react-native-vector-icons/Ionicons";
import { LinearGradient } from "expo-linear-gradient";

export default class Details extends React.Component {

    render() {
        return (
            <View style={styles.container}>
		<StatusBar barStyle="light-content" />
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
               <ScrollView style={styles.footer}>
		<View style={styles.status}>
		<Text style={{color:'green'}}>AVAILABLE</Text>
		</View>
		<Text style={styles.textprice}>{this.props.navigation.state.params.price}</Text>
		<Text numberOfLines={2} style={styles.name}>{this.props.navigation.state.params.name.toUpperCase()}</Text>
		<Text style={styles.textDetails}>The template details auto text code displays the complete template details, including attribute details and metric details.</Text>
		<LinearGradient 
		start={{x: 0, y: 1}} 
		end={{x: 1, y: 0}}
		colors={['#009245', '#8cc631']}
		style={styles.button}
		>
			<Text style={styles.textOrder}>ORDER NOW</Text>
		</LinearGradient>
               </ScrollView>
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
    },
	status: {
		paddingVertical:3,
		borderRadius:50,
		borderColor:'green',
		justifyContent:'center',
		alignItems:'center',
		width:100,
		borderWidth:1
	},
	textprice: {
		color:'green',
		marginTop:20,
		fontWeight: 'bold',
		fontSize:30
	},
	name: {
		color: '#3e3c3e',
		fontWeight: 'bold',
		fontSize: 45,
		marginTop:5
	},
	textDetails: {
		color: 'gray',
		marginTop: 10
	},
	button: {
		justifyContent:'center',
		alignItems:'center',
		marginTop:30,
		paddingVertical: 10,
		borderRadius:100
	},
	textOrder: {
		color: 'white',
		fontWeight:'bold',
		fontSize:18
	}
});
