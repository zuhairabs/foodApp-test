import React from "react";
import {
    View,
    Text,
    StyleSheet,
    FlatList,
    Image,
    TouchableOpacity
} from "react-native";

export default class Home extends React.Component {
    constructor(props) {
        super(props)
        this.state={
            data: [
                {
                    type: 'Dessert',
                    color: '#f7931e',
                    data:[
                        {
                            name:'Stewed Mushrooms',
                            image: require("../asset/namkho.jpg"),
                            price: "$12"
                        },
                        {
                            name:'Jackfruit Fried',
                            image: require("../asset/mitkho.jpg"),
                            price: "$15"
                        }
                    ]
                },
                {
                    type: 'Main course',
                    color: '#39b54a',
                    data:[
                        {
                            name:'Noodles',
                            image: require("../asset/hutieu.jpg"),
                            rating: 4,
                            price: "$20"
                        },
                        {
                            name:'Beef',
                            image: require("../asset/cuonlalot.jpg"),
                            rating: 2,
                            price: "$12"
                        },
                        {
                            name:'Salad dressing',
                            image: require("../asset/cuondiep.jpg"),
                            rating: 5,
                            price: "$13"
                        },
                    ]
                },
                {
                    type: 'Other',
                    color: '#ed1e79',
                    data:[
                        {
                            name:'Salad dressing',
                            image: require("../asset/cuondiep.jpg"),
                            price: "$13"
                        },
                        {
                            name:'Jackfruit warehouse',
                            image: require("../asset/mitkho.jpg"),
                            price: "$15"
                        }
                    ]
                },
            ]
        }
    }

    renderItem_type = ({item}) => {
        return(
            <TouchableOpacity 
            onPress={() => this.props.props.navigation.navigate("DetailsScreen", {
                image: item.image,
                price: item.price,
                name: item.name
            })}
            style={styles.item_type}>
                <Image 
                style={styles.image}
                    source={item.image}
                />
                <Text style={styles.name}>{item.name}</Text>
            </TouchableOpacity>
        )
    }

    ItemSeparatorComponent_type = () => {
        return(
            <View style={{ width:10 }} />
        )
    }
    
    renderItem = ({item}) => {
        return(
            <View style={{flex:1}}>
                <Text 
                style={[styles.type, {
                color: item.color
                }]}>
                    {item.type}
                </Text>
                <View style={[styles.item, {backgroundColor: item.color}]}>
                    <FlatList 
                        data={item.data}
                        renderItem={this.renderItem_type}
                        keyExtractor={(item, index) => index.toString()}
                        horizontal={true}
                        showsHorizontalScrollIndicator={false}
                        ItemSeparatorComponent={this.ItemSeparatorComponent_type}
                    />
                </View>
            </View>
        )
    }

    ItemSeparatorComponent = () => {
        return(
            <View style={{height: 20}}/>
        )
    }

    render() {
        return (
            <View style={styles.container}>
                <FlatList 
                    data={this.state.data}
                    renderItem={this.renderItem}
                    keyExtractor={(item, index) => index.toString()}
                    showsVerticalScrollIndicator={false}
                    ItemSeparatorComponent={this.ItemSeparatorComponent}
                />
            </View>

        )
    }
}

var styles = StyleSheet.create({
    container: {
      flex:1,
      marginTop:15,
      marginBottom:10,
      backgroundColor:'white'
    },
    type: {
        fontSize: 18,
        fontWeight: 'bold'
    },
    item:{
        flexDirection: 'row',
        paddingHorizontal: 15,
        paddingVertical: 5, 
        borderRadius: 10,
        marginTop: 10
    },
    item_type: {
        flex:1,
        alignItems: 'center'
    },
    image: {
        height: 80,
        width: 80,
        borderRadius: 40,
        borderWidth:1,
        borderColor: 'white'
    },
    name: {
        marginTop: 10,
        color: 'white',
        fontSize: 15
    }
});