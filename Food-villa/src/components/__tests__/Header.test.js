import { Provider } from "react-redux";
import Header from "../Header";
import { render } from "@testing-library/react";
import store from "../../utils/store";
import { StaticRouter } from "react-router-dom/server";

test("Logo should be displayed on rendering header", () => {
  //load header
  const head = render(
    <StaticRouter>
      <Provider store={store}>
        <Header />
      </Provider>
    </StaticRouter>
  );
  console.log(head); //-----> gives virtual DOM object
  const logo = head.getAllByTestId("logo");
  console.log(logo);
  //check if logo is displayed
  expect(logo[0].src).toBe("http://localhost/dummyLogo.jpg");
});

// when we encounter a image,its not js object so we will encounterr error, so make a mock/dummy object for this image

//to make jest understand we are using a dummy mock image for all png/jpg image   give mapping configuration in  jest.confi  in moduleNameMapper

//In header we have used useRef from BrowserRouet, this routing mechanism is not
//present in  jsdom so use StticRouter
