import { Flex, Image, Text } from '@chakra-ui/react';
import {
  RiContactsLine,
  RiDashboardLine,
  RiGitMergeLine,
  RiInputMethodLine,
} from 'react-icons/ri';
import { NavLink } from './NavLink';
import { NavSection } from './NavSection';

export function SidebarNav() {
  return (
    <Flex direction="column" align="flex-start">
      <Image
        borderRadius="full"
        boxSize="100px"
        src="https://bit.ly/dan-abramov"
        alt="Dan Abramov"
      />
      <Text fontWeight="bold">Roberto Oliveira</Text>
      <Text>Full-Stack Web Developer</Text>
    </Flex>
    // <Stack spacing="12" align="flex-start">
    //   <NavSection title="GERAL">
    //     <NavLink icon={RiDashboardLine} href="/dashboard">
    //       Dashboard
    //     </NavLink>
    //     <NavLink icon={RiContactsLine} href="/users">
    //       Usuários
    //     </NavLink>
    //   </NavSection>
    //   <NavSection title="AUTOMAÇÃO">
    //     <NavLink icon={RiInputMethodLine} href="/forms">
    //       Formulários
    //     </NavLink>
    //     <NavLink icon={RiGitMergeLine} href="/automation">
    //       Automação
    //     </NavLink>
    //   </NavSection>
    // </Stack>
  );
}
