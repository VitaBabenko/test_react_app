import { Wrap, BtnSelect } from './Dropdown.styled';

export const Dropdown = () => {
  return (
    <Wrap>
      <label>Select a filter</label>
      <BtnSelect name="filter" id="filter">
        <option value="all">all</option>
        <option value="follow">follow</option>
        <option value="followings">followings</option>
      </BtnSelect>
    </Wrap>
  );
};
