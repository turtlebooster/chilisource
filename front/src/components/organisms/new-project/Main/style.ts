import styled from 'styled-components';
import tw from 'twin.macro';

export const StyledContainer = styled.div`
  ${tw`w-8/12 h-full flex flex-col justify-center m-auto`}
  max-width: 2000px;
`;

export const StyledFlex = styled.div`
  ${tw`flex justify-center w-full h-full mt-12`}
  max-height: 1000px;
`;
