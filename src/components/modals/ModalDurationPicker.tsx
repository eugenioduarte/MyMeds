import { Text, Modal, TouchableOpacity } from "react-native";
import React from "react";

const ModalDurationPicker = ({
  visible,
  closeModal,
}: {
  visible: boolean;
  closeModal: () => void;
}) => {
  return (
    <Modal visible={visible}>
      <TouchableOpacity onPress={closeModal}>
        <Text>Close</Text>
      </TouchableOpacity>
      <Text>ModalDurationPicker</Text>
    </Modal>
  );
};

export default ModalDurationPicker;
