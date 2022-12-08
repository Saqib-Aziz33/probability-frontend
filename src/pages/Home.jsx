import { Box, Button, Heading, Text } from "@chakra-ui/react";
import { BsArrowRight } from "react-icons/bs";
import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="home-page">
      <div className="random">
        <Heading>Random Selection</Heading>
        <Text>Reward will be random</Text>
        <Box pt={4}>
          <Link to="/random">
            <Button colorScheme="red" mt={4} rightIcon={<BsArrowRight />}>
              Get Rewards
            </Button>
          </Link>
        </Box>
      </div>
      <div className="increment">
        <Heading>Increment Selection</Heading>
        <Text>Chances of good reward is based on number of requests</Text>
        <Box pt={4}>
          <Link to="/increment">
            <Button colorScheme="blue" mt={4} rightIcon={<BsArrowRight />}>
              Get Rewards
            </Button>
          </Link>
        </Box>
      </div>
    </div>
  );
}
export default Home;
