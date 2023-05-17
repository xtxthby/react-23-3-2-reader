// отримуємо список (videos) відео і onSelect з початковим станом selectedVideo: null
export const VideoList = ({ videos, onSelect }) => {
  return (
    <ul>
      {videos.map(video => (
        // тут перебіраємо по айдішнику і при кліку обираємо відео через анонімку {() => onSelect(video.link)}
        // на посилання
        <li key={video.id} onClick={() => onSelect(video.link)}>
          {/* назва відео */}
          {video.link}
        </li>
      ))}
    </ul>
  );
};
