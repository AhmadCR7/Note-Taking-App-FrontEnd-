import React, { Component } from 'react';
import {
    View,
    Text,
    StyleSheet,
    TouchableOpacity
} from 'react-native'
import moment from 'moment';

export default class CardHeaderFooterExample extends Component {

    handleNavigation = () => {
        this.props.navigation.navigate('EditNote', this.props.item)
    }
    render() {
        return (
            <TouchableOpacity
                style={styles.parentView}
                onPress={this.handleNavigation}
            >
                <View style={{
                    borderRadius: 10,
                    padding: 15,
                    backgroundColor:
                        this.props.item.category_name == 'To Do list' ? '#ffc107' :
                            (this.props.item.category_name == 'CSC 642 Notes' ? '#2FC2DF' :
                                (this.props.item.category_name == 'CSC 675' ? '#77a78f' : '#ff8a65'
                                ))
                }}>
                    <Text style={styles.date}>
                        {moment(this.props.item.time).format('DD MMMM')}
                    </Text>
                    <Text numberOfLines={1} style={styles.title}>
                        {this.props.item.title}
                    </Text>
                    <Text numberOfLines={1} style={styles.category}>
                        {this.props.item.category_name}
                    </Text>
                    <Text numberOfLines={5} style={styles.note}>
                        {this.props.item.note}
                    </Text>
                </View>

            </TouchableOpacity>
        );
    }
}


const styles = StyleSheet.create({
    parentView: {
        borderRadius: 10,
        margin: 13,
        flex: 1,
    },
    date: {
        color: 'white',
        fontSize: 15,
        fontWeight: 'bold',
        alignSelf: 'flex-end'
    },
    title: {
        color: 'white',
        fontSize: 23,
        fontWeight: 'bold',
        marginTop: 10,
    },
    category: {
        fontSize: 15,
        color: 'white',
    },
    note: {
        color: 'white',
        marginTop: 10,
        fontSize: 17,
        fontWeight: 'bold',
    }
})