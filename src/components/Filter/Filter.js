//---------with createReducer----------------
// import React from 'react';
// import { useSelector, useDispatch } from 'react-redux';
// import phonebookActions from '../../redux/phonebook/phonebook-actions';
// import shortid from 'shortid';
// import s from '../ContactForm/ContactForm.module.css';

// const Filter = () => {
//   const dispatch = useDispatch();

//   const value = useSelector(state => state.phonebook.filter);

//   return (
//     <div className={s.InputWrapper}>
//       <label className={s.Label} htmlFor={shortid.generate()}>
//         Find contacts by name
//       </label>
//       <input
//         type="text"
//         value={value}
//         id={shortid.generate()}
//         className={s.Input}
//         onChange={e =>
//           dispatch(phonebookActions.changeFilter(e.currentTarget.value))
//         }
//       />
//     </div>
//   );
// };

// export default Filter;
/////////////////////////////////////////////////////////////
//---------with createSlice----------------
/////////////////////////////////////////////////////////////
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { phonebookActions } from 'redux/phonebook';
import shortid from 'shortid';
import s from '../ContactForm/ContactForm.module.css';

const Filter = () => {
  const dispatch = useDispatch();

  const value = useSelector(state => state.phonebook.filter);

  return (
    <div className={s.InputWrapper}>
      <label className={s.Label} htmlFor={shortid.generate()}>
        Find contacts by name
      </label>
      <input
        type="text"
        value={value}
        id={shortid.generate()}
        className={s.Input}
        onChange={e =>
          dispatch(phonebookActions.changeFilter(e.currentTarget.value))
        }
      />
    </div>
  );
};

export default Filter;
