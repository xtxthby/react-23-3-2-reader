import { Component } from 'react';
import { PlayerWrapper, StyledPlayer } from './Player.styled';

export class Player extends Component {
  // в стейті відео завантажилося чи ні
  state = {
    // початкове ні
    isVideoLoaded: false,
  };
  // компонент оновився
  componentDidUpdate(prevProps) {
    // тобіш якщо з попереднього стейта url !== поточному url
    // то тільки тоді завантажуємо  {showLoader && <h2>Загружаем видео...</h2>}
    if (prevProps.url !== this.props.url) {
      // setState треба завжди перевіряти бо зациклимо на бескінечність
      this.setState({ isVideoLoaded: false });
    }
  }

  render() {
    const { isVideoLoaded } = this.state;
    const { url } = this.props;
    // якщо не завантажилося відео
    const showLoader = url && !isVideoLoaded;
    // це для того щоб плеєр не дьоргався
    // якщо не загрузився то розмір 0, якщо загрузився розмір 100% плеєра
    const playerSize = isVideoLoaded ? '100%' : 0;

    return (
      <>
        {/* якщо не завантажилося відео */}
        {showLoader && <h2>Загружаем видео...</h2>}
        {/* якщо в стейті не нал то плеєр рендериться */}
        {url && ( 
          // обгортка з стилями
          <PlayerWrapper>
            <StyledPlayer
              // тут передали {url}
              url={url}
              width={playerSize}
              height={playerSize}
              // onReady проп який готов до праці тобіш відео завантажилося
              onReady={() => this.setState({ isVideoLoaded: true })}
              // це пропс щоб показати контроль(це управління плеєром)
              controls
            />
          </PlayerWrapper>
        )}
      </>
    );
  }
}
