import { Flex } from '@chakra-ui/react';
import type { NextPage } from 'next';
import { About } from '../components/About';
import { Header } from '../components/Header';
import { Sidebar } from '../components/Sidebar';

const Home: NextPage = () => {
  return (
    <Flex direction="column" h="100vh" border="1px solid red">
      <Sidebar />
    </Flex>
  );
};

export default Home;
