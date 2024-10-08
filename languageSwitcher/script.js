"use strict";

//Object
const texts = {
  de: {
    texts: [
      {
        title: "Die Entdeckung der Currywurst",
        location: ".header-text",
      },
      {
        article:
          "Ein nicht mehr ganz junger Mann fährt nach Hamburg, der Stadt seiner Kindheit. Dort besucht er siebenmal Frau Brücker, die ehemalige Besitzerin einer Imbissbude, im Altenwohnheim und lässt sich von ihr eine längere Episode ihres Lebens erzählen",
        location: ".paragraph-text",
      },
    ],
  },
  dk: {
    texts: [
      {
        title: "Opdagelsen af Currywurst",
        location: ".header-text",
      },
      {
        article:
          "En ikke helt ung mand kører til Hamburg, byen fra sin barndom. Der besøger han syv gange fru Brücker, den tidligere ejer af en pølsevogn, i plejehjemmet og lader hende fortælle ham en længere episode af sit liv",
        location: ".paragraph-text",
      },
    ],
  },
};

function updateContent(language) {
  texts[language].texts.forEach((text) => {
    const element = document.querySelector(text.location);
    if (element) {
      element.textContent = text.article || text.title;
    }
  });
}

function toggleLanguage() {
  let languageSwitcher = document.getElementById("language-toggle");
  if (languageSwitcher.checked) {
    updateContent("de");
    languageSwitcher.labels[0].textContent = "";
  } else {
    updateContent("dk");
    languageSwitcher.labels[0].textContent = "";
  }
}

//Default
updateContent("dk");
