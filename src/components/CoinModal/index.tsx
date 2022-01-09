import { Modal } from '@geist-ui/react';
import { closeModal } from '@store/coins/slice';
import { useDispatch, useSelector } from 'react-redux';

export const CoinModal = () => {
  const { coinDetailsModalIsOpen } = useSelector((state: any) => state.coin);

  const dispatch = useDispatch();

  return (
    <Modal
      visible={coinDetailsModalIsOpen}
      onClose={() => dispatch(closeModal())}
    >
      <Modal.Title>Nome da moeda</Modal.Title>
      <Modal.Subtitle>Info da moeda</Modal.Subtitle>
      <Modal.Content>Informações detalhadas</Modal.Content>
      <Modal.Action>Submit</Modal.Action>
      <Modal.Action passive onClick={() => dispatch(closeModal())}>
        Cancel
      </Modal.Action>
    </Modal>
  );
};
