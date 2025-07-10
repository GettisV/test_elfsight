import styled from 'styled-components';

export function Button(props) {
  const {
    caption = 'Button',
    onClick,
    color = 'green',
    style,
    className
  } = props;

  const ButtonAction = styled.button`
    padding: 0 15px;
    background-color: transparent;
    border: transparent;
    border-radius: 10px;
    outline: 1px solid ${color};
    color: ${color};
    font-size: 16px;
    height: 100%;
    cursor: pointer;

    &:hover {
      background-color: ${color};
      color: white;
    }
  `;

  return (
    <ButtonAction className={className} style={style} onClick={onClick}>
      {caption}
    </ButtonAction>
  );
}
