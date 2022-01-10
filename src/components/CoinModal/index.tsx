import { Loading, Modal } from '@geist-ui/react';
import { useCoinModal } from '@hooks/coins/useCoinModal';
export const CoinModal = () => {
  const { coinDetailsModalIsOpen, handleCloseCoinModal, coin } = useCoinModal();

  const { isFetching, data } = coin;

  console.log('coin', isFetching, data);

  return (
    <Modal visible={coinDetailsModalIsOpen} onClose={handleCloseCoinModal}>
      {isFetching ? (
        <Loading />
      ) : (
        <>
          <Modal.Title>Nome da moeda</Modal.Title>
          <Modal.Subtitle>Info da moeda</Modal.Subtitle>
          <Modal.Content>Informações detalhadas</Modal.Content>
          <Modal.Action>Submit</Modal.Action>
          <Modal.Action passive onClick={handleCloseCoinModal}>
            Cancel
          </Modal.Action>
        </>
      )}
    </Modal>
  );
};
