import ActionButtons from '../components/ActionButtons';
import StudenthtmlForm from '../components/Form';
import Search from '../components/Search';
import TableSV from '../components/StudentTable';
import { dssvTest } from '../data';
import { useState } from 'react';
import './App.css';

function App() {
  const [students, setStudents] = useState(dssvTest);
  const [selectedStudent, setSelectedStudent] = useState({
    maSV: '',
    TenSV: '',
    NgaySinh: '',
    GioiTinh: '',
    MaKhoa: '',
  });

  //Ham xu ly them sinh vien
  const handleAddStudent = () => {
    if (Object.values(selectedStudent).some(value => !value)) {
      alert('Vui lòng nhập đủ Mã SV, Tên SV, và Khoa.');
      return;
    }

    setStudents(prevStudents => [...prevStudents, selectedStudent]);
    setSelectedStudent({
      maSV: '',
      TenSV: '',
      NgaySinh: '',
      GioiTinh: '',
      MaKhoa: '',
    });
  };

  //ham xu ly cap nhat sinh vien
  const handleUpdate = () => {
    setStudents(
      students.map(student =>
        student.maSV === selectedStudent.maSV ? selectedStudent : student
      )
    );
    setSelectedStudent({
      maSV: '',
      TenSV: '',
      NgaySinh: '',
      GioiTinh: '',
      MaKhoa: '',
    });
  };

  // Ham xu ly chuc nang tim kiem
  const handleSearch = searchValue => {
    const filteredStudents = dssvTest.filter(student => {
      return (
        student.maSV.toLowerCase().includes(searchValue.toLowerCase()) ||
        student.TenSV.toLowerCase().includes(searchValue.toLowerCase()) ||
        student.MaKhoa.toLowerCase().includes(searchValue.toLowerCase())
      );
    });
    setStudents(filteredStudents);
  };

  //khi bam vao button thi them masv vao mang
  const [selectedDelete, setSelectedDelete] = useState([]);

  //Sau khi co mang thi xu ly event xoa data theo mang
  function addSelectedDelete(idSV) {
    const find = !selectedDelete.find(sv => sv === idSV);
    if (find) {
      setSelectedDelete([...selectedDelete, idSV]);
    } else {
      setSelectedDelete(selectedDelete.filter(maSV => maSV !== idSV));
    }
  }

  //Ham xoa nhieu sinh vien da chon
  const deleteSelected = () => {
    setStudents(students.filter(dssv => !selectedDelete.includes(dssv.maSV)));
  };

  return (
    <div>
      <h1 className='header'>Danh sách sinh viên</h1>
      <Search onSearch={handleSearch} />
      <br />
      <hr />
      <TableSV
        handleCheckbox={addSelectedDelete}
        students={students}
        setStudents={setStudents}
        setSelectedStudent={setSelectedStudent}
        selectedStudent={selectedStudent}
        checkSV={selectedDelete}
      />
      <hr />
      <ActionButtons
        handleAddStudent={handleAddStudent}
        editStudent={handleUpdate}
        deleteSelected={deleteSelected}
      />
      <StudenthtmlForm
        selectedStudent={selectedStudent}
        setSelectedStudent={setSelectedStudent}
      />
    </div>
  );
}

export default App;
