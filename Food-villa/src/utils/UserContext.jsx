import { createContext } from "react";

//createcontext take a default value initially
//we use context to have data that can be shared universaly between compoenets, its like mamanging states centrally
const UserContext = createContext({
  user: { name: "Phoenix", email: "phoenix@gmail.com" },
});

export default UserContext;
