const nayok = {
  name: "sakib khan",
  id: 121,
  address: "movie cinema",
  isSingle: false,
  friends: ["Sabiha", "Hanif", "Tonika"],
  movies: [
    { name: "no. 1", year: 2022 },
    { name: "king khan", year: 2012 },
  ],
  act: function(){
    console.log('acting like sakib khan');
  },
  car: {
    brand: "tesla",
    price: 2345799,
    made: 2023,
    manufacturer: {
      name: "tesla",
      ceo: "elon mask",
      country: "USA",
    },
  },
};

// console.log(student.car);
console.log(nayok.act);
nayok.act();
