export const myAction = (payload) => {
    return {
      type: "ADD",
      payload,
    };
  };
  
  export const incrementQuantity = (index) => {
    return {
      type: "IncQty",
      index,
    };
  };
  
  export const decrementQuantity = (index) => {
    return {
      type: "DecQty",
      index,
    };
  };
  
  export const removeItem = (index) => {
    return {
      type: "REMOVE",
      index,
    };
  };
  