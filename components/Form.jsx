const StudenthtmlForm = (props) => {
  const { setSelectedStudent, selectedStudent } = props;

  return (
    <form className="form-group">
      <table className="form-group-input">
        <tbody>
          <tr>
            <th>
              <label htmlFor="txtMaSV">
                Mã SV <span className="red-note">*</span>
              </label>
            </th>
            <td>
              <input
                type="text"
                id="txtMaSV"
                name="txtMaSV"
                required
                value={selectedStudent.maSV}
                onChange={(event) => {
                  setSelectedStudent({
                    ...selectedStudent,
                    maSV: event.target.value,
                  });
                }}
              />
            </td>
          </tr>

          <tr>
            <th>
              <label htmlFor="txtTenSV">
                Tên sinh viên <span className="red-note">*</span>
              </label>
            </th>
            <td>
              <input
                type="text"
                id="txtTenSV"
                name="txtTenSV"
                required
                value={selectedStudent.TenSV}
                onChange={(event) => {
                  setSelectedStudent({
                    ...selectedStudent,
                    TenSV: event.target.value,
                  });
                }}
              />
            </td>
          </tr>

          <tr>
            <th>
              <label htmlFor="txtNgaySinh">Ngày sinh</label>
            </th>
            <td>
              <input
                className="date-input"
                type="date"
                id="txtNgaySinh"
                name="txtNgaySinh"
                value={selectedStudent.NgaySinh}
                onChange={(event) => {
                  setSelectedStudent({
                    ...selectedStudent,
                    NgaySinh: event.target.value,
                  });
                }}
              />
              <br />
            </td>
          </tr>

          <tr>
            <th>
              <label>Giới tính</label>
            </th>

            <td>
              <input
                className="gender-input"
                type="radio"
                id="rdbGioiTinhNam"
                name="rdbGioiTinh"
                value="Nam"
                checked={selectedStudent.GioiTinh === "Nam"}
                onChange={(event) => {
                  setSelectedStudent({
                    ...selectedStudent,
                    GioiTinh: event.target.value,
                  });
                }}
              />
              <label htmlFor="rdbGioiTinhNam">Nam</label>
              <input
                type="radio"
                id="rdbGioiTinhNu"
                name="rdbGioiTinh"
                value="Nữ"
                checked={selectedStudent.GioiTinh === "Nữ"}
                onChange={(event) => {
                  setSelectedStudent({
                    ...selectedStudent,
                    GioiTinh: event.target.value,
                  });
                }}
              />
              <label htmlFor="rdbGioiTinhNu">Nữ</label>
              <br />
            </td>
          </tr>

          <tr>
            <th>
              <label htmlFor="drpKhoa">
                Khoa <span className="red-note">*</span>
              </label>
            </th>
            <td>
              <select
                id="drpKhoa"
                name="drpKhoa"
                required
                value={selectedStudent.MaKhoa}
                onChange={(event) => {
                  setSelectedStudent({
                    ...selectedStudent,
                    MaKhoa: event.target.value,
                  });
                }}
              >
                <option defaultValue="Công nghệ thông tin">
                  Công nghệ thông tin
                </option>
                <option defaultValue="Kinh tế">Kinh tế</option>
                <option defaultValue="Ngoại ngữ">Ngoại ngữ</option>
              </select>
            </td>
          </tr>
        </tbody>
      </table>
    </form>
  );
};

export default StudenthtmlForm;
