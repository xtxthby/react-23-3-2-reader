import styled from 'styled-components';
// бібліотека ReactPlayer 
import ReactPlayer from 'react-player';



//  .тут стилі
export const PlayerWrapper = styled.div`
  position: relative;
  padding-top: 56.25%;
`;
// пзіциєнуємо плеєр
export const StyledPlayer = styled(ReactPlayer)`
  position: absolute;
  top: 0;
  left: 0;
`;
