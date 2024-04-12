import { IoSearch } from "react-icons/io5";
import { Input } from "antd";
import React from "react";
const Search = () => (
  <>
    <Input size="large" placeholder="large size" className="search_input" prefix={<IoSearch />} />
  </>
);
export default Search;
