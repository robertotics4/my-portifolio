import { HStack, Flex, IconButton, Icon } from '@chakra-ui/react';
import {
  RiGithubFill,
  RiBehanceFill,
  RiLinkedinBoxFill,
  RiInstagramLine,
} from 'react-icons/ri';
import { Logo } from './Logo';

export function Header(): JSX.Element {
  return (
    <Flex
      as="header"
      w="100%"
      maxWidth={1480}
      h="20"
      mx="auto"
      mt="4"
      px="6"
      align="center"
    >
      <Logo />

      <HStack align="center" ml="auto">
        <IconButton
          icon={<Icon as={RiBehanceFill} />}
          aria-label="Open behance"
          fontSize="2xl"
          bg="none"
          _hover={{ bg: 'none', color: 'yellow.400' }}
        />
        <IconButton
          icon={<Icon as={RiGithubFill} />}
          aria-label="Open github"
          fontSize="2xl"
          bg="none"
          _hover={{ bg: 'none', color: 'yellow.400' }}
        />
        <IconButton
          icon={<Icon as={RiLinkedinBoxFill} />}
          aria-label="Open github"
          fontSize="2xl"
          bg="none"
          _hover={{ bg: 'none', color: 'yellow.400' }}
        />
        <IconButton
          icon={<Icon as={RiInstagramLine} />}
          aria-label="Open github"
          fontSize="2xl"
          bg="none"
          _hover={{ bg: 'none', color: 'yellow.400' }}
        />
      </HStack>
    </Flex>
  );
}
