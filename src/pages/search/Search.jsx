import React from "react";
import Cards from "../../components/cards/Cards";

function Search({ searchFilterData}) {
  return (
    <>
      <section>
        <div className="container">
          <div className="cards">
            
            <Cards searchFilterData={searchFilterData} />
          </div>
        </div>
      </section>
    </>
  );
}

export default Search;
