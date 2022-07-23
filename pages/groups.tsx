import { CircularProgress } from '@mui/material';
import GroupCard from '../components/GroupCard';
import { useListGroups } from '../generated/groups/groups';

function Groups() {
  const { data, error } = useListGroups();

  if (error) return <div>failed to load</div>;
  if (!data) return <CircularProgress />;

  console.log(data);

  const groupCards = data.data.groups.map((grp) => (
    <GroupCard key={grp.id} group={grp} />
  ));

  return (
    <div>
      <h1>Groups:</h1>
      {groupCards}
    </div>
  );
}

export default Groups;
