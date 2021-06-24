import styled from 'styled-components/native';
import { theme } from '../../global/styles/theme';

export const Container = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
  background-color: ${theme.colors.secondary90};
`;

export const Content = styled.View`
  margin-top: -40px;
  padding: 0 50px;
`;

export const Cover = styled.Image.attrs({
  source: require('../../assets/illustration.png'),
  resizeMode: 'stretch'
})`
  width: 100%;
  height: 360px;
`;

export const Title = styled.Text`
  color: ${theme.colors.heading};
  text-align: center;
  font-size: 40;
  margin-bottom: 16px;
`;

export const SubTitle = styled(Title)`
  font-size: 15px;
  margin-bottom: 64px;
`;

export const Input = styled.TextInput`
  width: 100%;
`;
