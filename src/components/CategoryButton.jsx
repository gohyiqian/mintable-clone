import styled from "styled-components";

const BtnContainer = styled.div`
  flex: 1;
  display: flex;
  min-width: 200px;
  justify-content: center;
  cursor: pointer;
  padding: 10px 0;
  margin: 0 10px;
  border: solid 0.5px lightgrey;
  border-radius: 5px;
  font-weight: 500;
`;

const CategoryButton = ({ item }) => {
  return <BtnContainer>{item.name}</BtnContainer>;
};

export default CategoryButton;
