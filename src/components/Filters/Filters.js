import styled from 'styled-components';
import { Input } from './Input/Input';
import { Select } from './Select/Select';
import { Button } from './Button/Button';
import './Filters.css';
import { useCallback, useEffect, useState } from 'react';
import { useData } from '../providers';

export function Filters() {
  const [statusOption, setStatusOption] = useState('');
  const [genderOption, setGenderOption] = useState('');
  const [speciesOption, setSpeciesOption] = useState('');

  const [nameInputValue, setNameInputValue] = useState('');
  const [typeInputValue, setTypeInputValue] = useState('');
  const { fetchData } = useData();

  const statusData = ['alive', 'dead', 'unknown'];
  const speciesData = ['human', 'alien', 'humanoid'];
  const genderData = ['female', 'male', 'genderless', 'unknown'];

  const buildUrl = useCallback(() => {
    const urlSearchParams = new URLSearchParams();

    statusOption && urlSearchParams.set('status', statusOption);
    genderOption && urlSearchParams.set('gender', genderOption);
    speciesOption && urlSearchParams.set('species', speciesOption);
    nameInputValue && urlSearchParams.set('name', nameInputValue);
    typeInputValue && urlSearchParams.set('type', typeInputValue);

    return new URL(
      'https://rickandmortyapi.com/api/character' +
        (urlSearchParams.toString() ? `?${urlSearchParams.toString()}` : ``)
    );
  }, [
    genderOption,
    nameInputValue,
    speciesOption,
    statusOption,
    typeInputValue
  ]);

  const resetBtnOnClickHandler = useCallback(() => {
    setStatusOption('');
    setGenderOption('');
    setSpeciesOption('');

    setNameInputValue('');
    setTypeInputValue('');
  }, []);

  const applyBtnOnClickHandler = useCallback(() => {
    const url = buildUrl();
    fetchData(url);
  }, [buildUrl, fetchData]);

  return (
    <GridLayout>
      <Select
        option={statusOption}
        setOption={setStatusOption}
        placeholder="Status"
        data={statusData}
      />
      <Select
        option={genderOption}
        setOption={setGenderOption}
        placeholder="Gender"
        data={speciesData}
      />
      <Select
        option={speciesOption}
        setOption={setSpeciesOption}
        placeholder="Species"
        data={genderData}
      />
      <Input
        value={nameInputValue}
        setValue={setNameInputValue}
        placeholder="Name"
      />
      <Input
        value={typeInputValue}
        setValue={setTypeInputValue}
        placeholder="Type"
      />
      <div className="buttonContainer">
        <Button
          onClick={applyBtnOnClickHandler}
          style={{ width: '48%' }}
          color={'#83BF46'}
          caption={'Apply'}
        />
        <Button
          onClick={resetBtnOnClickHandler}
          style={{ width: '48%' }}
          color={'#FF5152'}
          caption={'Reset'}
        />
      </div>
      <Button
        onClick={applyBtnOnClickHandler}
        className="buttonAction"
        color={'#83BF46'}
        caption={'Apply'}
      />
      <Button
        onClick={resetBtnOnClickHandler}
        className="buttonAction"
        color={'#FF5152'}
        caption={'Reset'}
      />
    </GridLayout>
  );
}

const GridLayout = styled.div`
  display: grid;
  gap: 10px;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  grid-template-rows: 50px 50px;

  @media (max-width: 1519px) {
    width: 100%;
    margin-top: 50px;
    grid-template-columns: 1fr;
    grid-auto-rows: 50px;
  }
  @media (min-width: 1520px) {
    margin-left: 40px;
    margin-top: 0;
  }
`;
