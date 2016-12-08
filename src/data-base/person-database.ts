export const persons = [
  {
    id: "1",
    sex: 'male',
    name: 'miro'
  },
  {
    id: "2",
    sex: 'female',
    name: 'lala'
  },
  {
    id: "3",
    sex: 'male',
    name: 'joe'
  }
];

export const locations = [
  {
    id: "1",
    address: 'male',
    name: 'miro'
  },
  {
    id: "2",
    address: 'female',
    name: 'lala'
  },
  {
    id: "3",
    address: 'male',
    name: 'joe'
  }
];

export const findPerson = (persons: Array<any>, id: string) => {
  return persons.find(person => person.id === id);
};

export const addPerson = (persons: Array<any>, person: any) => {
  persons.push(person);
  return person;
};