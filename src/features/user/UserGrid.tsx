import { useSelector, useDispatch } from 'react-redux';
import type { RootState, AppDispatch } from '../../app/store';
import { updateUser } from './userSlice';
import { useState, ChangeEvent } from 'react';

const departments = ['All', 'Engineering', 'HR', 'Sales', 'Marketing'];

const UserGrid = () => {
  const dispatch = useDispatch<AppDispatch>();
  const users = useSelector((state: RootState) => state.user.details);
  const [filter, setFilter] = useState('All');
  const [editId, setEditId] = useState<string | null>(null);
  const [editData, setEditData] = useState<any>({});

  const handleEdit = (user: any) => {
    setEditId(user.id);
    setEditData({ ...user });
  };

  const handleSave = () => {
    dispatch(updateUser(editData));
    setEditId(null);
  };

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setEditData({
      ...editData,
      [e.target.name]: e.target.value,
    });
  };

  const filteredUsers =
    filter === 'All' ? users : users.filter((u) => u.department === filter);

  return (
    <div
      style={{
        background: '#fafafa',
        borderRadius: '12px',
        padding: '20px',
        boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
        width: '95%',
        maxWidth: '900px',
        margin: '20px auto',
      }}
    >
      <h2 style={{ marginBottom: '15px', textAlign: 'center', color: '#333' }}>
        User List
      </h2>

      <div style={{ marginBottom: '15px', textAlign: 'center' }}>
        <label
          style={{
            fontWeight: 'bold',
            marginRight: '10px',
            color: '#444',
          }}
        >
          Filter by Department:
        </label>
        <select
          value={filter}
          onChange={(e) => setFilter(e.target.value)}
          style={{
            padding: '6px 10px',
            borderRadius: '6px',
            border: '1px solid #ccc',
            background: '#f9f9f9',
            fontSize: '14px',
          }}
        >
          {departments.map((dept) => (
            <option key={dept} value={dept}>
              {dept}
            </option>
          ))}
        </select>
      </div>

      {filteredUsers.length === 0 ? (
        <p style={{ textAlign: 'center', color: '#666' }}>No users available.</p>
      ) : (
        <table
          style={{
            width: '100%',
            borderCollapse: 'collapse',
            tableLayout: 'fixed',
          }}
        >
          <thead>
            <tr style={{ background: '#fafafa'}}>
              {['Name', 'Age', 'Phone', 'Address', 'Dept', 'Action'].map(
                (header) => (
                  <th
                    key={header}
                    style={{
                      border: '0px solid #ddd',
                      padding: '10px',
                      textAlign: 'left',
                      fontWeight: 'bold',
                      color: '#333',
                    }}
                  >
                    {header}
                  </th>
                )
              )}
            </tr>
          </thead>

          <tbody>
            {filteredUsers.map((u) => (
              <tr
                key={u.id}
                style={{
                  borderBottom: '1px solid #eee',
                  backgroundColor: editId === u.id ? '#f9f9f9' : 'transparent',
                  transition: 'background 0.2s ease',
                }}
              >
                {editId === u.id ? (
                  <>
                    <td style={{ padding: '8px' }}>
                      <input
                        name="name"
                        value={editData.name}
                        onChange={handleChange}
                        style={{
                          width: '100%',
                          padding: '6px',
                          borderRadius: '4px',
                          border: '1px solid #ccc',
                        }}
                      />
                    </td>
                    <td style={{ padding: '8px' }}>
                      <input
                        name="age"
                        value={editData.age}
                        onChange={handleChange}
                        style={{
                          width: '100%',
                          padding: '6px',
                          borderRadius: '4px',
                          border: '1px solid #ccc',
                        }}
                      />
                    </td>
                    <td style={{ padding: '8px' }}>
                      <input
                        name="phone"
                        value={editData.phone}
                        onChange={handleChange}
                        style={{
                          width: '100%',
                          padding: '6px',
                          borderRadius: '4px',
                          border: '1px solid #ccc',
                        }}
                      />
                    </td>
                    <td style={{ padding: '8px' }}>
                      <input
                        name="address"
                        value={editData.address}
                        onChange={handleChange}
                        style={{
                          width: '100%',
                          padding: '6px',
                          borderRadius: '4px',
                          border: '1px solid #ccc',
                        }}
                      />
                    </td>
                    <td style={{ padding: '8px' }}>
                      <select
                        name="department"
                        value={editData.department}
                        onChange={handleChange}
                        style={{
                          width: '100%',
                          padding: '6px',
                          borderRadius: '4px',
                          border: '1px solid #ccc',
                        }}
                      >
                        {departments.slice(1).map((dept) => (
                          <option key={dept} value={dept}>
                            {dept}
                          </option>
                        ))}
                      </select>
                    </td>
                    <td style={{ padding: '8px', textAlign: 'center' }}>
                      <button
                        onClick={handleSave}
                        style={{
                          background: '#4CAF50',
                          color: '#fff',
                          padding: '6px 12px',
                          border: 'none',
                          borderRadius: '4px',
                          cursor: 'pointer',
                        }}
                      >
                        Save
                      </button>
                    </td>
                  </>
                ) : (
                  <>
                    <td style={{ padding: '8px' }}>{u.name}</td>
                    <td style={{ padding: '8px' }}>{u.age}</td>
                    <td style={{ padding: '8px' }}>{u.phone}</td>
                    <td style={{ padding: '8px' }}>{u.address}</td>
                    <td style={{ padding: '8px' }}>{u.department}</td>
                    <td style={{ padding: '8px', textAlign: 'center' }}>
                      <button
                        onClick={() => handleEdit(u)}
                        style={{
                          background: '#1976d2',
                          color: '#fff',
                          padding: '6px 12px',
                          border: 'none',
                          borderRadius: '4px',
                          cursor: 'pointer',
                        }}
                      >
                        Edit
                      </button>
                    </td>
                  </>
                )}
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default UserGrid;
