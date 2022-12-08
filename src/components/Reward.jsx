import { Heading, HStack, Image, Stack, Text } from "@chakra-ui/react";
import { useEffect } from "react";
import { useState } from "react";

function Reward({ reward }) {
  const [showMoney, setShowMoney] = useState(true);

  useEffect(() => {
    const endCelebrate = setTimeout(() => {
      setShowMoney(false);
    }, 3000);

    return () => {
      clearTimeout(endCelebrate);
    };
  }, []);

  return (
    <div className="reward">
      {showMoney ? (
        <img className="money" src="/assets/money.gif" alt="" />
      ) : (
        <HStack gap={2}>
          <Image src={`/assets/${reward.reward.toLowerCase()}.png`} />
          <Stack>
            <Heading size="md">Reward: {reward.reward}</Heading>
            <Text>
              Coins:{" "}
              <Text as="span" fontWeight="bold" color="green.300">
                {reward.coins}
              </Text>
            </Text>
          </Stack>
        </HStack>
      )}
    </div>
  );
}
export default Reward;
