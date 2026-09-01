import { useState } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import './App.css'
import DataSiswa from './components/DataSiswa'
import FormSiswa from './components/FormSiswa'
import Login from './pages/login'
import Dashboard from './pages/Dashboard'
import User from './pages/User'
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'

function counter(){
}

function App() {
  // const [count, setCount] = useState(0);

  // const tambah = () => setCount(count + 1);
  // const kurang = () => setCount(count - 1);
  // const reset = () => setCount(0);

  // const [students, setStudents] = useState([
  //   {id: 1, name: "Prasetyo", age: 23, major:"JWP", address:"Jaksel"},
  //   {id: 2, name: "Franz", age: 34, major:"Designer", address:"Cilincing"}
  // ]);

  // console.log(students)

  // const handleTambahSiswa = (newStudent) => {
  //   setStudents([newStudent, ...students]);
  // }

  // return (
  //   <>
  //     <button onClick={tambah}> + Tambah </button>
  //     {count}
  //     <button onClick={kurang}> - Kurang </button>
  //     <button onClick={reset}> - Reset </button>

  //     <div className="container">
  //       <header>
  //         <h1>Data Siswa PPKD Jakarta Pusat</h1>
  //       </header>
  //       <FormSiswa tambahSiswa = {handleTambahSiswa}/>
  //       <section className="student-list">
  //         <div className="student-grid">
  //           {students.map((student) => (
  //               <DataSiswa key={student.id} name={student.name} age={student.age} major={student.major} address={student.address}/>
  //           ))}
  //         </div>
  //       </section>
  //     </div>
  //   </>
  // )
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Login />} />
        <Route path='/dashboard' element={<Dashboard/>} />
        <Route path='/user' element={<User/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App
