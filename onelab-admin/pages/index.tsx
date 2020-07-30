// import Link from "next/link";
import Layout from "../components/Layout";
import "../style/style.css";
// import { List } from "antd";
import List from "../components/List";
import SearchBar from "../components/SearchBar";
// import { Button } from "antd";

const Props = {
  items: [
    "Racing car sprays burning fuel into crowd.",
    "Japanese princess to wed commoner.",
    "Australian walks 100km after outback crash.",
    "Man charged over missing wedding girl.",
    "Los Angeles battles huge wildfires.",
  ],
};

const IndexPage = () => (
  <Layout>
    <SearchBar />
    <List {...Props} />
  </Layout>
);

export default IndexPage;
