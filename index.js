const genText = document.getElementById("gen-text")

genText.addEventListener("click", function() {
  let messages = [
    "Mero Geda Tmrai Lagi ho",
    "one in a hundred message ho tara randi ko ban nai raixu tmi",
    "Without you, I am  complete",
    "Im  notthinking about you",
    "I love you sus",
    "Were perfect for each other sus",
    "I would be lost without you",
    "Oe Bro Mero Paisa Kile phirta dine",
    "You make my smile",
    "Bro 9841241660 ma paisa haldeu hai yadi yo message tmlai first try ma aaexa vane",
    "I cant wait to hold you",
    "Lado muji Panauti uta ja muji",
    "You complete me",
    "You are my soulmate",
    "Bihar Boy ni sundeu hai",
    "AAU Chuppa Dinxu TMlai",
    "Pheri yo Sumedha ho vane mero chak khada hunxa hai",
    "I think about you 24/7",
    "AAU Chuppa Deu Malai Mero Lado Ma",
    "Be mine please k baby",
    "You make my heart melt like chocolatee ago ma rakhya jastai",
    "Be Honest to me chak ma kasto choti aula chiraeraw sugyo tmle?",
    "Lado khana click hanis Machigne",
    "Lado EHIIII KHA TERO LAGI SWEET MESSAGE DINXU SOCHYA HOLAS VALU RANDI BESYA",
    "Lil JHola ko London vanne gett sun din ramro hunxa tero",
    "Your love is all Ill ever need",
    "Thank god I found you",
    "Bra Kholo toh Rimjim Rimjim geet sun dherai bideshi sunne haina muji",
    "I love you to the moon and back",
    "San ka punta? To the moon, roadtrip, broom broom",
    "No regrets, just love",
    "Sathi J ho Tmi nai HO",
    "Wild Boring Manxe ho yar tmi",
  ]
  const textEl = document.querySelector(".textMessage")
  textEl.textContent = messages[Math.floor( Math.random()*messages.length )]
})