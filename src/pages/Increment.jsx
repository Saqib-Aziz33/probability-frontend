import {
  Button,
  Container,
  Box,
  Heading,
  Text,
  VStack,
  Center,
} from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { BsArrowLeft } from "react-icons/bs";
import { getReward } from "../lib/fetchData";
import { useState } from "react";
import Reward from "../components/Reward";

function Increment() {
  const [loading, setLoading] = useState(false);
  const [reward, setReward] = useState(null);
  const [error, setError] = useState(null);

  function handleSubmit() {
    setReward(null);
    setLoading(true);
    getReward("/increment")
      .then((data) => {
        setError(null);
        setReward(data);
      })
      .catch((e) => {
        setError(e.message);
      })
      .finally(() => {
        setLoading(false);
      });
  }

  return (
    <Container maxW={1200} mt={8}>
      <Link to="/">
        <Button size="sm" colorScheme="blackAlpha" leftIcon={<BsArrowLeft />}>
          Back
        </Button>
      </Link>

      <Box textAlign="center">
        <Heading>Incremental Rewards</Heading>
        <Text>High/Good rewards based upon more reward requests</Text>
      </Box>
      <VStack mt={4}>
        <Box pt={4}>
          <Button
            variant="outline"
            colorScheme="purple"
            isLoading={loading}
            onClick={handleSubmit}
          >
            Get Reward
          </Button>
        </Box>
      </VStack>

      <Center my={8}>{reward && <Reward reward={reward.reward} />}</Center>
    </Container>
  );
}
export default Increment;
