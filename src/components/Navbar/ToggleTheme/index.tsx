import { Toggle, Text, Spacer } from '@geist-ui/react';
import { Moon, Sun } from '@geist-ui/react-icons';
import { changeTheme } from '@store/theme/slices';
import { useDispatch, useSelector } from 'react-redux';

export const ToggleTheme = () => {
  const dispatch = useDispatch();
  const { theme } = useSelector((state: any) => state.theme);
  return (
    <>
      <Toggle onChange={() => dispatch(changeTheme())} />
      <Text style={{ display: 'flex', alignContent: 'center' }}>
        {theme} mode
        <Spacer h={1} />
        {theme === 'dark' ? <Moon /> : <Sun />}
      </Text>
    </>
  );
};
