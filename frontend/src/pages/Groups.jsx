import Page from "@/components/Page/Page";
import React from "react";
import { useParams } from "react-router-dom";

const Groups = () => {
  const {group} = useParams()
  return <Page>Groups Page Content {group}</Page>;
};

export default Groups;
