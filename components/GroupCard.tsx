import { Group } from '../generated/api.schemas';

type GroupCardProps = {
  group: Group;
};

function GroupCard({ group }: GroupCardProps) {
  const { id, name, members, created } = group;

  const memberList = members.map((mem) => (
    <li key={mem.email}>
      {mem.name} / {mem.email}
    </li>
  ));
  return (
    <div>
      <p>name: {name}</p>
      <p>id: {id}</p>
      <ul>{memberList}</ul>
      <p>created: {created} </p>
      <hr />
    </div>
  );
}

export default GroupCard;
