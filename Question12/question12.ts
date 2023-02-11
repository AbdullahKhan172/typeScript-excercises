const guests = ["Mufti Taqi Usmani", "Elon Musk", "Hitler"];

console.log(
  `Dear ${guests[0]} I would love for you to come and have dinner with me at my house`
);
console.log(
  `Dear ${guests[1]} I would love for you to come and have dinner with me at my house`
);
console.log(
  `Dear ${guests[2]} I would love for you to come and have dinner with me at my house`
);
console.log(`\nOh ${guests[1]} would not be able to make it`);

guests[1] = "Imran Khan";

console.log(`So we decided to invite the following instead ${guests}`);
console.log("But fortunately we found a bigger dinner table");

guests.unshift("Nawaz Sharif");
guests.splice(2, 0, "Benazir Bhutto");
guests.push("Sheikh Rasheed");

console.log(
  `\nFor the record we are inviting ${guests.length} to the dinner\n`
);

for (let i = 0; i <= 5; i++) {
  console.log(
    `Dear ${guests[i]} I would love for you to come and have dinner with me at my house`
  );
}

console.log("\n I have a small dinner table that can only fit tow sorry");

for (let i = 0; i <= 3; i++) {
  let removed = guests.pop();
  console.log(` Im so sorry but you are not invited ${removed}`);
}

console.log(`${guests} are still invited`);

for (let i = 0; i <= 2; i++) {
  guests.pop();
}

console.log(guests);
