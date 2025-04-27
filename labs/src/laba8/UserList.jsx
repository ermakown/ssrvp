import { useEffect, useState } from 'react';
import { getUsers, deleteUser, blockUser } from 'D:/React/ssrvp/labs/src/laba6/api.js';
import UserTable from 'D:/React/ssrvp/labs/src/laba8/UserTable.jsx';
import { Box, Typography } from '@mui/material';

export default function UserList() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    refreshUsers();
  }, []);

  const refreshUsers = async () => {
    const data = await getUsers();
    setUsers(data);
  };

  const handleDelete = async (id) => {
    await deleteUser(id);
    refreshUsers();
  };

  const handleBlock = async (id, blocked) => {
    await blockUser(id, blocked);
    refreshUsers();
  };

  return (
    <Box sx={{ p: 3 }}>
      <Typography variant="h4" gutterBottom>Список пользователей</Typography>
      <UserTable users={users} onDelete={handleDelete} onBlock={handleBlock} />
    </Box>
  );
}
