import React from 'react';
import { nanoid } from 'nanoid';
import './ContactList.css';
import { useDispatch } from 'react-redux';
import { deleteContact } from 'service/Api';

export const ContactList = ({ contacts }) => {
  const dispatch = useDispatch();

  const handleDelete = id => {
    dispatch(deleteContact(id));
  };

  return (
    <div>
      <ul>
        {contacts.map(({ id, name, number }) => (
          <li key={nanoid()}>
            {name} : {number}
            <button
              id={nanoid(id)}
              className="contactListBtn"
              type="button"
              onClick={() => handleDelete(id)}
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

// export const ContactList = ({ contacts, onDeleteContact }) => (
//   <div>
//     <ul>
//       {contacts.map(({ id, name, number }) => (
//         <li key={nanoid()}>
//           {name} : {number}
//           <button
//             id={nanoid(id)}
//             className="contactListBtn"
//             type="button"
//             onClick={() => onDeleteContact(id)}
//           >
//             Delete
//           </button>
//         </li>
//       ))}
//     </ul>
//   </div>
// );
