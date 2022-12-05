const Quotes = document.querySelector('.Quotes'),
button = Quotes.querySelector('button'),
TextContainer = Quotes.querySelector('p'),
Auteur = Quotes.querySelector('.Auteur i a'),
Copie = Quotes.querySelector('.copie'),
tweet = Quotes.querySelector('.tweet'),
speak = Quotes.querySelector('.speak');
function RandomQuote(){
    button.innerText = 'Loading Quote...';
    button.classList.add('Loading');
    fetch("https://api.quotable.io/random").then(res => res.json())
    .then(data => {
        TextContainer.innerText = data.content
        Auteur.innerText = data.author
        Auteur.setAttribute("href", `https://www.google.com/search?q=${Auteur.innerText}`);
        button.innerText = 'New Quote';
        button.classList.remove('Loading');
    })
}

function FunSpeak(){
    const speaker = new SpeechSynthesisUtterance(`${TextContainer.innerText} by ${Auteur.innerText}`);
    speechSynthesis.speak(speaker);
}

function FunCopie(){
    navigator.clipboard.writeText(TextContainer.innerText);
}

function FunTweet(){
    const TweetURl = `https://twitter.com/intent/tweet?url=${TextContainer.innerText}`;
    window.open(TweetURl,"_blank");
}

Copie.addEventListener('click',FunCopie)
tweet.addEventListener('click',FunTweet)
speak.addEventListener('click',FunSpeak)
button.addEventListener('click',RandomQuote)
button.click()