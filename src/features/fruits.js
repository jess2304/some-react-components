import { createSlice } from "@reduxjs/toolkit";

export const fruits = createSlice({
  name: "fruits",
  initialState: {
    list: [
      {
        name: "Mango",
        url: "/images/mango.jpg",
        price: 5,
        id: 52548799,

      },
      {
        name: "Watermelon",
        url: "/images/watermelon.jpg",
        price: 8,
        id: 52548749,
      },
    ],
  },
});

export default fruits.reducer;
