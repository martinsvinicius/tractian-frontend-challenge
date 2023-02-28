import { Stack } from '@chakra-ui/react';
import {
  RiBuilding4Line,
  RiDashboardLine,
  RiSettings5Line,
  RiUser3Line,
  RiCheckLine
} from 'react-icons/ri';
import { NavLink } from './NavLink';
import { NavSection } from './NavSection';

export function SidebarNav() {
  return (
    <Stack spacing="12" align="flex-start">
      <NavSection title="Navigation">
        <NavLink href="/" icon={RiDashboardLine}>
          Dashboard
        </NavLink>
        <NavLink href="/assets" icon={RiSettings5Line}>
          Assets
        </NavLink>
        <NavLink href="/units" icon={RiBuilding4Line}>
          Units
        </NavLink>
        <NavLink href="/users" icon={RiUser3Line}>
          Users
        </NavLink>
        <NavLink href="/workorders" icon={RiCheckLine}>
          Orders
        </NavLink>
      </NavSection>
    </Stack>
  );
}
