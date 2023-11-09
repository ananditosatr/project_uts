import { Header } from "../components";
import { ImageBackground } from "react-native";
import {
  Box,
  Button,
  HStack,
  Heading,
  ScrollView,
  Text,
  Input,
  VStack,
  Icon,
  TextArea
} from "native-base";
import Ionicons from "@expo/vector-icons/Ionicons";
import Vstack from "native-base/src/theme/components/vstack";

const Addadress = () => {
  return (
    <>
      <Header title={"Addadress"} />
      <Box flex={1}>
        <VStack p={4}>
          <HStack>
            <Icon
              as={<Ionicons name={"alert-outline"} />}
              size={8}
              color={"black"}
            ></Icon>
            <Text pt={1}> Recipents Information</Text>
          </HStack>
          <Input mt={3} placeholder="Full Name"></Input>
          <Input mt={3} placeholder="Number"></Input>
          <Input mt={3} placeholder="Email"></Input>
        </VStack>
        <VStack p={4}>
          <HStack>
            <Icon
              as={<Ionicons name={"alert-outline"} />}
              size={8}
              color={"black"}
            ></Icon>
            <Text pt={1}> Shipping Adress</Text>
          </HStack>
          <Input mt={3} placeholder="Full Name"></Input>
         <TextArea mt={3} h={150}></TextArea>
         <Button mt={14}>Save</Button>
        </VStack>
      </Box>
    </>
  );
};

export default Addadress;
