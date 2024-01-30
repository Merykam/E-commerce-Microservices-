import { Box } from '@mui/material';
import Image from 'next/image';
const LogoSection = () => {
  return (
    <Box
      component="span"
      sx={{ display: { xs: 'none', md: 'block' }, flexGrow: 1 }}
    >
      <Image
        src="https://www.dynamicmarketing.eu/wp-content/uploads/2018/06/ecommerce.logo_.png"
        alt="Picture of the author"
        width={100}
        height={100}
      />
    </Box>
  );
};

export default LogoSection;
