import { Wrap, BtnSelect } from './Dropdown.styled';

export const Dropdown = ({ filterValueSelected }) => {
  const onFilterValueChanged = evt => {
    const value = evt.target.value;
    filterValueSelected(value);
  };

  return (
    <Wrap>
      <BtnSelect name="filter" onChange={onFilterValueChanged}>
        <option value="all">All</option>
        <option value="follow">Follow</option>
        <option value="followings">Followings</option>
      </BtnSelect>
    </Wrap>
  );
};
