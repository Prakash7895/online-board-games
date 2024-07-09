import Box from '@/components/Theme/Box';
import { Heading, useTheme } from '@gluestack-ui/themed';
import NameConfirmation from '@/components/NameConfirmation';
import Link from '@/components/Theme/Link';

export default function Home() {
  const theme = useTheme();

  console.log(theme);

  return (
    <Box justifyContent='center' alignItems='center' flex={1}>
      <Heading flex={0.15} textAlign='center' w='$full' size='xl'>
        Three Men's Morris
      </Heading>
      <NameConfirmation />
      <Box
        w='$full'
        my='$3'
        style={{
          flex: 0.4,
        }}
        alignItems='center'
        justifyContent='center'
      >
        <Link href='/tikadi'>Play</Link>
      </Box>
    </Box>
  );
}
