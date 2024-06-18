const ActionButtons = (props) => {
  const { handleAddStudent, editStudent, deleteSelected } = props;

  return (
    <div className="action-button-group">
      <button className="action-button" onClick={handleAddStudent}>
        Thêm mới
      </button>
      <button className="action-button" onClick={editStudent}>
        Cập nhật
      </button>
      <button className="action-button" onClick={deleteSelected}>
        Xóa
      </button>
    </div>
  );
};

export default ActionButtons;
