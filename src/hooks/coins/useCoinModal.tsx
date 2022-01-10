import { useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { closeModal, handleSaveModalCoin } from '@store/coins/slice';
import { useGetCryptoQuery } from '@services/endpoints';
import { AppState } from '@store/index';
export const useCoinModal = () => {
  const dispatch = useDispatch();

  const { coinDetailsModalIsOpen, coin: savedCoin } = useSelector(
    (state: AppState) => state.coin
  );

  const { data } = useGetCryptoQuery('');

  const fetchedData = data?.data;

  const handleOpenCoinModal = useCallback(
    (id: string) => {
      dispatch(
        handleSaveModalCoin({ coinUuid: id, coins: fetchedData?.coins })
      );
    },
    [dispatch, fetchedData?.coins]
  );
  const handleCloseCoinModal = useCallback(() => {
    dispatch(closeModal());
  }, [dispatch]);

  return {
    coinDetailsModalIsOpen,
    handleOpenCoinModal,
    handleCloseCoinModal,
    savedCoin,
  };
};
