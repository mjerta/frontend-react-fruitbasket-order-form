export const inputs = [
  {
    name: 'firstName',
    text: 'voornaam',
    type: 'text',
    className: "",
    required: true,
    maxLength: 15,

  },
  {
    name: 'lastName',
    text: 'achternaam',
    type: 'text',
    className: "",
    required: false,
    maxLength: 30,
  },
  {
    name: 'ageOfPerson',
    text: 'leeftijd',
    type: 'number',
    initialValue: 0,
    className: "age",
    required: true,
    minAge: 18,
    maxAge: 104,
  },
  {
    name: 'zipcode',
    text: 'postcode',
    type: 'text',
    className: "shorter-input",
    required: true,
    pattern: /^[1-9][0-9]{3}\s?[A-Za-z]{2}$/
  },
]