export const SET_ACTIVE_TAB = "SET_ACTIVE_TAB";

export const setActiveTab = (tagName) => {
  return {
    type: "SET_ACTIVE_TAB",
    payload: tagName,
  };
};
