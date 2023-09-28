import {  Modal } from 'antd';

const AddLavelModal = ({setIsLevelModalOpen,isLevelModalOpen }) => {

      const handleOk = () => {
        setIsLevelModalOpen(false);
      };
      const handleCancel = () => {
        setIsLevelModalOpen(false);
      };
  
      return (
          <div>
            <Modal title="Add Level" open={isLevelModalOpen} onOk={handleOk} onCancel={handleCancel}>
            <p>Some contents...</p>
            <p>Some contents...</p>
            <p>Some contents...</p>
            </Modal>
          </div>
      );
};

export default AddLavelModal;