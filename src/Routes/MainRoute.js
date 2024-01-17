// import { Routes, Route } from "react-router-dom";

// import ProductionEntry from "../Pages/Production/ProductionEntry";

// const MainRoute = () => {
//   const { token } = useToken();

//   console.log(token, "tokentoken");
//   // console.log(userData);
//   return (
//     <Routes>
//       {/* <Route exact path="/Login" element={<Login />}></Route> */}

//       {(token?.userrole === 1 || token?.userrole === 8) && (
//         <Route exact path="/ProductionEntry" element={<ProductionEntry />} />
//       )}

//       {(token?.userrole === 1 || token?.userrole === 8) && (
//         <Route exact path="/ProductionTable" element={<ProductionTable />} />
//       )}
//       {(token?.userrole === 1 ||
//         token?.userrole === 3 ||
//         token?.userrole === 4 ||
//         token?.userrole === 5 ||
//         token?.userrole === 6 ||
//         token?.userrole === 7) && (
//         <Route exact path="/AddedAndParty" element={<AddedAndParty />} />
//       )}

//       <Route path="/ChalaniTable" element={<ChalaniTable />} />

//       {(token?.userrole === 1 || token?.userrole === 8) && (
//         <Route
//           exact
//           path="/RemainingProduction"
//           element={<RemainingProduction />}
//         />
//       )}

//       <Route exact path="/ClosingDate" element={<ClosingDate />} />
//       <Route exact path="/ReportTable" element={<ReportTable />} />
//       <Route path="/ItemsEntry" element={<ItemsEntry />} />
//       <Route path="/InsertUsers" element={<InsertUsers />} />
//     </Routes>
//   );
// };

// export default MainRoute;
