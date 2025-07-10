import { useCallback, useEffect, useState } from 'react';
import caretImg from '../../../assets/caret.png';
import styled from 'styled-components';

export function Select(props) {
  const [focus, setFocus] = useState(false);
  const { placeholder, data, option, setOption } = props;

  const focusOnClickHandler = useCallback((e) => {
    e.stopPropagation();
    setFocus((state) => !state);
  }, []);

  const selectOptionOnClickHandler = useCallback(
    (e) => {
      e.stopPropagation();
      const valueOption = e.target.textContent;

      setOption(valueOption);
      setFocus(false);
    },
    [setOption]
  );

  const SelectFilter = styled.div`
    display: flex;
    align-items: center;
    width: 100%;
    height: 100%;
    justify-content: space-between;
    padding: 0 15px;
    background-color: #263750;
    border: transparent;
    border-radius: 10px;
    outline: 1px solid #83bf46;
    color: rgba(255, 255, 255, 1);
    font-size: 16px;
    text-overflow: ellipsis;
    ${focus ? 'background-color: #001832;' : ''}
  `;

  const ImageIconCaret = styled.img`
    width: 16px;
    height: 16px;
    filter: invert(1);
    opacity: 0.5;
    transform: rotate(${focus ? '180deg' : '0'});
  `;

  const SelectFilterDropdown = styled.div`
    position: absolute;
    display: ${focus ? 'flex' : 'none'};
    flex-direction: column;
    color: black;
    background: white;
    border-radius: 10px;
    width: 100%;
    height: auto;
    top: 60px;
    left: 0;
    overflow: hidden;
    z-index: 9999;
  `;
  const SelectFilterOptionDropdown = styled.div`
    display: flex;
    justify-content: start;
    align-items: center;
    width: 100%;
    height: 40px;
    padding: 5px 10px;
    cursor: pointer;
    white-space: nowrap;

    &:hover {
      background-color: #e6f2da;
    }
  `;
  const DisplayName = styled.span`
    white-space: nowrap;
    color: ${focus || option ? 'white' : '#757575'};
  `;

  // useEffect(() => {
  //   const outsideOnClickHandler = () => {
  //     setFocus(false);
  //   };

  //   document.body.addEventListener('click', outsideOnClickHandler);

  //   return () =>
  //     document.body.removeEventListener('click', outsideOnClickHandler);
  // }, [setFocus]);

  return (
    <div
      style={{ position: 'relative', width: '100%', height: '100%' }}
      onClick={focusOnClickHandler}
    >
      <SelectFilter>
        <DisplayName>{option ? option : placeholder}</DisplayName>
        <SelectFilterDropdown>
          {data
            ? data.map((item) => (
                <SelectFilterOptionDropdown
                  key={item}
                  onClick={selectOptionOnClickHandler}
                >
                  {item}
                </SelectFilterOptionDropdown>
              ))
            : 'ничего не найдено'}
        </SelectFilterDropdown>
        <ImageIconCaret alt="caret" src={caretImg} />
      </SelectFilter>
    </div>
  );
}
