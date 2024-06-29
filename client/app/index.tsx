import { Box, Text, useTheme } from '@gluestack-ui/themed';

export default function Home() {
  const theme = useTheme();

  console.log(theme);
  return (
    <Box
      borderWidth={2}
      $light-bgColor='$rose600'
      $dark-bgColor='$indigo400'
      flex={1}
      justifyContent='center'
      alignItems='center'
    >
      <Text>HOME</Text>
    </Box>
  );
}
