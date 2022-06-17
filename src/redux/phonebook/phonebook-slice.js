////////////////////////////////////////////////////////
// ПИШЕМ ДВА ОТДЕЛЬНЫХ СЛАЙСА ДЛЯ ДВУХ РЕДЮСЕРОВ
import { createSlice, combineReducers } from '@reduxjs/toolkit';

const contactsSlice = createSlice({
  name: 'contacts',
  initialState: [],
  reducers: {
    addContact(state, { payload }) {
      return state.find(contact => contact.name === payload.name)
        ? alert(`${payload.name} is already in contacts.`)
        : [...state, payload];
    },
    deleteContact(state, { payload }) {
      return state.filter(contact => contact.id !== payload);
    },
  },
});

const filterSlice = createSlice({
  name: 'filter',
  initialState: '',
  reducers: {
    changeFilter(_, { payload }) {
      return payload;
    },
  },
});

export const { addContact, deleteContact } = contactsSlice.actions;
export const { changeFilter } = filterSlice.actions;

const phonebookReducer = combineReducers({
  [contactsSlice.name]: contactsSlice.reducer,
  [filterSlice.name]: filterSlice.reducer,
});

export default phonebookReducer;
//
//////////////////////////////////////////////////////////////
//ПИШЕМ ОБЩИЙ СЛАЙС, МУТИРУЯ СТЕЙТ (испол. библ. IMMER под капотом)
// import { createSlice } from '@reduxjs/toolkit'

// const initialState = {
//   contacts: [],
//   filter: ''
// }

// const phonebookSlice = createSlice({
//   name: 'phonebook',
//   initialState,
//   reducers: {
//     addContact(state, { payload }) {
//       state.contacts.find(contact => contact.name === payload.name)
//       ? alert(`${payload.name} is already in contacts.`)
//       : state.contacts.push(payload);
//     },
//     deleteContact(state, { payload }) {
//       const idx = state.contacts.findIndex(contact => contact.id === payload);
//       state.contacts.splice(idx, 1);
//     },
//     changeFilter(state, {payload}) {
//       state.filter = payload;
//     },
//   },
// });

// const phonebookReducer = phonebookSlice.reducer;

// export const { addContact, deleteContact, changeFilter } = phonebookSlice.actions;

// export default phonebookReducer;
//
/////////////////////////////////////
//ПИШЕМ ОБЩИЙ СЛАЙС, НЕ МУТИРУЯ СТЕЙТ
// import { createSlice } from '@reduxjs/toolkit'

// const initialState = {
//   contacts: [],
//   filter: ''
// }

// const phonebookSlice = createSlice({
//   name: 'phonebook',
//   initialState,
//   reducers: {
//     addContact(state, { payload }) {
//       return state.contacts.find(contact => contact.name === payload.name)
//       ? alert(`${payload.name} is already in contacts.`)
//       : {...state,
//           contacts: [...state.contacts, payload]
//         };
//     },
//     deleteContact(state, { payload }) {
//       return {
//         ...state,
//         contacts: state.contacts.filter(contact => contact.id !== payload)
//       }
//     },
//     changeFilter(state, {payload}) {
//       return {
//         ...state,
//         filter: payload
//       }
//     },
//   },
// });

// const phonebookReducer = phonebookSlice.reducer;

// export const { addContact, deleteContact, changeFilter } = phonebookSlice.actions;

// export default phonebookReducer;
//
