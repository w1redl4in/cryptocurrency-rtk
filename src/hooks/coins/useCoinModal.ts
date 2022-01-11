import { useCallback } from 'react';
import { useSelector } from 'react-redux';
import { closeModal, handleSaveModalCoin } from '@store/coins/slice';
import { RootState, useAppDispatch } from '@store/index';
import { useGetCoinsQuery } from '@services/apis/coinranking/endpoints/coins';
export const useCoinModal = () => {
  const dispatch = useAppDispatch();

  const { coinDetailsModalIsOpen, coin: savedCoin } = useSelector(
    (state: RootState) => state.coin
  );

  const { data } = useGetCoinsQuery();

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
