import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';

import Incidents from './pages/Incidents';
import Datils from './pages/Detail';

const AppStack = createStackNavigator();

function Routes(){
    return (
        <NavigationContainer>
            <AppStack.Navigator screenOptions={{ headerShown: false }} >
                <AppStack.Screen  name="Incidents" component={Incidents} />
                <AppStack.Screen name="Datils" component={Datils} />
            </AppStack.Navigator>
        </NavigationContainer>
    );
}

export default Routes;