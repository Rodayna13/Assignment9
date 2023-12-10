  // Array of quotes (you can fetch this dynamically from your source)
  const quotes = [
    {
        text: "Be yourself; everyone else is already taken.",
        author: "Oscar Wilde"
    },
    {
        text: "I'm selfish, impatient and a little insecure. I make mistakes, I am out of control and at times hard to handle. But if you can't handle me at my worst, then you sure as hell don't deserve me at my best.",
        author: "Marilyn Monroe"
    },
    {
        text: "Two things are infinite: the universe and human stupidity; and I'm not sure about the universe.",
        author: " Albert Einstein"
    },
    {
        text: "So many books, so little time.",
        author: "Frank Zappa",
        
    },
    {
        text: "A room without books is like a body without a soul.",
        author: "Marcus Tullius Cicero"
    },
    {
        text: "Be who you are and say what you feel, because those who mind don't matter, and those who matter don't mind.",
        author: " Bernard M. Baruchn"
    },
    {
        text: "You've gotta dance like there's nobody watching,Love like you'll never be hurt, Sing like there's nobody listening, And live like it's heaven on earth.",
        author: "William W. Purkey"
    },
    {
        text: "You only live once, but if you do it right, once is enough.",
        author: "Mae West"
    },
    {
        text: "Be the change that you wish to see in the world.",
        author: " Mahatma Gandhi"
    },
    {
        text: "If you want to know what a man's like, take a good look at how he treats his inferiors, not his equals.",
        author: "J.K. Rowling, Harry Potter and the Goblet of Fire"
    },
    {
        text: "Don’t walk in front of me… I may not follow, Don’t walk behind me… I may not lead Walk, beside me… just be my friend.",
        author: "Albert Camus"
    },
    {
        text: "Here's to the crazy ones. The misfits. The rebels. The troublemakers. The round pegs in the square holes. The ones who see things differently. They're not fond of rules. And they have no respect for the status quo. You can quote them, disagree with them, glorify or vilify them. About the only thing you can't do is ignore them. Because they change things. They push the human race forward. And while some may see them as the crazy ones, we see genius. Because the people who are crazy enough to think they can change the world, are the ones who do.",
        author: " Steve Jobs"
    },
    {
        text: "But the Hebrew word, the word timshel—‘Thou mayest’— that gives a choice. It might be the most important word in the world. That says the way is open. That throws it right back on a man. For if ‘Thou mayest’—it is also true that ‘Thou mayest not.",
        author: "John Steinbeck, East of Eden"
    },
    {
        text: "If you want a picture of the future, imagine a boot stamping on a human face—for ever.",
        author: "George Orwell, 1984"
    },
    {
        text: "It would seem that Our Lord finds our desires not too strong, but too weak. We are half-hearted creatures, fooling about with drink and sex and ambition when infinite joy is offered us, like an ignorant child who wants to go on making mud pies in a slum because he cannot imagine what is meant by the offer of a holiday at the sea. We are far too easily pleased.",
        author: "C.S. Lewis, The Weight of Glory, and Other Addresses"
    },
  
];

let previousRandomNumber = -1; 

function generateRandomQuote() {
    let randomNumber;

    do {
        randomNumber = Math.floor(Math.random() * quotes.length);
    } while (randomNumber === previousRandomNumber);

    previousRandomNumber = randomNumber;

    // Display the quote
    const quoteTextElement = document.getElementById("quote-text");
    const quoteAuthorElement = document.getElementById("quote-author");

    quoteTextElement.textContent = quotes[randomNumber].text;
    quoteAuthorElement.textContent = "- " + quotes[randomNumber].author;
}