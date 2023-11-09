import { Header } from "../components";
import { ImageBackground } from "react-native";
import { Box, Button, HStack, Heading, Image, ScrollView, VStack, Text, Divider, Icon, Input, Pressable } from "native-base";
import Ionicons from "@expo/vector-icons/Ionicons";

const Editprofile = ({ navigation }) => {
  const Profile = () => {
    navigation.navigate("Profile");
  };
  return (
    <>
      <Header title={"Editprofile"} withBack="true" />
      {/* <ScrollView> */}
      <Box flex={1}>
        <Box bg={"muted.500"} h={"20%"} w={"100%"}></Box>
        <Box alignSelf={"center"}>
          <Image source={require("../assets/favicon.png")} w={"100px"} mt={"-10"} h={"100px"} alt="bg Logo" borderWidth={2} borderRadius={50} borderColor={"black"} alignSelf={"center"} />
          <Heading py={5}>Anandito Satria Pradana</Heading>
        </Box>
        <Box>
          <VStack p={6}>
            <Text bold>Username</Text>
            <Input placeholder="Masukan Username"></Input>
            <Text bold>Email</Text>
            <Input placeholder="Masukan Email"></Input>
            <Text bold>Phone Number</Text>
            <Input placeholder="Masukan Phone Number"></Input>
            <Text bold>Password</Text>
            <Input placeholder="Masukan Password"></Input>
            <Button onPress={Profile} mt={7}>
              {" "}
              UPDATE
            </Button>
          </VStack>
        </Box>
      </Box>
      {/* </ScrollView> */}
    </>
  );
};
export default Editprofile;
