import styled from "styled-components";
import { dummyCategory } from "../dummyData";
import CategoryButton from "./CategoryButton";
import { mobile } from "../responsiveMobile";

const Container = styled.div`
  display: flex;
  padding: 1.25rem;
  flex-wrap: wrap;
  justify-content: space-evenly;
  ${mobile({ padding: "0px", flexDirection: "column" })}
`;

const Categories = () => {
  return (
    <Container className="p-4">
      {dummyCategory.map((item) => (
        <CategoryButton item={item} key={item.id} />
      ))}
    </Container>
  );
};

export default Categories;
