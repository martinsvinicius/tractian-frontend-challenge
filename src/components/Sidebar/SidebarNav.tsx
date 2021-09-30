import { Stack } from '@chakra-ui/react';
import {
  RiBriefcase4Line,
  RiBuilding4Line,
  RiDashboardLine,
  RiSettings5Line,
  RiUser3Line,
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
        <NavLink href="/companies" icon={RiBriefcase4Line}>
          Companies
        </NavLink>
      </NavSection>
    </Stack>
  );
}
