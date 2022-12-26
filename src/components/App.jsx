import { Section } from './Section/Section';
import { FollowersList } from './FollowersList/FollowersList';
import users from '../data/users.json';
export const App = () => {
  return (
    <Section>
      <FollowersList users={users} />
    </Section>
  );
};
