import React from "react";
import Header from "./Header";
import MainContainer from "./MainContainer";

// I would talk to the client and backend about not actually persisting any
// of the "buying" or "selling" of stocks in any database.
// Real-world situation would not likely have Portfolio exist only in state.
// But also, would likely have more robust functionality for buying/selling than a single click.
// Also, SearchBar.js is a bad name for a container of filter and sort (leaving as is).
// Also, there was a typo in temporary text in Stock.js of Compant => Company.

// But the big question is what to do about the mockup/demo gif?
// Specifically, what is it the client wants?  Because the mockup looks impossible.
// The gif shows radio buttons, and the original code has radio inputs.
// There is no default radio selected (which is bad UI, but not impossible).
// And, at one point, it is clear that both "Alphabetically" and "Price" are selected.
// Radio buttons are supposed to be mutually exclusive.
// This could happen, though, if the mockup does not actually name both inputs the same (or at all).
// Notably, the code here did (before modification) of radio buttons with the same name.

// So...  Is this just a mistake that it looks like both radios are selected?
// Or does the client actually want sorting by both name and price?
// The deliverable is ambiguous:
// "Allow a user to sort the list of stocks alphabetically by the ticker name as well as by ascending price."
// "As well as" suggests both are desired, otherwise the better phrasing would be "or."
// If sorting by both, the next question is normally: Sort by which first?
// Two stocks might have the same price, but no two stocks have the same name names.
// Thus, we know it would have to be by price first, and then name.
// Normally, one would display the first order of sorting first:
// on top, preferably, or on left of the other sorting option.
// But in the demo the first sorting option displayed is alphabetical.

// In the absence of clarity, I will default to what a user might want.
// I could see a logical desire for sorting by both name and price, so I will assume that.
// Further, I will change the visual order of sorting options so that price is first.
// And I will change the radios to checkboxes, both in look and functionality.
// I could change the CSS to make the checkboxes look like radios, but will assume client does not need.
// Looking like / having checkboxes is more logical for non-mutually-exclusive options.
// Lastly, it's not clear why anyone would want the "default" sorting of ID in the database, but will assume so.
// Again, normally, I would have a conversation with the client to verify.

// To properly test this two-sorting functionality, I recommend adding this to db.json:
// ,
//     {
//       "id": 11,
//       "ticker": "APPL",
//       "name": "Apple",
//       "type": "Tech",
//       "price": 168.85
//     }

function App() {
  return (
    <div>
      <Header />
      <MainContainer />
    </div>
  );
}

export default App;
