import { Flex, Image, Text } from '@chakra-ui/react';

export function About(): JSX.Element {
  return (
    <Flex direction="column" height="400px" border="1px solid red">
      <Image
        borderRadius="full"
        boxSize="150px"
        src="https://bit.ly/dan-abramov"
        alt="Dan Abramov"
      />
      <Text>Roberto Oliveira</Text>
      <Text>Full-Stack Web Developer</Text>
    </Flex>
  );
}
