import Portifolio from '../../assets/projects/portifolio.png'
import Drikkekalkulatoren from "../../assets/projects/drikkekalkulatoren.png"
import Rongve1 from "../../assets/projects/rongve1.png"
import Rongve2 from "../../assets/projects/rongve2.png"
import Rongve3 from "../../assets/projects/rongve3.png"
import WebnowAdmin from "../../assets/projects/webnowadmin.png"

export const projects = [
    {
      index: 0,
      title: "PORTEFØLJE",
      description: "Alle trenger en portefølje, så hvorfor ikke lage en selv? Jeg har laget denne porteføljen for å vise frem mine prosjekter, og for å vise frem meg selv. Du er faktisk på denne nettsiden akkurat nå!",
      designDescription: "Jeg gikk for en pixel-art design, fordi jeg synes det er kult. Jeg brukte DallE AI for å lage pixel-art bildene, og jeg brukte React Spring for å lage animasjonene.",
      tools: ["HTML", "CSS", "JavaScript", "React.js", "TailwindCSS", "React Router Dom", "React Spring", "DallE AI"],
      image: Portifolio,
      link: "https://olehalv.dev",
      learned: "Jeg lærte mye om React Spring, og jeg lærte også om DallE AI."
    },
    {
      index: 1,
      title: "DRIKKEKALKULATOREN",
      description: "Drikkekalkulatoren er et prosjekt jeg lagde med hjelp av noen kompiser for å lære mer om React.js og utvikling av nettsider generelt. Det startet med en idé fra en kompis som jeg brakte til live ved hjelp av mine utviklingsferdigheter. Drikkekalkulatoren er en nettside hvor du kan regne pris og promille på drikkevarer. Nettsiden har en egen selvlaget API og MongoDB database hvor alle drikkevarene er lagret.",
      designDescription: "Jeg gikk for en enkel bootstrap design, med en mørk bakgrunn og en lys tekst. Nettsiden ser litt gammeldags ut, men det er fordi jeg ville fokusere heller på funksjonalitet enn design.",
      tools: ["HTML", "CSS", "JavaScript", "React.js", "Bootstrap", "React Router Dom", "MongoDB", "Express.js", "Node.js"],
      image: Drikkekalkulatoren,
      learned: "Jeg lærte mye mer om React.js, og jeg lærte også om MongoDB, Express.js og Node.js."
    },
    {
      index: 2,
      title: "RONGVE APPEN",
      description: "Dette er en app som jeg lagde med en kompis for sportsbutikken Rongve. Appen er for medlemmer av sportsbutikken, hvor de kan se klubbene de er i og hvilke rabatter de har. Appen er laget i React Native med Firebase som backend, og er tilgjengelig på både iOS og Android.",
      designDescription: "Vi følgte Rongve sin designguide, og lagde en app som var enkel å bruke og som så bra ut. Vi brukte React Native Elements for å lage designet.",
      tools: ["JavaScript", "React Native", "React Native Elements", "Firebase", "Expo", "Figma"],
      image: [Rongve1, Rongve2, Rongve3],
      learned: "Jeg lærte mye om React Native, og jeg lærte også om Firebase og Expo."
    },
    {
      index: 3,
      title: "WEBNOW ADMIN",
      description: "Dette er en admin-side for Webnow. Webnow er en bedrift som snart skal startes opp av min en av mine venner. Dette er admin-siden for Rongve Appen, hvor adminstratorer kan legge og fjerne innlegg, legge til og fjerne trenerer, og legge til og fjerne klubber.",
      designDescription: "Jeg gikk for en veldig enkel design, med en mørk bakgrunn og en lys tekst. Jeg gjorde dette fordi jeg ville fokusere på funksjonalitet heller enn design, og ville bli ferdig med det så fort som mulig.",
      tools: ["HTML", "CSS", "JavaScript", "React.js", "Bootstrap", "React Router Dom", "Firebase"],
      image: WebnowAdmin,
      learned: "Jeg lærte enda mer om React.js, og jeg lærte også enda mer om Firebase."
    }
  ]