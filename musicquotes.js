var quotes = new Array();

quotes[0] = '<b>"The only truth is music." <i>Jack Kerouac</i></b>';
quotes[1] =
  '<b>"One good thing about music, when it hits you, you feel no pain." <i>-Bob Marley</i></b>';
quotes[2] =
  '<b>"Without music, life would be a mistake." <i>-Friedrich Nietzsches</i></b>';
quotes[3] =
  '<b>"Where words fail, music speaks." <i>-Hans Christian Andersen</i></b>';
quotes[4] =
  '<b>"Music is to the soul what words are to the mind." <i>-Modest Mouse</i></b>';
quotes[5] = '<b>"Music is life itself." <i>-Louis Armstrong</i></b>';
quotes[6] = '<b>"Music is the soundtrack of your life." <i>-Dick Clark</i></b>';
quotes[7] =
  '<b>"Music produces a kind of pleasure which human nature cannot do without." <i>-Confucius</i></b>';
quotes[8] =
  '<b>"Music gives color to the air of the moment." <i>-Karl Lagerfeld</i></b>';

var whichquote = Math.floor(Math.random() * quotes.length);
document.write(quotes[whichquote]);
