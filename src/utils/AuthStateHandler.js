/******************************************
 *  Author : Suraj Sharma
 *  Created On : Fri Feb 19 2021
 *  File : AuthStateHandler.js
 *******************************************/
/**
 * For nextjs project we have no central mechanism for rehydrating
 * redux state when the user opens any webpage, conditional to his authenticated
 * state. This util helps us achieve that.
 */

import {
  preAuthPaths,
  teamAuthPaths,
  userAuthPaths,
} from "config/constants/NavigationConstants";
import { useDispatch, useSelector } from "react-redux";

const teamsPath = "/teams";
const candidatePath = "/candidate";

const AuthStateHandler = (isAuthenticated, pathName) => {
  /**
   * Returns true if path is available and string routing path of path is
   * unavailable
   */
  const {
    credentials: { userType },
  } = useSelector((reduxState) => reduxState.authReducer);

  let routingTo = "guest";
  if (pathName.includes(teamsPath)) routingTo = "teams";
  else if (pathName.includes(candidatePath)) routingTo = "candidate";

  if (isAuthenticated) {
    if (userType == "candidate") {
      if (routingTo == "candidate" || routingTo == "guest") {
        return true;
      }
      return userAuthPaths.HOME;
    }
    if (userType == "teams") {
      if (routingTo == "teams" || routingTo == "guest") {
        return true;
      }
      return teamAuthPaths.HOME;
    }
    return preAuthPaths.HOME;
  }

  // this is section for unauthenticated user
  if (routingTo === "guest") return true;
  // check if the path is inside preAuthPaths
  const isValid = Object.values(preAuthPaths).findIndex((d, idx) => d == pathName);
  if (isValid !== -1) return true;
  if (routingTo === "candidate") return userAuthPaths.LOGIN;
  if (routingTo === "teams") return teamAuthPaths.LOGIN;
  return preAuthPaths.HOME;
};

export default AuthStateHandler;
