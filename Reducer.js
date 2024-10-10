const arr = [];

export const myReducer = (state = arr, action) => {
  switch (action.type) {
    case "ADD":
      return [...state, { ...action.payload, quantity: 1 }];
      
    case "IncQty":
      return state.map((item, index) =>
        index === action.index ? { ...item, quantity: item.quantity + 1 } : item
      );
      
    case "DecQty":
      return state.map((item, index) =>
        index === action.index && item.quantity > 1
          ? { ...item, quantity: item.quantity - 1 }
          : item
      );
      
    case "REMOVE":
      return state.filter((item, index) => index !== action.index);

    default:
      return state;
  }
};
