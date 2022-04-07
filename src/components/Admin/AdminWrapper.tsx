import { useEffect } from 'react';
import MyHeader from '../MyHeader';
import Table from '../Table';
// import AdminForm from './AdminForm';
import { useNavigate } from 'react-router-dom';
import AdminForm from './AdminForm';


const AdminWrapper = () => {
  let navigate = useNavigate();
  const isAdmin = !!sessionStorage.getItem('admin')

  useEffect(() => {
    if (isAdmin !== true) {
      alert('Доступ запрещен')
      navigate('/')
    }


  }, [])


  return (
    <>
      <MyHeader adminMode />
      <main>
        <Table adminMode={true} />
        <AdminForm />
      </main>
    </>
  )
}

export default AdminWrapper