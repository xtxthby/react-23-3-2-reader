export const Controls = ({ current, total, onChange }) => {
  return (
    <section>
      <button
        type="button"
        // тут блокуємо кнопку коли індекс дорівнює 1, 
        // або поточний елемент бо тут вони про індекс нічого не знають
        disabled={current === 1}
        // .по кліку зменшує
        onClick={() => onChange(-1)}
      >
        Назад
      </button>
      <button
        type="button"
        // тут блокуємо кнопку коли дорівнюує довжині масиву обєктів 
        disabled={current === total}
        // по кліку збільшуе
        onClick={() => onChange(1)}
      >
        Вперед
      </button>
    </section>
  );
};
