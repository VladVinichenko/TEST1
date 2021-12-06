const person = {
  age: 10,
  setAge(newAge) {
    this.age = newAge;
  },
  refreshAge(userId) {
    fetchAgeFromDb(function (newAge) {
      this.setAge(newAge);
    });
  },
};

function fetchAgeFromDb(cb) {
  cb(20);
}

person.refreshAge();
console.log(person.age);
