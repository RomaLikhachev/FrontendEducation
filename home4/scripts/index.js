const {createStore} = Redux;

const SET_REGISTRATION_DATA = 'SET_REGISTRATION_DATA';

const setRegistrationData = (data) => (
  {
    type: SET_REGISTRATION_DATA,
    payload: data,
  }
);

const initialState = {
  registrationData: {
    firstName: '',
    lastName: '',
    email: '',
    password: '',
  },
};

const registrationReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_REGISTRATION_DATA:
      return {
        ...state,
        registrationData: action.payload,
      };
    default:
      return state;
  }
};

const store = createStore(registrationReducer);

const handleSubmit = (event) => {
  event.preventDefault();

  const formData = new FormData(event.target);

  const data = {
    firstName: formData.get('firstName'),
    lastName: formData.get('lastName'),
    email: formData.get('email'),
    password: formData.get('password'),
  };

  // Push new state
  store.dispatch(setRegistrationData(data));

  // Logic
  console.log(store.getState().registrationData);
};

const RegistrationForm = () => {
  return `
        <div class="container">
            <form id="registrationForm">
                <input type="text" name="firstName" placeholder="First Name" required />
                <input type="text" name="lastName" placeholder="Last Name" required />
                <input type="email" name="email" placeholder="Email" required />
                <input type="password" name="password" placeholder="Password" required />
                <button type="submit">Continue</button>
            </form>
        </div>
    `;
};

document.getElementById('app').innerHTML = RegistrationForm();

document.getElementById('registrationForm').addEventListener('submit', handleSubmit);
