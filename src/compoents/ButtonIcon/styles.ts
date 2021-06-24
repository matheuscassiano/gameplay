import styled from 'styled-components/native';
import { theme } from '../../global/styles/theme';

export const Container = styled.TouchableOpacity.attrs({
    activeOpacity: 0.7
})`
  width: 100%;
  height: 65px;
  flex-direction: row;
  align-items: center;
  border-radius: 8px;
  background-color: ${theme.colors.primary};
`;

export const IconWrapper = styled.View`
  width: 56px;
  height: 56px;
  align-items: center;
  justify-content: center;
  border-right-width: 1px;
  border-color: ${theme.colors.line};
`;

export const Icon = styled.Image.attrs({
    source: require('../../assets/discord.png'),
    resizeMode: 'contain'
})`
 width: 24px;
 height: 18px;
`;

export const Title = styled.Text`
  flex: 1;
  font-size: 15px;
  align-items: center;
  justify-content: center;
  text-align: center;
  color: ${theme.colors.heading};
`;
