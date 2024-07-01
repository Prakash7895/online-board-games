import Box from '@/components/Theme/Box';
import Tikadi from '@/components/Tikadi';
import { useTheme } from '@gluestack-ui/themed';

export default function Home() {
  const theme = useTheme();

  console.log(theme);

  return (
    <Box justifyContent='center' alignItems='center' flex={1}>
      <Tikadi />
    </Box>
  );
}
