import {
  Modal,
  Image,
  Spacer,
  Description,
  Text,
  Badge,
} from '@geist-ui/react';
import { useCoinModal } from '@hooks/coins/useCoinModal';
export const CoinModal = () => {
  const { coinDetailsModalIsOpen, handleCloseCoinModal, savedCoin } =
    useCoinModal();

  return (
    <Modal visible={coinDetailsModalIsOpen} onClose={handleCloseCoinModal}>
      <Modal.Title>
        <Image width={5} src={savedCoin?.iconUrl} alt="coin image" />
      </Modal.Title>
      <Spacer w={1} />
      <Modal.Subtitle>{savedCoin?.name}</Modal.Subtitle>
      <Modal.Content>
        <Description
          title="color"
          content={<Badge style={{ backgroundColor: savedCoin?.color }} />}
        />
        <Spacer h={1} />
        <Description title="BTC Price" content={savedCoin?.btcPrice} />
        <Spacer h={1} />
        <Description
          title="Low Volume"
          content={savedCoin?.lowVolume ? 'YES' : 'NO'}
        />
        <Spacer h={1} />
        <Description title="Market Cap" content={savedCoin?.marketCap} />
        <Spacer h={1} />
        <Description
          title="change"
          content={
            String(savedCoin?.change).includes('-') ? (
              <Text b type="error">
                {savedCoin?.change}
              </Text>
            ) : (
              <Text b type="success">
                {savedCoin?.change}
              </Text>
            )
          }
        />
        <Spacer h={1} />
        <Description title="24h Volume" content={savedCoin['24hVolume']} />
      </Modal.Content>
      <Modal.Action passive onClick={handleCloseCoinModal}>
        Close
      </Modal.Action>
    </Modal>
  );
};
