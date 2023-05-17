import { Component } from 'react';
import { Controls } from './Controls';
import { Progress } from './Progress';
import { Publication } from './Publication';
// константа для локал сторадж
const LS_KEY = 'reader_item_index';

export class Reader extends Component {
  // початковий індекс
  state = {
    index: 0,
  };
  // загальний метод для кнопок на додавання і віднімання
  //  також рахує + (-1)
  changeIndex = value => {
    this.setState(state => ({ index: state.index + value }));
  };
  //  .коли компонент монтується в локал сторадже nall  
  componentDidMount() {
    const savedState = localStorage.getItem(LS_KEY);
    // якщо savedState є то тоді ми виводимо індекс локал стораджа
    // людина заходить і попада на ту публікацію на якій закінчила читати
    if (savedState) {
      this.setState({ index: Number(savedState) });
    }
  }
  //  перевіряємо, якщо індекс змінився тобіш prevState (попередній) змінився на новий
  // тоді записуємо в локал сторадж. Перший параметр нам не потрібен(prevProp) -тому
  // ставимо нижній пробіл
  componentDidUpdate(_, prevState) {
    if (prevState.index !== this.state.index) {
      localStorage.setItem(LS_KEY, this.state.index);
    }
  }

  render() {
    const { index } = this.state;
    const { items } = this.props;
    // довжина обєкту
    const totalItems = items.length;
    // тут активний обєкт по індексу
    const currentItem = items[index];

    return (
      <div>
        <Controls
          current={index + 1}
          total={totalItems}
          onChange={this.changeIndex}
        />
        {/* тут передамо початковий індекс і загальну кількість обєктів */}
        <Progress current={index + 1} total={totalItems} />
        {/* передаємо тут активний обєкт по індексу*/}
        <Publication item={currentItem} />
      </div>
    );
  }
}
