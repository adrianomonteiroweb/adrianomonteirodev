interface IProps {
  changeTheme: Function;
}

export default function MenuComponent({ changeTheme }: IProps) {
  return (
    <div className='menu'>
      <h2>languages</h2>
      <button type='button' onClick={() => changeTheme()}>
        Light & Dark Theme
      </button>
    </div>
  );
}
