/*Template literals allow for multi-line strings and embedding expressions inside strings using ${}. */

// const name="Gohul";
// const age=23;

// const greeting=`Hello, my name is ${name} and I am ${age} years old.`;

// console.log(greeting);

function Welcome(msg="Guest"){
    console.log(`Hello,${msg}`);
}

Welcome();
Welcome("Kumar");
