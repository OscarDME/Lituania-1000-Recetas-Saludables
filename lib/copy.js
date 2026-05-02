// lib/copy.js — VISAS matomas nukreipiamojo puslapio (landing page) turinys.
// Visi teksto pakeitimai atliekami čia. Komponentai nuskaito duomenis tik iš šio objekto.

export const copy = {
  metadata: {
    title: "1000 Sveikų receptų 2.0",
    description:
      "1000 Sveikų receptų 2.0 diabetikams: skanūs, lengvai paruošiami ir sukurti specialiai cukraus kiekiui kraujyje kontroliuoti. Specialus pasiūlymas: 8.90 € + 5 nemokami priedai.",
    lang: "lt",
  },

  brand: {
    name: "",
    tagline: "",
  },

  hero: {
    banner: "ŠIS PASIŪLYMAS IR NEMOKAMI PRIEDAI GALIOJA TIK:",
    timerLabels: { days: "Dienos", hours: "Valandos", minutes: "Min.", seconds: "Sek." },
    kicker: "Daugiau nei 2 000 žmonių jau pakeitė savo gyvenimą",
    headlinePre: "Daugiau nei 2 000 žmonių",
    headlineHighlight: "pagerino savo sveikatą",
    headlinePost: "mūsų 1000 receptų dėka",
    subheadline: "Diabetas – ne priežastis atsisakyti skanaus maisto!",
    supporting:
      "Pagerink savo sveikatą ir mėgaukis nuostabiais skoniais su mūsų 1000 sveikų receptų 2.0.",
    cta: "Noriu knygos dabar! 📖",
    imageAlt: "Elektroninė knyga 1000 Sveikų receptų 2.0 diabetikams",
    trustChips: [
      { icon: "⭐", text: "+2 000 žmonių" },
      { icon: "🎁", text: "5 nemokami priedai" },
      { icon: "🛡️", text: "7 dienų garantija" },
    ],
  },

  story: {
    headlinePre: "Ar žinojai, kad prasta mityba gali padidinti",
    headlineHighlight: "diabeto komplikacijų",
    headlinePost: "riziką greitai ir visiškai nepastebimai?",
    intro:
      "Kiekvienas kąsnis yra svarbus. Tai, ką valgai šiandien, nulems, kaip jausiesi rytoj. Gyvenant su diabetu, mažos klaidos kaupiasi tyliai ir nepastebimai.",
    problemsLead: "Štai su kokiomis problemomis susidursi, jei ignoruosi savo mitybą:",
    problems: [
      {
        title: "Staigūs cukraus kiekio kraujyje šuoliai",
        desc: "Prasta mityba gali sukelti staigius cukraus kiekio svyravimus, kurie ilgainiui pažeidžia nervus, akis ir inkstus.",
      },
      {
        title: "Svorio augimas",
        desc: "Nesveikas maistas dažnai veda prie antsvorio, o tai gali gerokai pabloginti diabeto eigą.",
      },
      {
        title: "Padidėjusi širdies ligų rizika",
        desc: "Prasti mitybos įpročiai didina širdies ir kraujagyslių ligų riziką – vieną dažniausių diabetikų mirtingumo priežasčių.",
      },
      {
        title: "Virškinimo sutrikimai",
        desc: "Tam tikri produktai gali sukelti maisto netoleravimą, vidurių užkietėjimą, pilvo pūtimą ir diskomfortą.",
      },
    ],
    visualImage: "/story-apple-donut.webp",
    visualImageAlt: "Vienoje rankoje žalias obuolys, kitoje – rožinė spurga: tavo pasirinkimai svarbūs",
    solutionBadge: "Sprendimas",
    solutionHeadline:
      "Nori išmokti maitintis skaniai ir sveikai, nepakenkiant savo organizmui?",
  },

  benefits: {
    forYouHeadline: "Ši elektroninė knyga sukurta tau, jeigu...",
    forYouItems: [
      {
        icon: "Heart",
        title: "Sergi diabetu arba rūpiniesi žmogumi, kuris juo serga",
        desc: "Atrasi receptus, padedančius kontroliuoti cukraus kiekį, neprarandant valgymo malonumo.",
      },
      {
        icon: "Sparkles",
        title: "Nori gaminti sveikai ir be vargo",
        desc: "Sveika mityba neturi būti sudėtinga: pateikiame trumpus ir aiškius žingsnius.",
      },
      {
        icon: "Users",
        title: "Ieškai skanių ir paprastų receptų visai šeimai",
        desc: "Patiekalai, kuriais mėgausis visi namiškiai, o ne tik diabetu sergantis žmogus.",
      },
    ],
    headline: "Ką gausi su 1000 Sveikų receptų 2.0",
    items: [
      {
        icon: "ChefHat",
        title: "Sveikus ir skanius receptus",
        desc: "Kuriuos tavo šeima pamils kiekvieno valgio metu.",
      },
      {
        icon: "ListChecks",
        title: "Išsamias instrukcijas žingsnis po žingsnio",
        desc: "Lengvai suprantamas net ir virtuvės naujokams.",
      },
      {
        icon: "ShoppingBasket",
        title: "Lengvai prieinamus ingredientus",
        desc: "Kuriuos rasi bet kuriame artimiausiame prekybos centre.",
      },
      {
        icon: "Lightbulb",
        title: "Patyrusių šefų patarimus ir gudrybes",
        desc: "Kad gamintum užtikrintai ir atskleistum geriausius skonius.",
      },
      {
        icon: "Apple",
        title: "Atsakingai parinktas maistines medžiagas",
        desc: "Išmoksi duoti savo kūnui tai, ko jam iš tikrųjų reikia.",
      },
      {
        icon: "Wheat",
        title: "Angliavandenių kiekio kontrolę",
        desc: "Nereikės aukoti nei skonio, nei maisto įvairovės.",
      },
      {
        icon: "Activity",
        title: "Stabilų cukraus kiekį kraujyje",
        desc: "Patiekalai, padėsiantys viską griežtai kontroliuoti.",
      },
      {
        icon: "HeartPulse",
        title: "Geresnę bendrą savijautą",
        desc: "Daugiau energijos, geresnis virškinimas ir aukštesnė gyvenimo kokybė.",
      },
    ],
    socialProof:
      "Su 1000 Sveikų receptų 2.0 diabetikams tokie patys žmonės kaip tu jau sugebėjo suvaldyti cukraus kiekį kraujyje, numesti nereikalingus kilogramus ir susigrąžinti gyvenimo džiaugsmą.",
  },

  features: {
    headline: "Kas sudaro šią elektroninę knygą?",
    subheadline: "Viskas, ko reikia, norint maitintis skaniai, sveikai ir be jokio streso.",
    items: [
      {
        icon: "Utensils",
        title: "Skanūs ir sveiki receptai",
        desc: "Didžiulė subalansuotų ir maistingų patiekalų įvairovė – nuo pietų ir vakarienių iki sveikų padažų bei kremų.",
      },
      {
        icon: "BookOpen",
        title: "Sveiko maisto diabetikams gaminimo pagrindai",
        desc: "Sužinok, kaip šie receptai pritaikyti būtent tavo poreikiams.",
      },
      {
        icon: "Lightbulb",
        title: "Praktiški kulinarijos patarimai",
        desc: "Atrask naudingų gudrybių, kurios palengvins ir pavers gaminimą tikru malonumu.",
      },
      {
        icon: "Replace",
        title: "Sveikų alternatyvų gidas",
        desc: "Suprask, kurie produktai yra tavo draugai, ir kuo pakeisti žalingą maistą.",
      },
      {
        icon: "Gift",
        title: "Papildomos naudos ir privilegijos",
        desc: "Įsigijęs knygą gausi išskirtinių dovanų ir prieigą prie mūsų Privilegijų klubo.",
      },
    ],
  },

  bonuses: {
    badge: "NEMOKAMI PRIEDAI",
    headline: "Ribotą laiką gausi šias 5 dovanas",
    subheadline: "Jas pridedame visiškai nemokamai, įsigijus elektroninę knygą jau šiandien.",
    freeLabel: "NEMOKAMAI!",
    items: [
      {
        image: "/bonuses/sopas.webp",
        tag: "1 PRIEDAS",
        title: "E. knyga: 100 sveikų sriubų",
        desc: "100 šildančių sriubų receptų, kuriuose mažai angliavandenių ir cukraus.",
        value: "15 €",
      },
      {
        image: "/bonuses/batidos.webp",
        tag: "2 PRIEDAS",
        title: "E. knyga: 67 sveikų glotnučių",
        desc: "67 gaivių glotnučių receptų su mažu angliavandenių ir cukraus kiekiu.",
        value: "15 €",
      },
      {
        image: "/bonuses/snacks.webp",
        tag: "3 PRIEDAS",
        title: "E. knyga: 100 sveikų užkandžių",
        desc: "100 greitų ir sveikų užkandžių idėjų sergantiems diabetu.",
        value: "15 €",
      },
      {
        image: "/bonuses/planificador.webp",
        tag: "4 PRIEDAS",
        title: "E. knyga: Mitybos planuoklis",
        desc: "Praktiškas planuoklis, padėsiantis lengvai suorganizuoti dienos meniu.",
        value: "15 €",
      },
      {
        image: "/bonuses/membresia.webp",
        tag: "5 PRIEDAS",
        title: "Privilegijų klubas",
        desc: "Gausi būsimus atnaujinimus, 7 dienų garantiją ir nuolaidas kitiems mūsų produktams.",
        value: "20 €",
      },
    ],
    totalLabel: "Bendra priedų vertė: 80 € — Šiandien: NEMOKAMAI",
    footer: "Viskas pristatoma skaitmeniniu formatu iškart po apmokėjimo.",
  },

  testimonials: {
    headline: "Ką sako mūsų klientai",
    subheadline:
      "Tikri žmonės dalinasi savo atsiliepimais apie 1000 Sveikų receptų 2.0 diabetikams.",
    productLabel: "1000 Sveikų receptų 2.0 diabetikams",
    reviewedLabel: "parašė atsiliepimą apie",
    rating: "5★",
    actions: { like: "Patinka", comment: "Komentuoti", share: "Dalintis" },
    items: [
      {
        name: "Petras Petrauskas",
        text:
          "Ieškojau paprastų receptų su lengvai randamais produktais. Šioje knygoje gausu neįtikėtinai skanių patiekalų, kuriuos paruošti užtenka vos kelių žingsnių. Rekomenduoju 100%!",
      },
      {
        name: "Marija Kazlauskienė",
        text:
          "Mano didžiausia baimė diagnozavus diabetą buvo ta, kad nebegalėsiu skaniai valgyti. Receptai tikrai puikūs, o kadangi knyga skaitmeninė, patogu ją turėti telefone tiesiog apsiperkant prekybos centre.",
      },
      {
        name: "Julija Jocienė",
        text:
          "Kaip diabetu sergančio vaiko mamai, rasti maistą, kuris patiktų visai šeimai, buvo tikras iššūkis. Ši elektroninė knyga suteikė mums įvairovės ir lengvumo. Receptai tapo tikru hitu mūsų namuose.",
      },
      {
        name: "Giedrė Žilinskienė",
        text:
          "Kai mano vyrui diagnozavo diabetą, ši knyga man nepaprastai padėjo. Paprasti receptai, jokių keistų ingredientų ir labai skanu. Nuoširdžiai rekomenduoju!",
      },
      {
        name: "Ona Navickienė",
        text:
          "Rekomenduoju knygą: skanūs ir lengvai sekami receptai. Ačiū už nemokamus priedus, o mitybos planuoklis idealiai tinka tiksliam dietos sekimui.",
      },
      {
        name: "Jonas Urbonas",
        text:
          "Ši knyga pakeitė mano gaminimo įpročius. Anksčiau gamindavau sau atskirai nuo šeimos. Dabar visi valgome tą patį be jokių komplikacijų. Tūkstantis ačiū!",
      },
    ],
    cta: "NORIU PRADĖTI JAU ŠIANDIEN",
  },

  finalCta: {
    preHeadline: "TAVO LAIKAS YRA DABAR",
    urgencyTop: "80% NUOLAIDA",
    headline:
      "ĮSIGYK MŪSŲ SKAITMENINĘ KNYGĄ ŠIANDIEN SU NEĮTIKĖTINA NUOLAIDA!",
    subUrgency:
      "Daugiau nei 2 000 žmonių jau pakeitė savo sveikatą šių receptų dėka. Šiandien – tavo eilė.",
    bundleList: [
      "E. knyga: 1000 Sveikų receptų 2.0 diabetikams",
      "1 Priedas — 100 sveikų sriubų",
      "2 Priedas — 67 sveikų glotnučių",
      "3 Priedas — 100 sveikų užkandžių",
      "4 Priedas — Mitybos planuoklis",
      "5 Priedas — Privilegijų klubas",
    ],
    imageAlt: "Pilnas paketas 1000 Sveikų receptų 2.0 + 5 priedai",
    guaranteeText:
      "Vis dar dvejoji? Nesijaudink, čia nėra jokios rizikos! Tavo sveikata to verta. 7 dienų pasitenkinimo garantija.",
    guaranteeImageAlt: "Garantija",
    regularPriceLabel: "Vietoj",
    regularPrice: "25.00 €",
    offerPrice: "8.90 €",
    discountBadge: "80% NUOLAIDA",
    urgencyText: "MOKĖJIMAS BUS RODOMAS TAVO VIETINE VALIUTA",
    bottomUrgency: "Šis pasiūlymas baigsis, kai laikmatis pasieks nulį.",
    button: "PASINAUDOK ŠIA GALIMYBE ŠIANDIEN",
    trustRow: "100% saugus mokėjimas · Momentinė prieiga · 7 dienų garantija",
  },

  faq: {
    authorRole: "Sveikos mitybos komanda",
    authorHeadline: "Skanus maistas, kuris rūpinasi tavo sveikata",
    authorBio:
      "Mes tikime, kad diabetas neturi atimti valgymo malonumo. Kiekvienas receptas sukurtas taip, kad galėtum mėgautis maistu be kaltės jausmo ir išlaikyti visišką gliukozės kontrolę.",
    authorImageAlt: "Mūsų komanda",
    worksHeadline: "Kam ši elektroninė knyga NĖRA skirta?",
    doesntWork: [
      "Žmonėms, kurie nori valgyti nesveikai ir išvengti pasekmių",
      "Žmonėms, kurie nenori išbandyti naujų skonių",
      "Žmonėms, kurie tikisi rezultatų, bet nenori nieko keisti savo rutinoje",
    ],
    worksText:
      "Tačiau, jei nori tikrų, lengvai paruošiamų, skanių ir tavo diabetui pritaikytų receptų – ši knyga sukurta būtent tau.",
    headline: "Dažniausiai užduodami klausimai",
    subheadline: "Viskas, ką tau reikia žinoti prieš pradedant.",
    items: [
      {
        q: "Kaip gausiu knygą po apmokėjimo?",
        a: "Iškart po pirkimo gausi el. laišką su atsisiuntimo nuoroda. Ją galėsi skaityti telefone, planšetėje ar kompiuteryje.",
      },
      {
        q: "Kokiu formatu pateikiama elektroninė knyga?",
        a: "Knyga yra aukštos kokybės PDF formatu, pritaikyta patogiai skaityti bet kokiame įrenginyje, tad jos spausdinti nebūtina.",
      },
      {
        q: "Ar receptai tinka ir 1-ojo, ir 2-ojo tipo diabetikams?",
        a: "Taip, receptai specialiai sukurti padėti kontroliuoti cukraus kiekį kraujyje. Visgi, visada rekomenduojame pasitarti su savo gydytoju dėl individualaus mitybos plano.",
      },
      {
        q: "Ar man prireiks keistų arba brangių ingredientų?",
        a: "Ne. Visiems receptams naudojami produktai, kuriuos lengva rasti ir nusipirkti bet kuriame prekybos centre už prieinamą kainą.",
      },
      {
        q: "Ar taikoma garantija?",
        a: "Taip. Suteikiame 7 dienų pilną garantiją. Jei nebūsi patenkintas, grąžinsime 100% tavo pinigų be jokių papildomų klausimų.",
      },
      {
        q: "Ar galiu mokėti savo vietine valiuta?",
        a: "Taip. Pirkimo metu mokėjimo suma bus automatiškai perskaičiuota ir rodoma tavo vietine valiuta.",
      },
    ],
  },

  closing: {
    kicker: "PASKUTINIS ŽINGSNIS",
    headline: "Tavo sveikata nebegali laukti",
    subheadline:
      "Jau šiandien gali pradėti valgyti skaniai, nekenkdamas savo organizmui dėl diabeto. Rytoj ši kaina gali būti nepasiekiama.",
    regularPrice: "25.00 €",
    offerPrice: "8.90 €",
    ctaLabel: "PASINAUDOK ŠIA GALIMYBE ŠIANDIEN",
    trustRow: "Saugus mokėjimas · Momentinė prieiga · 7 dienų garantija",
  },

  footer: {
    brand: "CREARIS",
    copyright: "Autorių teisės © crearis.online ® 2026",
    disclaimer:
      "Ši svetainė nepriklauso „Facebook“ svetainei ar „Facebook Inc.“. Be to, šios svetainės niekaip neremia ir nepatvirtina „Facebook“.",
    trademark: "FACEBOOK yra registruotasis FACEBOOK, Inc. prekės ženklas.",
  },
};