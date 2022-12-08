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

function Random() {
  const [loading, setLoading] = useState(false);
  const [reward, setReward] = useState(null);
  const [error, setError] = useState(null);

  function handleSubmit() {
    setReward(null);
    setLoading(true);
    getReward("/random")
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
    <Container maxW={1200} mt={8} className="random">
      <Link to="/">
        <Button size="sm" colorScheme="blackAlpha" leftIcon={<BsArrowLeft />}>
          Back
        </Button>
      </Link>

      <Box textAlign="center">
        <Heading>Random Reward</Heading>
        <Text>Reward will based on probability</Text>
      </Box>

      <VStack mt={4}>
        <table className="table">
          <thead>
            <tr>
              <th>Rewards</th>
              <th>Chances</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Bronze</td>
              <td>100%</td>
            </tr>
            <tr>
              <td>Silver</td>
              <td>50%</td>
            </tr>
            <tr>
              <td>Gold</td>
              <td>10%</td>
            </tr>
            <tr>
              <td>Diamond</td>
              <td>5%</td>
            </tr>
          </tbody>
        </table>

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
export default Random;
