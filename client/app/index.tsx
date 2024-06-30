import Box from '@/components/Theme/Box';
import Text from '@/components/Theme/Text';
import { useTheme } from '@gluestack-ui/themed';

export default function Home() {
  const theme = useTheme();

  console.log(theme);
  return (
    <Box flex={1} justifyContent='center' alignItems='center'>
      <Text>HOME</Text>
    </Box>
  );
}
