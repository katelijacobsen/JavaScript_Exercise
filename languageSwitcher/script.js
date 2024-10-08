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
      {
        article:
          "Bei einem Kinobesuch lernt Frau Brücker den Bootsmann Hermann Bremer kennen, sucht zusammen mit ihm in einem Luftschutzkeller Schutz und nimmt ihn nach der Entwarnung mit zu sich nach Hause, wo er auch als Fahnenflüchtiger bleibt. Sie ist verheiratet und hat zwei Kinder, 16 und 20 Jahre alt. Er ist verheiratet und hat ein neugeborenes Kind. Diese Tatsachen verschweigt er ihr allerdings, was sie später immer wieder als Ausflucht dafür benutzen wird, ihm ihrerseits das Kriegsende verschwiegen zu haben. Bremer versteckt sich in Lena Brückers Wohnung. An den Abenden und nachts widmen sie sich ihrer Liebe. Obwohl Bremer vom Fenster aus den Einmarsch der Engländer sehen kann, dichtet er sich eine Wunschwelt, in der die Engländer mit den Deutschen gemeinsam gegen die Russen ziehen. Zu Bremers Konstrukt muss Lena Brücker nur einige „Notlügen“ beisteuern.",
        location: ".paragraph-text-1",
      },
      {
        article:
          "Bei einem Kinobesuch lernt Frau Brücker den Bootsmann Hermann Bremer kennen, sucht zusammen mit ihm in einem Luftschutzkeller Schutz und nimmt ihn nach der Entwarnung mit zu sich nach Hause, wo er auch als Fahnenflüchtiger bleibt. Sie ist verheiratet und hat zwei Kinder, 16 und 20 Jahre alt. Er ist verheiratet und hat ein neugeborenes Kind. Diese Tatsachen verschweigt er ihr allerdings, was sie später immer wieder als Ausflucht dafür benutzen wird, ihm ihrerseits das Kriegsende verschwiegen zu haben. Bremer versteckt sich in Lena Brückers Wohnung. An den Abenden und nachts widmen sie sich ihrer Liebe. Obwohl Bremer vom Fenster aus den Einmarsch der Engländer sehen kann, dichtet er sich eine Wunschwelt, in der die Engländer mit den Deutschen gemeinsam gegen die Russen ziehen. Zu Bremers Konstrukt muss Lena Brücker nur einige „Notlügen“ beisteuern.",
        location: ".paragraph-text-2",
      },
      {
        article:
          "Bei einem Kinobesuch lernt Frau Brücker den Bootsmann Hermann Bremer kennen, sucht zusammen mit ihm in einem Luftschutzkeller Schutz und nimmt ihn nach der Entwarnung mit zu sich nach Hause, wo er auch als Fahnenflüchtiger bleibt. Sie ist verheiratet und hat zwei Kinder, 16 und 20 Jahre alt. Er ist verheiratet und hat ein neugeborenes Kind. Diese Tatsachen verschweigt er ihr allerdings, was sie später immer wieder als Ausflucht dafür benutzen wird, ihm ihrerseits das Kriegsende verschwiegen zu haben. Bremer versteckt sich in Lena Brückers Wohnung. An den Abenden und nachts widmen sie sich ihrer Liebe. Obwohl Bremer vom Fenster aus den Einmarsch der Engländer sehen kann, dichtet er sich eine Wunschwelt, in der die Engländer mit den Deutschen gemeinsam gegen die Russen ziehen. Zu Bremers Konstrukt muss Lena Brücker nur einige „Notlügen“ beisteuern.",
        location: ".paragraph-text-3",
      },
      {
        article:
          "Bei einem Kinobesuch lernt Frau Brücker den Bootsmann Hermann Bremer kennen, sucht zusammen mit ihm in einem Luftschutzkeller Schutz und nimmt ihn nach der Entwarnung mit zu sich nach Hause, wo er auch als Fahnenflüchtiger bleibt. Sie ist verheiratet und hat zwei Kinder, 16 und 20 Jahre alt. Er ist verheiratet und hat ein neugeborenes Kind. Diese Tatsachen verschweigt er ihr allerdings, was sie später immer wieder als Ausflucht dafür benutzen wird, ihm ihrerseits das Kriegsende verschwiegen zu haben. Bremer versteckt sich in Lena Brückers Wohnung. An den Abenden und nachts widmen sie sich ihrer Liebe. Obwohl Bremer vom Fenster aus den Einmarsch der Engländer sehen kann, dichtet er sich eine Wunschwelt, in der die Engländer mit den Deutschen gemeinsam gegen die Russen ziehen. Zu Bremers Konstrukt muss Lena Brücker nur einige „Notlügen“ beisteuern.",
        location: ".paragraph-text-4",
      },
      {
        article:
          "Bei einem Kinobesuch lernt Frau Brücker den Bootsmann Hermann Bremer kennen, sucht zusammen mit ihm in einem Luftschutzkeller Schutz und nimmt ihn nach der Entwarnung mit zu sich nach Hause, wo er auch als Fahnenflüchtiger bleibt. Sie ist verheiratet und hat zwei Kinder, 16 und 20 Jahre alt. Er ist verheiratet und hat ein neugeborenes Kind. Diese Tatsachen verschweigt er ihr allerdings, was sie später immer wieder als Ausflucht dafür benutzen wird, ihm ihrerseits das Kriegsende verschwiegen zu haben. Bremer versteckt sich in Lena Brückers Wohnung. An den Abenden und nachts widmen sie sich ihrer Liebe. Obwohl Bremer vom Fenster aus den Einmarsch der Engländer sehen kann, dichtet er sich eine Wunschwelt, in der die Engländer mit den Deutschen gemeinsam gegen die Russen ziehen. Zu Bremers Konstrukt muss Lena Brücker nur einige „Notlügen“ beisteuern.",
        location: ".paragraph-text-5",
      },
      {
        article:
          "Bei einem Kinobesuch lernt Frau Brücker den Bootsmann Hermann Bremer kennen, sucht zusammen mit ihm in einem Luftschutzkeller Schutz und nimmt ihn nach der Entwarnung mit zu sich nach Hause, wo er auch als Fahnenflüchtiger bleibt. Sie ist verheiratet und hat zwei Kinder, 16 und 20 Jahre alt. Er ist verheiratet und hat ein neugeborenes Kind. Diese Tatsachen verschweigt er ihr allerdings, was sie später immer wieder als Ausflucht dafür benutzen wird, ihm ihrerseits das Kriegsende verschwiegen zu haben. Bremer versteckt sich in Lena Brückers Wohnung. An den Abenden und nachts widmen sie sich ihrer Liebe. Obwohl Bremer vom Fenster aus den Einmarsch der Engländer sehen kann, dichtet er sich eine Wunschwelt, in der die Engländer mit den Deutschen gemeinsam gegen die Russen ziehen. Zu Bremers Konstrukt muss Lena Brücker nur einige „Notlügen“ beisteuern.",
        location: ".paragraph-text-6",
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
      {
        article:
          "Ved et kinobesøg lærer fru Brücker bootmanden Hermann Bremer at kende, søger sammen med ham beskyttelse i et luftskudskjold og tager ham med hjem efter faretruslen er ophævet, hvor han også forbliver som desertør. Hun er gift og har to børn, 16 og 20 år gamle. Han er gift og har et nyfødt barn. Disse fakta skjuler han for hende, hvilket hun senere gentagne gange vil bruge som en undskyldning for, at hun selv har skjult krigens afslutning for ham. Bremer gemmer sig i Lena Brückers lejlighed. Om aftenen og natten giver de sig hen til deres kærlighed. Selvom Bremer kan se de engelske tropper marchere ind fra vinduet, digter han sig en ønskeverden, hvor englænderne går sammen med tyskerne mod russerne. Til Bremers konstruktion skal Lena Brücker kun bidrage med nogle 'nødløgne'.",
        location: ".paragraph-text-1",
      },
      {
        article:
          "Da Lena Brücker ser billeder af massemordet på jøderne i avisen og fortæller Bremer dette lidt ændret, kan hun ikke holde sig tilbage. Hun råber ad Bremer og fortæller ham, at krigen er tabt. Hun løber ud og er ufatteligt ked af det. Senere, da hun kommer tilbage, er Bremer væk.",
        location: ".paragraph-text-2",
      },
      {
        article:
          "Efter krigen må Lena Brücker finde en ny metode til at overleve, og i løbet af hendes bestræbelser og som følge af adskillige komplikationer og tilfældigheder opdager hun tilberedningen af en tomatbaseret currysauce. Da hun ønskede at blive selvstændig, byttede hun for eksempel Bremers ryttermærke mod et par ketchup-flasker og købte også currypulver, men tabte sine nyerhvervelser på vej hjem. Hun smager den vidunderligt velsmagende sammensætning af ketchup og curry og udvikler opskriften på 'Currywurst', som hun sælger som sit varemærke i pølsevognen. Oplevelserne med Bremer har sat en stopper for hendes kærlighedsmuligheder, og pølsevognen bliver grundlaget for hendes videre levebrød.",
        location: ".paragraph-text-3",
      },
      {
        article:
          "Da fortælleren vil besøge fru Brücker for sidste gang, får han at vide, at hun er død. Fru Brücker efterlader ham den strikkede trøje og den originale opskrift på currywurst.",
        location: ".paragraph-text-4",
      },
      {
        article:
          "Af stor symbolsk værdi er motivet med strikningen: Hovedpersonen Lena Brücker fremstiller i løbet af fortællingen en blå trøje, hvis farve symboliserer hendes forbindelse til Bremer. Læseren får med den fremadskridende handling at vide, at hun af nostalgiske grunde forsøger at strikke den også blå uniform fra sin tidligere elskede. Med færdiggørelsen af trøjen slutter historien om Bremer og Lena Brücker - ligesom rammehandlingen i værket.",
        location: ".paragraph-text-5",
      },
      {
        article:
          "I novellen forbindes de store politiske begivenheder med de private motiver for hovedpersonerne. Den kvinde, der er blevet selvstændig under krigen, tager i starten sin tilbagevendende ægtefælle ind i husstanden igen, men smider ham snart ud og klarer sig videre med sine børn, men uden manden. Det beskrives, at efterkrigstiden ikke nødvendigvis skulle være en genopbygning, men at der også opstod nye sociale strukturer. Om opdagelsen af currywurst faktisk skete som beskrevet, er underordnet.",
        location: ".paragraph-text-6",
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
