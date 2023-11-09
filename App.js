import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import { NativeBaseProvider, Text, Box } from "native-base";
import Ionicons from "@expo/vector-icons/Ionicons";
import Home from "./screens/home";
import Profile from "./screens/profile";
import Editprofile from "./screens/editprofil";
import Addadress from "./screens/addadress";

// Navigator Declaration
const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

const noHead = { headerShown: false };

const Tabs = () => {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color }) => {
          let iconName;
          switch (route.name) {
            case "Home":
              iconName = "home-outline";
              break;
            // case "Pesanan":
            //   iconName = "cart";
            //   break;
            // case "Riwayat":
            //   iconName = "time";
            //   break;
            case "Addadress":
              iconName = "pin-outline";
              break;
              case "Profile":
                iconName = "person-circle-outline";
                break;
          }
          return (
            <Ionicons
              name={iconName}
              size={28}
              color={focused ? "black" : color}
            />
          );
        },
        tabBarIconStyle: { marginTop: 5 },
        tabBarStyle: {
          height: 70,
          borderTopWidth: 0,
          backgroundColor: 'white',
        },
        tabBarLabel: ({ children, color, focused }) => {
          return (
            <Text color={focused ? "black" : color} mb={2}>
              {children}
            </Text>
          );
        },
      })}
    >
      <Tab.Screen name="Home" component={Home} options={noHead} />
      {/* <Tab.Screen name="Pesanan" component={Pesanan} options={noHead} />
      <Tab.Screen name="Riwayat" component={RiwayatPesanan} options={noHead} /> */}
      <Tab.Screen name="Addadress" component={Addadress} options={noHead} />
      <Tab.Screen name="Profile" component={Profile} options={noHead} />
    </Tab.Navigator>
  );
};

const App = () => {
  return (
    <NativeBaseProvider>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Home">
          <Stack.Screen
            name="Tabs"
            component={Tabs} options={noHead} />
          <Stack.Screen
            name="Editprofile"
            component={Editprofile}
            options={noHead}
          // />
          // <Stack.Screen
          //   name="RiwayatPesanan"
          //   component={RiwayatPesanan}
          //   options={noHead}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </NativeBaseProvider>
  );
};

export default App;