import { Provider } from "react-redux";
import Header from "../Header";
import { render } from "@testing-library/react";
import store from "../../utils/store";
import { StaticRouter } from "react-router-dom/server";

// when we encounter a image,its not js object so we will encounterr error, so make a mock/dummy object for this image

//to make jest understand we are using a dummy mock image for all png/jpg image   give mapping configuration in  jest.confi  in moduleNameMapper

//In header we have used useRef from BrowserRouet, this routing mechanism is not
//present in  jsdom so use StticRouter
//staticRuter can work in non browser like environment like jsdom

test("Logo should be displayed on rendering header", () => {
  //load header
  const head = render(
    <StaticRouter>
      <Provider store={store}>
        <Header />
      </Provider>
    </StaticRouter>
  );
  //check if logo is displayed
  const logo = head.getByTestId("logo");
  expect(logo.src).toBe("http://localhost/dummyLogo.jpg");
});

test("Onlne status should be green", () => {
  //load header
  const head = render(
    <StaticRouter>
      <Provider store={store}>
        <Header />
      </Provider>
    </StaticRouter>
  );
  //check if  status is green
  const onlineStatus = head.getByTestId("online-status");

  console.log(onlineStatus.innerHTML);
  expect(onlineStatus.innerHTML).toBe("✅");
});

test("Cart  should have 0 items on rendering header", () => {
  //load header
  const head = render(
    <StaticRouter>
      <Provider store={store}>
        <Header />
      </Provider>
    </StaticRouter>
  );
  //check if  cartLength is 0
  const cartLength = head.getByTestId("cart-length");
  // console.log(cartLength);

  expect(cartLength.innerHTML).toBe("Cart-0 items");
});
