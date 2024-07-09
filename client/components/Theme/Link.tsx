import React, { FC } from 'react';
import { Link as RLink } from 'expo-router';
import { LinkProps } from 'expo-router/build/link/Link';
import { Colors } from '@/utils/Color';
import { LinearGradient } from 'expo-linear-gradient';
import { StyleSheet } from 'react-native';
import { Heading } from '@gluestack-ui/themed';

const borderRadius = 5;

const Link: FC<LinkProps> = (props) => {
  return (
    <RLink
      {...props}
      style={{
        backgroundColor: '#FAB914',
        borderRadius,
      }}
    >
      <LinearGradient
        colors={['rgba(255, 255, 255, 0.25)', 'transparent']}
        start={{ x: 0, y: 0.3 }}
        locations={[0.35, 0.35]}
        end={{ x: 1, y: 1 }}
        style={[styles.gradient]}
      >
        <LinearGradient
          colors={['rgba(255, 255, 255, 0.1)', 'transparent']}
          start={{ x: 0, y: 0 }}
          end={{ x: 1, y: 1 }}
          style={styles.gradient}
        >
          <Heading
            size='md'
            fontWeight='$medium'
            $dark-color={Colors.light.text}
            $light-color={Colors.light.text}
            style={{
              paddingHorizontal: 15,
              paddingVertical: 10,
              borderRadius,
            }}
          >
            {props.children}
          </Heading>
        </LinearGradient>
      </LinearGradient>
    </RLink>
  );
};

export default Link;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  gradient: {
    flex: 1,
    borderRadius,
  },
});
