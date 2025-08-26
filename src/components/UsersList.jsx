import UserCard from "./UserCard";

export default function UsersList({ users }) {
  if (users.length === 0) {
    return (
      <p className="text-gray-500 text-sm italic">
        No users found for this filter.
      </p>
    );
  }

  return (
    <div className="space-y-4">
      {users.map((user) => (
        <UserCard key={user.id} user={user} />
      ))}
    </div>
  );
}
