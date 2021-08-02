const quotes = [
  '<b>"The only truth is music." <i>Jack Kerouac</i></b>',
  '<b>"One good thing about music, when it hits you, you feel no pain." <i>-Bob Marley</i></b>',
  '<b>"Without music, life would be a mistake." <i>-Friedrich Nietzsches</i></b>',

  '<b>"Where words fail, music speaks." <i>-Hans Christian Andersen</i></b>',

  '<b>"Music is to the soul what words are to the mind." <i>-Modest Mouse</i></b>',
  '<b>"Music is life itself." <i>-Louis Armstrong</i></b>',
  '<b>"Music is the soundtrack of your life." <i>-Dick Clark</i></b>',

  '<b>"Music produces a kind of pleasure which human nature cannot do without." <i>-Confucius</i></b>',

  '<b>"Music gives color to the air of the moment." <i>-Karl Lagerfeld</i></b>',
];

const whichquote = Math.floor(Math.random() * quotes.length);
const h1InHeader = document.getElementById("quote");
h1InHeader.innerHTML = quotes[whichquote];
