import * as React from "react";
import { Admin, Resource, ListGuesser } from 'react-admin';

import postgrestRestProvider from "@promitheus/ra-data-postgrest";

const dataProvider = postgrestRestProvider("/api/admin");

const App = () => (
  <Admin dataProvider={dataProvider}>
    <Resource name="todos" list={ListGuesser} />
  </Admin>
);

export default App;
