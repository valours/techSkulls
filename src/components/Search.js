import React from "react";
import algoliasearch from "algoliasearch/lite";
import {
  RefinementList,
  InstantSearch,
  SearchBox,
  Hits
} from "react-instantsearch-dom";

const searchClient = algoliasearch(
  "LRUM5OFYMH",
  "6038b337e76d253a9ecbb872fed8eaff"
);
export default () => {
  return (
    <InstantSearch indexName="bestbuy" searchClient={searchClient}>
      <RefinementList attribute="brand" />
      <SearchBox />
      <Hits />
    </InstantSearch>
  );
};
