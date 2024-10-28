import './Title.scss';

export function Title(props: { children: string }) {
  return (
    <div className="title">
      <div className="title__text">{props.children}</div>
    </div>
  );
}
