function searchByPrefix(phonebook, prefix) {
    let results = {};
  for (let name in phonebook) {
    if(name.startsWith(prefix)){
        results[name] = phonebook[name];
    }
  }
  return results;
}
const phonebook = {
  rahim: "0181",
  karim: "0174",
  rafi: "0193",
};

const prefix = "ra";
console.log(searchByPrefix(phonebook, prefix));
