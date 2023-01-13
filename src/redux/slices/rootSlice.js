import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  search: false,
  searchText: '',
  orderHistory: [],
  filter: 'all', // all, completed, continuing
  basket: [],
  isLoading: false,
  modalVisible: false,
  sortTypes: [
    'default',
    'bestSeller',
    'ascendingPrice',
    'descendingPrice',
    'newest',
    'alphabetical',
  ],
  selectedSortType: 'default',
};

export const rootSlice = createSlice({
  name: 'root',
  initialState,
  reducers: {
    changeIsLoading: (state, action) => {
      state.isLoading = action.payload;
    },
    changeModalVisible: (state, action) => {
      state.modalVisible = action.payload;
    },
    changeSortType: (state, action) => {
      state.selectedSortType = action.payload;
    },
    setOrderHistory: (state, action) => {
      state.orderHistory = action.payload;
    },
    toggleSearch: (state) => {
      state.search = !state.search;
    },
    setSearchText: (state, action) => {
      state.searchText = action.payload;
    },
    setFilter: (state, action) => {
      state.filter = action.payload;
    },
  },
});

export const {
  changeIsLoading,
  changeModalVisible,
  changeSortType,
  setOrderHistory,
  toggleSearch,
  setFilter,
  setSearchText,
} = rootSlice.actions;

export const selectIsLoading = (state) => state.root.isLoading;
export const selectModalVisible = (state) => state.root.modalVisible;
export const selectSortTypes = (state) => state.root.sortTypes;
export const selectedSortType = (state) => state.root.selectedSortType;
export const selectSearch = (state) => state.root.search;
export const selectSearchText = (state) => state.root.searchText;
export const selectFilter = (state) => state.root.filter;
export const selectOrderHistory = (state) => state.root.orderHistory;
export const selectBasket = (state) => state.root.basket;

export default rootSlice.reducer;
