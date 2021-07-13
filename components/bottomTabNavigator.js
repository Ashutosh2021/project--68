import * as React from 'react';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import Ride from '../screens/ride';
import RideHistory from '../screens/rideHistory';

const Tab=createBottomTabNavigator();

export default class BottomTabNavigator extends React.Component{

    render(){
        return(
            <NavigationContainer>
                <Tab.navigator>
                    <Tab.screen name="Ride" component={Ride}></Tab.screen>
                    <Tab.screen name="Ride History" component={RideHistory}></Tab.screen>
                </Tab.navigator>
            </NavigationContainer>
        )
    }
}