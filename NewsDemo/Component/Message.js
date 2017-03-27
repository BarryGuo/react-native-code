/**
 * Created by guoqingping on 2017/3/26.
 */


import React, { Component } from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View
} from 'react-native';

var Message = React.createClass({
    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.welcome}>消息</Text>
            </View>
        );
    }
})


const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
    },

    welcome:{
        fontSize:20,
        textAlign:"center",
        margin:10,
    }

});


module.exports = Message;