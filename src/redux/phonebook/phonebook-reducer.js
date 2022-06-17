// import { combineReducers } from 'redux';
// import phonebookActions from './phonebook-actions';
// import { createReducer } from '@reduxjs/toolkit';

// // console.log(phonebookActions.addContact.type);
// // console.log(phonebookActions.addContact.toString());

// //////////////////////////////////////////////////////
// //--------with bilder + crteReducer----------
// const contacts = createReducer([], (builder) => {
//   builder
//     .addCase(phonebookActions.addContact, (state, { payload }) => {
//       return state.find(contact => contact.name === payload.name)
//       ? alert(`${payload.name} is already in contacts.`)
//       : [payload, ...state];
//     })
//     .addCase(phonebookActions.deleteContact, (state, { payload }) =>
//     state.filter(contact => contact.id !== payload)
//     );
// })

// const filter = createReducer('', (builder) => {
//   builder
//     .addCase(phonebookActions.changeFilter, (_, {payload}) => payload)
// })

// export default combineReducers({ contacts, filter });
// ///////////////////////////////////////////////////////
// //-------with poor crteateReducer----------
// //////////////////////////////////////////////////////
// // const contacts = createReducer([], {
// //   [phonebookActions.addContact]: (state, { payload }) => {
// //     return state.find(contact => contact.name === payload.name)
// //       ? alert(`${payload.name} is already in contacts.`)
// //       : [payload, ...state];
// //   },

// //   [phonebookActions.deleteContact]: (state, { payload }) =>
// //     state.filter(contact => contact.id !== payload),
// // });

// // const filter = createReducer('', {
// //   [phonebookActions.changeFilter]: (_, { payload }) => payload,
// // });
// //
/////////////////////////////////////////////////////////////
//---------with createSlice----------------
/////////////////////////////////////////////////////////////
// Reducers for createSlice don't need
