function TableSV(props) {
  const {
    students,
    selectedStudent,
    setStudents,
    setSelectedStudent,
    handleCheckbox,
    checkSV,
  } = props;
  //Sua sinh vien
  const handleEdit = (maSV) => {
    setStudents(
      students.map((student) =>
        student.maSV === selectedStudent.maSV ? selectedStudent : student
      )
    );
    const student = students.find((student) => student.maSV === maSV);
    setSelectedStudent(student);
  };
  //xoa sinh vien
  const handleDelete = (maSV) => {
    setStudents(students.filter((student) => student.maSV !== maSV));
  };

  const checkedSV = (maSV) => {
    return checkSV.find((msv) => msv === maSV);
  };

  return (
    <div>
      <table className="timkiem">
        <tbody className="table1">
          <tr>
            <th>Chọn</th>
            <th>Mã SV</th>
            <th>Tên SV</th>
            <th>Ngày sinh</th>
            <th>Giới tính</th>
            <th>Mã khoa</th>
            <th>Hành Động</th>
          </tr>
          {students.map((sv, id) => {
            return (
              <tr key={id}>
                <td>
                  <button
                    className={`button3 ${checkedSV(sv.maSV) ? "checked" : ""}`}
                    onClick={() => {
                      handleCheckbox(sv.maSV);
                    }}
                  ></button>
                </td>
                <td>{sv.maSV}</td>
                <td>{sv.TenSV}</td>
                <td>{sv.NgaySinh}</td>
                <td>{sv.GioiTinh}</td>
                <td>{sv.MaKhoa}</td>
                <td>
                  <button onClick={() => handleEdit(sv.maSV)}>Chỉnh sửa</button>
                  <button onClick={() => handleDelete(sv.maSV)}>Xóa</button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}

export default TableSV;
