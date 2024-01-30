import {
  Avatar,
  Box,
  ButtonBase,
  Card,
  Grid,
  InputAdornment,
  OutlinedInput,
  Popper,
  TextField,
} from '@mui/material';
import PopupState, { bindPopper, bindToggle } from 'material-ui-popup-state';
import { useTheme, styled } from '@mui/material/styles';
import { shouldForwardProp } from '@mui/system';
import SearchIcon from '@mui/icons-material/Search';
import { useState } from 'react';

const HeaderAvatarStyle = styled(Avatar, { shouldForwardProp })(
  ({ theme }) => ({
    // ...theme.typography.commonAvatar,
    // ...theme.typography.mediumAvatar,
    background: theme.palette.secondary.light,
    color: theme.palette.secondary.dark,
    '&:hover': {
      background: theme.palette.secondary.dark,
      color: theme.palette.secondary.light,
    },
  }),
);

const SearchSection = () => {
  const theme = useTheme();

  const [value, setValue] = useState('');
  return (
    <>
      <Box >
        
      </Box>
    </>
  );
};

export default SearchSection;
