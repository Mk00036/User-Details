import { useState, ChangeEvent, FormEvent } from 'react';
import { useDispatch } from 'react-redux';
import { addUser } from './userSlice';
import type { AppDispatch } from '../../app/store';
import { v4 as uuidv4 } from 'uuid';

const departments = ['Engineering', 'HR', 'Sales', 'Marketing'];

const UserForm = () => {
  const dispatch = useDispatch<AppDispatch>();
  const [formData, setFormData] = useState({
    name: '',
    age: '',
    phone: '',
    address: '',
    department: departments[0],
  });

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    dispatch(addUser({ ...formData, id: uuidv4() }));
    setFormData({ name: '', age: '', phone: '', address: '', department: departments[0] });
  };

  return (
    <form className="card" onSubmit={handleSubmit}>
      <h2>Add User</h2>

      <div className="form-group">
        <label>Name</label>
        <input name="name" value={formData.name} onChange={handleChange} required />
      </div>

      <div className="form-group">
        <label>Age</label>
        <input name="age" value={formData.age} onChange={handleChange} required />
      </div>

      <div className="form-group">
        <label>Phone</label>
        <input name="phone" value={formData.phone} onChange={handleChange} required />
      </div>

      <div className="form-group">
        <label>Address</label>
        <input name="address" value={formData.address} onChange={handleChange} required />
      </div>

      <div className="form-group">
        <label>Department</label>
        <select name="department" value={formData.department} onChange={handleChange}
         style={{
      width: '100%',
      padding: '8px 10px',
      borderRadius: '6px',
      border: '1px solid #ccc',
      fontSize: '14px',
      backgroundColor: '#f9f9f9',
      outline: 'none',
      transition: 'border-color 0.2s ease',
    }}
    onFocus={(e) => (e.target.style.borderColor = '#1976d2')}
    onBlur={(e) => (e.target.style.borderColor = '#ccc')}>
          {departments.map((dept) => (
            <option key={dept} value={dept}>{dept}</option>
          ))}
        </select>
      </div>

      <button type="submit" className="btn">Add User</button>
    </form>
  );
};

export default UserForm;
