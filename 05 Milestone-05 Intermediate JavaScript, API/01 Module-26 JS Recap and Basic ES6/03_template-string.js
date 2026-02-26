const firstName = "John";
const lastName = "Don";

// const aboutMe = 'web developer
// software
// engineer'

const aboutMe = `My name is ${firstName}`;
const giveMe = `Give me money ${(10 + 23) * 2 + 500}`;
console.log(aboutMe);
console.log(giveMe);

const fullName = firstName + " " + lastName;
const fullName2 = `${firstName} ${lastName}`;

function getHTMLCard(name, desc, price) {
  const div = `
      <div class="card">
         <h2>${name.toUpperCase()}</h2>
         <p>Price: $ ${price}</p>
         <p>${desc}</p>
      </div>
    `;
  console.log(div);
}

getHTMLCard("iPhone 12", "This is the latest Phone");
