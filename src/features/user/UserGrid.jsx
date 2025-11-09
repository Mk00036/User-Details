import { useSelector } from 'react-redux';
// import './User.css';

const UserGrid = () => {
  const users = useSelector((state) => state.user.details);

  return (
    <div className="card">
      <h2>User List</h2>
      {users.length === 0 ? (
        <p>No users added yet.</p>
      ) : (
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Age</th>
              <th>Phone</th>
              <th>Address</th>
            </tr>
          </thead>
          <tbody>
            {users.map((u, i) => (
              <tr key={i}>
                <td>{u.name}</td>
                <td>{u.age}</td>
                <td>{u.phone}</td>
                <td>{u.address}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default UserGrid;
