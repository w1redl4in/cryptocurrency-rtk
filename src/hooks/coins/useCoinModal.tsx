import { useCallback, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { closeModal, openModal } from '@store/coins/slice';
import { useGetCoinQuery } from '@services/endpoints';
export const useCoinModal = () => {
  const [coinUuid, setCoinUuid] = useState<string>();

  const dispatch = useDispatch();

  const { coinDetailsModalIsOpen } = useSelector((state: any) => state.coin);

  const handleOpenCoinModal = useCallback(
    (id: string) => {
      setCoinUuid(id);
      dispatch(openModal());
    },
    [dispatch]
  );
  const handleCloseCoinModal = useCallback(() => {
    dispatch(closeModal());
  }, [dispatch]);

  const { isFetching, data } = useGetCoinQuery(coinUuid);

  return {
    coinDetailsModalIsOpen,
    handleOpenCoinModal,
    handleCloseCoinModal,
    coin: {
      isFetching,
      data,
    },
  };
};
