import React, { Component } from 'react'
import {
	View,
	Text,
	StyleSheet,
	TextInput,
	FlatList,
	TouchableOpacity,
	Image,
	StatusBar,
} from 'react-native';

// Components
import NoteCard from '../components/card';



class Home extends Component {

	state = {
		notes: [
			{
				"id": 8,
				"title": "EER",
				"note": "EER is different from ERD because EER defines in detail the physical. architecture of the database. ERD, however, is a conceptual design. ERD EERs are totally based on ERDs",
				"time": "2020-12-02T10:08:18.000Z",
				"category_name": "CSC 675"
			},

			{
				"id": 3,
				"title": "Assignments Due Dates",
				"note": "CSC 642 Final project Due on December 8th, CSC 664 Final presentation is due on December 1st",
				"time": "2020-05-02T10:08:18.000Z",
				"category_name": "To Do list"
			},
			{
				"id": 1,
				"title": "Simplicity",
				"note": "The simplest way to achieve simplicity is through thoughtful reduction.",
				"time": "2020-12-02T10:08:18.000Z",
				"category_name": "CSC 642 Notes"
			},
			{
				"id": 6,
				"title": "UI Design ",
				"note": "design is the process designers use to build interfaces in software or computerized devices, focusing on looks or style. Designers aim to create interfaces which users find easy to use and pleasurable",
				"time": "2020-12-02T10:08:18.000Z",
				"category_name": "Web Development"
			},
			{
				"id": 7,
				"title": "Native Base",
				"note": "NativeBase is a free and open source UI component library for React Native to build native mobile apps for iOS and Android platforms. NativeBase also supports web from version 2.4.1.",
				"time": "2020-01-02T10:08:18.000Z",
				"category_name": "Web Development"
			},
			{
				"id": 5,
				"title": "Law 3: TIME",
				"note": "Shrinking waiting time = save time § But: Shrinking time sometimes not possible. Hide § “Saving” time by hiding its passage ð Simply remove time displays from environment § Example: casinos in Las Vegas – no clocks, no windows ð Illusion that time is not of pressing concern",
				"time": "2020-11-02T10:08:18.000Z",
				"category_name": "CSC 642 Notes"
			},
			{
				"id": 9,
				"title": "Entity-Model",
				"note": "Given a single action with an async payload, the middleware transforms the action to a separate pending action and a separate fulfilled/rejected action, representing the states of the async action.",
				"time": "2020-12-02T10:08:18.000Z",
				"category_name": "CSC 675"
			},
		]
	}

	static navigationOptions = ({ navigation }) => {
		return {
			headerLeft: (
				<TouchableOpacity onPress={() => navigation.openDrawer()}>
					<Image
						style={{
							width: 35,
							height: 35,
							borderRadius: 100,
							marginLeft: 15,
						}}
						source={require('../assets/profile-picture.jpeg')}
					/>
				</TouchableOpacity>
			),
			headerTitle: 'CSC 642-Notes-App',
			headerTitleStyle: {
				textAlign: 'center',
				flexGrow: 1,
			},

		}
	};

	handleNavigation = () => {
		this.props.navigation.navigate('AddNote')
	}

	render() {
		return (
			<View style={styles.parentView}>
				<StatusBar backgroundColor="white" barStyle="dark-content" />
				<TextInput
					style={styles.search}
					placeholder="search..."
				/>
				<FlatList
					style={styles.flatList}
					data={this.state.notes}
					numColumns={2}
					keyExtractor={(item) => item.id.toString()}
					renderItem={({ item }) => {
						return (
							<NoteCard item={item} navigation={this.props.navigation} />
						)
					}}
				/>
				<TouchableOpacity
					style={styles.actionButton}
					onPress={this.handleNavigation}
				>
					<Text style={styles.actionButtonLogo}>+</Text>
				</TouchableOpacity>
			</View>
		)
	}
}


export default Home;



const styles = StyleSheet.create({
	parentView: {
		backgroundColor: '#FFFFFF',
		flex: 1,
		position: 'relative'
	},
	search: {
		width: '90%',
		alignSelf: 'center',
		marginTop: 30,
		backgroundColor: 'white',
		elevation: 4,
		borderRadius: 50,
		paddingHorizontal: 25,
		fontSize: 20,
	},
	flatList: {
		paddingHorizontal: 10,
		marginTop: 20,
	},
	actionButton: {
		width: 70,
		height: 70,
		backgroundColor: 'white',
		borderRadius: 100,
		position: 'absolute',
		elevation: 10,
		alignItems: 'center',
		justifyContent: 'center',
		bottom: 30,
		right: 30
	},
	actionButtonLogo: {
		fontSize: 30,
		fontWeight: 'bold'
	},
	isLoading: {
		marginTop: 100,
	},
	isError: {
		alignSelf: 'center',
		fontSize: 20,
		marginTop: 100,
	}
})