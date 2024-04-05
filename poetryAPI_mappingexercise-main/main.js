//let url = 'https://poetrydb.org/random,linecount/1;10/title,author,lines.json'
//let url = 'https://poetrydb.org/author,title/Shakespeare;Sonnet'
let url = 'https://poetrydb.org/author/Poems'
let url2 = 'https://poetrydb.org/${authors}'

const button = document.getElementById('button');
const authorZone = document.getElementById('author');
let authorHolder = [];




async function requestAuthors(url2) {  //this is for the very begining part of the page that says pick a poem
    
    //REQUEST POEMS FROM API
    //REPURPOUS THIS 
    const response = await fetch(url2);
    const data = await response.json();
    console.log(data);



    //RANDOM POEM SELECT AND DISPLAY
    // const randomIndex = Math.floor(Math.random() * data.length);
    // console.log(randomIndex);
    // const poem = data[randomIndex]["lines"].join(' <br> ');
    // poemZone.innerHTML = poem;
   
   
   
    authorHolder = data;


    authorLister(data);


}

async function requestAuthors(url) {
    //make request because you don't know who any of the authors are yet
    //REQUEST AUTHORS FROM API, look for what it is being called to see where it goes
    const response = await fetch(url);
    const data = await response.json();
    console.log(data);

}

requestPoem(url2);
requestAuthors(url2)
//loading in the variables 



// REPLACE RANDOM POEM WITH A DIFFERENT RANDOM POEM
//just sitting here because it gives us specific poems
// function newPoem(data) {

//     const randomIndex = Math.floor(Math.random() * data.length);
//     const poem = data[randomIndex]["lines"].join(' <br> ');
//     poemZone.innerHTML = poem;
// }



function selectAuthor(data, index) {

    const author = data[index]["names"].join(' <br> ');
    authorZone.innerHTML = listOfNames; //creating a variable that grabs each and every line out of the data NEED
    console.log(index);
}


//LIST ALL THE POEMS NEED
//part of the card 
function authorLister(data) {
const listOfNames = data.map((name, index) => {
   // console.log(poem.title);
    const node = document.createElement("option");//taking these to things and craming them into poem-picker
    node.innerHTML = `${name.title}`;
   node.value = index;
   // node.innerText = poem.title;
   //node.setAttribute("onclick", "")
document.getElementById('author-picker').appendChild(node); //adds it to the end of the parent element, inside of the html is the title

})
//console.log(listOfTitles);
document.getElementById('author-count').innerText= `${listOfNames.length} authors available`
}



// setInterval(newPoem(poemHolder), 5000);    // how often reloads


// button.onclick = () => {
//     body.innerHTML = requestPoem(url)
// }


//3&4 specifies what the different variable names are (code collision)(dont reuse the same variable name)
//takind the data and putting it into poem holder 

//NEW PART
async function requestPoem2(url2) { 
    const response = await fetch(url2);
    const data = await response.json();
    console.log(data);

    authorHolder = data;


    authorLister(data);
}

async function requestAuthors2(url2) {
    const response = await fetch(url2);
    const data = await response.json();
    console.log(data);

}