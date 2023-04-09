import "@testing-library/jest-dom";

import { Provider } from "react-redux";
import { render, waitFor, fireEvent } from "@testing-library/react";
import store from "../../utils/store";
import { StaticRouter } from "react-router-dom/server";
import Body from "../Body";
import { RESTAURANT_DATA } from "../../mocks/data";

//lets mock the fetch,since we are not in browser we cannot mimick the n/w  calls

global.fetch = jest.fn(() => {
  return Promise.resolve({
    json: () => {
      return Promise.resolve(RESTAURANT_DATA);
    },
  });
});

test("Shimmer should load on Homepage", () => {
  //load body
  const body = render(
    <StaticRouter>
      <Provider store={store}>
        <Body />
      </Provider>
    </StaticRouter>
  );

  const shimmer = body.getByTestId("shimmer");

  expect(shimmer.children.length).toBe(20);
});

test("Restaurants should load on Homepage", async () => {
  //load body
  const body = render(
    <StaticRouter>
      <Provider store={store}>
        <Body />
      </Provider>
    </StaticRouter>
  );

  await waitFor(() => expect(body.queryByTestId("search-btn")));

  const resList = body.queryByTestId("res-list");
  if (resList != null) expect(resList.children.length).toBe(20);
});

test("Search for food  on Homepage", async () => {
  //load body
  const body = render(
    <StaticRouter>
      <Provider store={store}>
        <Body />
      </Provider>
    </StaticRouter>
  );

  await waitFor(() => expect(body.queryByTestId("search-btn")));

  const input = body.queryByTestId("search-input");

  if (input != null)
    fireEvent.change(input, {
      target: {
        value: "food",
      },
    });

  const searchBtn = body.queryByTestId("search-btn");

  if (searchBtn != null) fireEvent.click(searchBtn);

  const resList = body.queryByTestId("res-list");
  if (resList != null) expect(resList.children.length).toBe(10);
});
