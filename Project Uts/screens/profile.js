import { Header } from "../components";
import { ImageBackground } from "react-native";
import {
  Box,
  Button,
  HStack,
  Heading,
  Image,
  ScrollView,
  VStack,
  Text,
  Divider,
  Icon,
  Pressable
} from "native-base";
import Ionicons from "@expo/vector-icons/Ionicons";

const Profile = ({navigation}) => {
  const Editprofile = () => {
    navigation.navigate("Editprofile");
};
  return (
    <>
      <Header title={"Profile"} />
      <Box flex={1}>
        <Box bg={"muted.500"} h={"25%"} w={"100%"}></Box>
        <Box alignSelf={"center"}>
          <Image
            source={require("../assets/favicon.png")}
            w={"100px"}
            mt={"-10"}
            h={"100px"}
            alt="bg Logo"
            borderWidth={2}
            borderRadius={50}
            borderColor={"black"}
            alignSelf={"center"}
          />
          <Heading py={5}>NAMA LENGKAPPPP</Heading>
        </Box>
        <Box py={4}>
          <VStack p={6}>
            <Box py={5}>
            <Pressable onPress={() => navigation.navigate("Editprofile")}>
              <HStack>
                <Icon
                  as={<Ionicons name={"settings-outline"} />}
                  size={8}
                  color={"black"}
                />
                <Text bold pt={1} pl={4}>Account Settings</Text>
              </HStack>
              </Pressable>
            </Box>
            <Divider />
            <Box py={5}>
              <HStack>
              <Icon
                  as={<Ionicons name={"bookmark-outline"} />}
                  size={8}
                  color={"black"}
                />
                <Text bold pt={1} pl={4}>Saved Items</Text>
              </HStack>
            </Box>
            <Divider />
            <Box py={5}>
              <HStack>
              <Icon
                  as={<Ionicons name={"log-out-outline"} />}
                  size={8}
                  color={"black"}
                />
                <Text bold pt={1} pl={4}>Logout</Text>
              </HStack>
            </Box>
          </VStack>
        </Box>
      </Box>
    </>
  );
};

export default Profile;
