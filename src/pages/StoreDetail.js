import styled from "@emotion/styled";
import { Container, Divider } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import { useParams } from "react-router-dom";
import MenuDetails from "../components/Store/MenuDetails";
import MenuNav from "../components/Store/MenuNav";
const Image = styled.img`
  border-radius: 15px;
`;
export default function StoreDetail(props) {
  const params = useParams();
  const currentStore = props.rs.find((item) => item.id === params.storeId);
  if (!currentStore) {
    return <p>No restaurant found</p>;
  }
  return (
    <Container maxWidth="md">
      <Image src={currentStore.headerImg}></Image>
      <Divider></Divider>
      <MenuNav></MenuNav>
      <MenuDetails menu={currentStore.menu}></MenuDetails>
    </Container>
  );
}
