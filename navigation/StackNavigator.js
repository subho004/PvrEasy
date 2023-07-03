const { createNativeStackNavigator } = require("@react-navigation/native-stack");
const { default: HomeScreen } = require("../screens/HomeScreen");
const { default: ProfileScreen } = require("../screens/ProfileScreen");
const { createBottomTabNavigator } = require("@react-navigation/bottom-tabs");
const { NavigationContainer } = require("@react-navigation/native");
import { Entypo } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
import PlacesScreen from '../screens/PlacesScreen';
import MovieScreen from '../screens/MovieScreen';
import TheatreScreen from '../screens/TheatreScreen';

const ProfileStack = createNativeStackNavigator();
const HomeStack = createNativeStackNavigator();

function HomeStackScreens() {
    return (
        < HomeStack.Navigator >
            <HomeStack.Screen name="HomeScreen" component={HomeScreen} options={{ title: "" }} />
            <HomeStack.Screen name="Places" component={PlacesScreen} />
            <HomeStack.Screen name="Movie" component={MovieScreen} />
            <HomeStack.Screen name="Theatre" component={TheatreScreen} />
        </HomeStack.Navigator >
    )
}

function ProfileStackScreens() {
    return (
        <ProfileStack.Navigator>
            <ProfileStack.Screen name="Profile" component={ProfileScreen} />
        </ProfileStack.Navigator>
    )
}

const Tab = createBottomTabNavigator();

function Navigation() {
    return (
        <NavigationContainer>
            <Tab.Navigator>
                <Tab.Screen name="Home"
                    component={HomeStackScreens}
                    options={{
                        tabBarLabel: "Home",
                        tabBarLabelStyle: { color: "black" },
                        headerShown: false,
                        tabBarIcon: ({ focused }) =>
                            focused ? (
                                <Entypo name="home" size={24} color="black" />
                            ) : (
                                <Ionicons name="home-outline" size={24} color="black" />
                            )
                    }}
                />
                <Tab.Screen name="ProfileScreen "
                    component={ProfileStackScreens}
                    options={{
                        tabBarLabel: "Home",
                        tabBarLabelStyle: { color: "black" },
                        headerShown: false,
                        tabBarIcon: ({ focused }) =>
                            focused ? (
                                <Ionicons name="person" size={24} color="black" />
                            ) : (
                                <Ionicons name="person-add-outline" size={24} color="black" />
                            )
                    }}
                />
            </Tab.Navigator>
        </NavigationContainer>
    )
}

export default Navigation