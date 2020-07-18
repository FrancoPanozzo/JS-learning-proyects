// DATA
const cardDataArray = [
  {
    character: "Mélina",
    image: "https://robohash.org/eaquenobislibero.png?size=100x100&set=set1",
    message:
      "curabitur convallis duis consequat dui nec nisi volutpat eleifend donec ut dolor morbi vel lectus in quam fringilla rhoncus mauris enim leo rhoncus sed vestibulum sit amet cursus",
  },
  {
    character: "Méthode",
    image:
      "https://robohash.org/faceresedexercitationem.png?size=100x100&set=set1",
    message:
      "phasellus id sapien in sapien iaculis congue vivamus metus arcu adipiscing molestie hendrerit at vulputate vitae nisl aenean lectus pellentesque eget nunc donec quis",
  },
  {
    character: "Tú",
    image: "https://robohash.org/omnisdoloret.png?size=100x100&set=set1",
    message:
      "bibendum felis sed interdum venenatis turpis enim blandit mi in porttitor pede justo eu massa donec",
  },
  {
    character: "Lucrèce",
    image:
      "https://robohash.org/magnamvoluptatemquis.png?size=100x100&set=set1",
    message:
      "ac nibh fusce lacus purus aliquet at feugiat non pretium quis lectus suspendisse potenti in eleifend quam a odio in hac habitasse platea dictumst",
  },
  {
    character: "Lèi",
    image:
      "https://robohash.org/etblanditiisrecusandae.png?size=100x100&set=set1",
    message:
      "hendrerit at vulputate vitae nisl aenean lectus pellentesque eget nunc donec quis orci eget orci vehicula condimentum curabitur in libero ut massa volutpat convallis morbi odio",
  },
  {
    character: "Åke",
    image: "https://robohash.org/utenimperspiciatis.png?size=100x100&set=set1",
    message:
      "volutpat eleifend donec ut dolor morbi vel lectus in quam fringilla rhoncus mauris enim leo",
  },
  {
    character: "Camélia",
    image:
      "https://robohash.org/officiaassumendatempora.png?size=100x100&set=set1",
    message:
      "id massa id nisl venenatis lacinia aenean sit amet justo morbi ut odio cras mi",
  },
  {
    character: "Vérane",
    image: "https://robohash.org/autvoluptasquasi.png?size=100x100&set=set1",
    message:
      "ultrices mattis odio donec vitae nisi nam ultrices libero non mattis pulvinar nulla pede ullamcorper",
  },
  {
    character: "Mélys",
    image:
      "https://robohash.org/quodaccusantiumnesciunt.png?size=100x100&set=set1",
    message:
      "diam neque vestibulum eget vulputate ut ultrices vel augue vestibulum ante ipsum primis in faucibus orci",
  },
  {
    character: "Andrée",
    image: "https://robohash.org/etdolorumassumenda.png?size=100x100&set=set1",
    message:
      "lacinia aenean sit amet justo morbi ut odio cras mi pede malesuada in imperdiet et commodo vulputate justo in blandit ultrices enim lorem ipsum dolor",
  },
  {
    character: "Andréanne",
    image: "https://robohash.org/laboriosamsintquis.png?size=100x100&set=set1",
    message:
      "parturient montes nascetur ridiculus mus etiam vel augue vestibulum rutrum rutrum neque aenean auctor gravida sem praesent id massa id nisl",
  },
  {
    character: "Mà",
    image: "https://robohash.org/veniamvelamet.png?size=100x100&set=set1",
    message:
      "posuere metus vitae ipsum aliquam non mauris morbi non lectus aliquam sit amet diam in magna bibendum imperdiet nullam orci pede venenatis non sodales sed tincidunt eu felis fusce",
  },
  {
    character: "Illustrée",
    image: "https://robohash.org/cumqueimpeditenim.png?size=100x100&set=set1",
    message:
      "vestibulum sed magna at nunc commodo placerat praesent blandit nam nulla integer pede justo lacinia eget tincidunt eget tempus vel pede morbi porttitor lorem id ligula suspendisse",
  },
  {
    character: "Torbjörn",
    image: "https://robohash.org/dolorumutet.png?size=100x100&set=set1",
    message:
      "nulla elit ac nulla sed vel enim sit amet nunc viverra dapibus nulla suscipit ligula in",
  },
  {
    character: "Gaétane",
    image: "https://robohash.org/fugiatautemmodi.png?size=100x100&set=set1",
    message:
      "dapibus duis at velit eu est congue elementum in hac habitasse platea dictumst morbi vestibulum velit id pretium iaculis diam erat fermentum justo nec",
  },
  {
    character: "Mélodie",
    image:
      "https://robohash.org/voluptatemtotamdeleniti.png?size=100x100&set=set1",
    message:
      "semper interdum mauris ullamcorper purus sit amet nulla quisque arcu libero rutrum ac lobortis vel dapibus at diam nam tristique tortor eu pede",
  },
  {
    character: "Måns",
    image: "https://robohash.org/isteiustocommodi.png?size=100x100&set=set1",
    message:
      "eu sapien cursus vestibulum proin eu mi nulla ac enim in tempor turpis nec euismod scelerisque quam turpis",
  },
  {
    character: "Naéva",
    image: "https://robohash.org/maioressitnumquam.png?size=100x100&set=set1",
    message:
      "cubilia curae duis faucibus accumsan odio curabitur convallis duis consequat dui nec nisi volutpat eleifend donec ut dolor morbi vel lectus in quam",
  },
  {
    character: "Eloïse",
    image: "https://robohash.org/culpadeseruntquo.png?size=100x100&set=set1",
    message:
      "dolor quis odio consequat varius integer ac leo pellentesque ultrices mattis odio donec vitae nisi nam ultrices libero non mattis pulvinar nulla pede ullamcorper augue a",
  },
  {
    character: "Réservés",
    image: "https://robohash.org/voluptateseosest.png?size=100x100&set=set1",
    message:
      "platea dictumst maecenas ut massa quis augue luctus tincidunt nulla mollis molestie lorem quisque ut erat curabitur gravida nisi at nibh in hac habitasse platea dictumst aliquam augue quam sollicitudin",
  },
  {
    character: "Ráo",
    image: "https://robohash.org/facereremmolestiae.png?size=100x100&set=set1",
    message:
      "vulputate justo in blandit ultrices enim lorem ipsum dolor sit amet consectetuer adipiscing elit proin interdum mauris non ligula pellentesque ultrices phasellus id sapien in sapien",
  },
  {
    character: "Réservés",
    image: "https://robohash.org/dignissimoseosvelit.png?size=100x100&set=set1",
    message:
      "interdum venenatis turpis enim blandit mi in porttitor pede justo eu massa donec dapibus duis at",
  },
  {
    character: "Séréna",
    image: "https://robohash.org/nostrumestquae.png?size=100x100&set=set1",
    message:
      "purus phasellus in felis donec semper sapien a libero nam dui proin leo odio porttitor id consequat in consequat ut",
  },
  {
    character: "Åke",
    image:
      "https://robohash.org/voluptatemrepellatatque.png?size=100x100&set=set1",
    message:
      "massa id lobortis convallis tortor risus dapibus augue vel accumsan tellus nisi eu orci mauris lacinia sapien quis libero nullam",
  },
  {
    character: "Mégane",
    image:
      "https://robohash.org/hicperferendisdolore.png?size=100x100&set=set1",
    message:
      "eget tempus vel pede morbi porttitor lorem id ligula suspendisse ornare consequat lectus in est risus auctor sed tristique in tempus sit amet sem fusce consequat nulla nisl",
  },
  {
    character: "Almérinda",
    image: "https://robohash.org/adquisquamut.png?size=100x100&set=set1",
    message:
      "hac habitasse platea dictumst aliquam augue quam sollicitudin vitae consectetuer eget rutrum at lorem integer tincidunt ante vel ipsum praesent blandit lacinia erat vestibulum",
  },
  {
    character: "Maëlle",
    image: "https://robohash.org/aspernaturnullaet.png?size=100x100&set=set1",
    message:
      "ut nulla sed accumsan felis ut at dolor quis odio consequat varius integer ac leo pellentesque ultrices mattis odio donec vitae nisi nam ultrices libero non mattis pulvinar nulla",
  },
  {
    character: "Méng",
    image: "https://robohash.org/velitofficiisodit.png?size=100x100&set=set1",
    message:
      "odio elementum eu interdum eu tincidunt in leo maecenas pulvinar lobortis est phasellus sit amet erat nulla tempus vivamus in felis eu sapien cursus",
  },
  {
    character: "Maéna",
    image: "https://robohash.org/idillovitae.png?size=100x100&set=set1",
    message:
      "erat id mauris vulputate elementum nullam varius nulla facilisi cras non velit nec nisi vulputate nonummy maecenas tincidunt lacus at velit vivamus vel nulla eget eros elementum pellentesque quisque",
  },
  {
    character: "Marie-thérèse",
    image:
      "https://robohash.org/reiciendisteneturvoluptas.png?size=100x100&set=set1",
    message:
      "massa id nisl venenatis lacinia aenean sit amet justo morbi ut odio cras mi pede malesuada in imperdiet et commodo vulputate justo in blandit ultrices enim lorem ipsum",
  },
  {
    character: "Åke",
    image: "https://robohash.org/nostrumrepellatut.png?size=100x100&set=set1",
    message:
      "molestie hendrerit at vulputate vitae nisl aenean lectus pellentesque eget nunc donec quis orci eget orci vehicula condimentum curabitur in libero",
  },
  {
    character: "Dù",
    image: "https://robohash.org/sedquamdelectus.png?size=100x100&set=set1",
    message:
      "augue luctus tincidunt nulla mollis molestie lorem quisque ut erat curabitur gravida nisi at nibh in",
  },
  {
    character: "Aimée",
    image:
      "https://robohash.org/numquamoptiovoluptatem.png?size=100x100&set=set1",
    message:
      "duis aliquam convallis nunc proin at turpis a pede posuere nonummy integer non velit donec diam neque vestibulum eget vulputate ut ultrices",
  },
  {
    character: "Kévina",
    image: "https://robohash.org/hicestofficia.png?size=100x100&set=set1",
    message:
      "ultrices posuere cubilia curae nulla dapibus dolor vel est donec odio justo sollicitudin ut suscipit a feugiat et eros vestibulum ac est lacinia nisi",
  },
  {
    character: "Faîtes",
    image: "https://robohash.org/maioresquaeratrerum.png?size=100x100&set=set1",
    message:
      "non sodales sed tincidunt eu felis fusce posuere felis sed lacus morbi sem mauris laoreet ut rhoncus aliquet pulvinar sed nisl nunc rhoncus dui",
  },
  {
    character: "Ráo",
    image: "https://robohash.org/accusamusquasquia.png?size=100x100&set=set1",
    message:
      "tempor convallis nulla neque libero convallis eget eleifend luctus ultricies eu nibh quisque id justo sit amet sapien dignissim vestibulum vestibulum ante ipsum primis in",
  },
  {
    character: "Cléopatre",
    image: "https://robohash.org/anobisab.png?size=100x100&set=set1",
    message:
      "curabitur convallis duis consequat dui nec nisi volutpat eleifend donec ut dolor morbi vel lectus in quam fringilla rhoncus mauris enim",
  },
  {
    character: "Médiamass",
    image: "https://robohash.org/suscipitoditiste.png?size=100x100&set=set1",
    message:
      "quam pede lobortis ligula sit amet eleifend pede libero quis orci nullam molestie nibh in lectus pellentesque",
  },
  {
    character: "Maëline",
    image: "https://robohash.org/essequiafuga.png?size=100x100&set=set1",
    message:
      "massa id lobortis convallis tortor risus dapibus augue vel accumsan tellus nisi eu orci mauris lacinia",
  },
  {
    character: "Nuó",
    image: "https://robohash.org/explicabononvero.png?size=100x100&set=set1",
    message:
      "magnis dis parturient montes nascetur ridiculus mus etiam vel augue vestibulum rutrum rutrum neque aenean auctor",
  },
  {
    character: "Valérie",
    image: "https://robohash.org/molestiaenobisquia.png?size=100x100&set=set1",
    message:
      "nulla mollis molestie lorem quisque ut erat curabitur gravida nisi at nibh in hac habitasse",
  },
  {
    character: "Nadège",
    image:
      "https://robohash.org/aliasexcepturiminima.png?size=100x100&set=set1",
    message:
      "ut volutpat sapien arcu sed augue aliquam erat volutpat in congue etiam justo etiam pretium iaculis justo in hac habitasse platea dictumst",
  },
  {
    character: "Bérangère",
    image:
      "https://robohash.org/fugaexercitationemaut.png?size=100x100&set=set1",
    message:
      "primis in faucibus orci luctus et ultrices posuere cubilia curae mauris viverra diam vitae quam suspendisse potenti nullam porttitor lacus at",
  },
  {
    character: "Anaé",
    image:
      "https://robohash.org/doloremquemagniatque.png?size=100x100&set=set1",
    message:
      "lacinia eget tincidunt eget tempus vel pede morbi porttitor lorem id ligula suspendisse ornare consequat lectus",
  },
  {
    character: "Séréna",
    image: "https://robohash.org/atqueblanditiisin.png?size=100x100&set=set1",
    message:
      "etiam justo etiam pretium iaculis justo in hac habitasse platea dictumst etiam faucibus cursus urna ut tellus nulla ut erat",
  },
  {
    character: "Gisèle",
    image: "https://robohash.org/placeatveniamfugit.png?size=100x100&set=set1",
    message:
      "libero ut massa volutpat convallis morbi odio odio elementum eu interdum eu tincidunt in leo maecenas pulvinar lobortis est",
  },
  {
    character: "Magdalène",
    image:
      "https://robohash.org/voluptatemtemporibusut.png?size=100x100&set=set1",
    message:
      "nulla pede ullamcorper augue a suscipit nulla elit ac nulla sed vel enim sit amet nunc viverra dapibus",
  },
  {
    character: "Liè",
    image:
      "https://robohash.org/atquequibusdamexplicabo.png?size=100x100&set=set1",
    message:
      "convallis nunc proin at turpis a pede posuere nonummy integer non velit donec diam neque vestibulum eget vulputate ut ultrices vel augue vestibulum ante ipsum primis in faucibus",
  },
  {
    character: "Aimée",
    image: "https://robohash.org/eacumquecum.png?size=100x100&set=set1",
    message:
      "justo lacinia eget tincidunt eget tempus vel pede morbi porttitor lorem id ligula suspendisse ornare consequat lectus in est risus auctor sed tristique in tempus",
  },
  {
    character: "Kuí",
    image:
      "https://robohash.org/molestiaeutrepudiandae.png?size=100x100&set=set1",
    message:
      "semper est quam pharetra magna ac consequat metus sapien ut nunc vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae mauris viverra diam vitae quam suspendisse",
  },
  {
    character: "Océane",
    image: "https://robohash.org/autexofficia.png?size=100x100&set=set1",
    message:
      "tortor duis mattis egestas metus aenean fermentum donec ut mauris eget massa tempor convallis nulla neque libero convallis eget eleifend luctus ultricies eu nibh quisque id justo sit amet",
  },
  {
    character: "Andrée",
    image: "https://robohash.org/eosdelenitiquisquam.png?size=100x100&set=set1",
    message:
      "metus arcu adipiscing molestie hendrerit at vulputate vitae nisl aenean lectus pellentesque eget nunc donec quis orci eget orci",
  },
  {
    character: "Anaïs",
    image: "https://robohash.org/quamrerumveniam.png?size=100x100&set=set1",
    message:
      "id nulla ultrices aliquet maecenas leo odio condimentum id luctus nec molestie sed justo pellentesque viverra pede ac",
  },
  {
    character: "Illustrée",
    image:
      "https://robohash.org/perferendisfacilisincidunt.png?size=100x100&set=set1",
    message:
      "pulvinar sed nisl nunc rhoncus dui vel sem sed sagittis nam congue risus semper porta volutpat quam pede lobortis",
  },
  {
    character: "Östen",
    image: "https://robohash.org/veroconsequaturaut.png?size=100x100&set=set1",
    message:
      "aliquam convallis nunc proin at turpis a pede posuere nonummy integer non velit donec diam neque vestibulum eget vulputate ut ultrices",
  },
  {
    character: "Célestine",
    image: "https://robohash.org/etharumest.png?size=100x100&set=set1",
    message:
      "enim in tempor turpis nec euismod scelerisque quam turpis adipiscing lorem vitae mattis nibh ligula nec sem duis",
  },
  {
    character: "Léonore",
    image:
      "https://robohash.org/asperioreseosoccaecati.png?size=100x100&set=set1",
    message:
      "quam pede lobortis ligula sit amet eleifend pede libero quis orci nullam molestie nibh in lectus pellentesque at nulla suspendisse potenti",
  },
  {
    character: "Mélodie",
    image:
      "https://robohash.org/sapienterecusandaesuscipit.png?size=100x100&set=set1",
    message:
      "curabitur gravida nisi at nibh in hac habitasse platea dictumst aliquam augue quam sollicitudin vitae consectetuer eget rutrum at lorem integer tincidunt ante vel ipsum praesent blandit lacinia erat",
  },
  {
    character: "Maïlys",
    image: "https://robohash.org/etestmagnam.png?size=100x100&set=set1",
    message:
      "velit donec diam neque vestibulum eget vulputate ut ultrices vel augue vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae",
  },
  {
    character: "Pò",
    image:
      "https://robohash.org/cupiditatecommodiperferendis.png?size=100x100&set=set1",
    message:
      "donec semper sapien a libero nam dui proin leo odio porttitor id consequat in consequat ut nulla sed accumsan felis ut",
  },
  {
    character: "Anaïs",
    image:
      "https://robohash.org/estdeseruntasperiores.png?size=100x100&set=set1",
    message:
      "hac habitasse platea dictumst morbi vestibulum velit id pretium iaculis diam erat fermentum justo nec condimentum neque sapien placerat ante nulla",
  },
  {
    character: "Maëlle",
    image:
      "https://robohash.org/totamlaborumdignissimos.png?size=100x100&set=set1",
    message:
      "a suscipit nulla elit ac nulla sed vel enim sit amet nunc viverra dapibus nulla suscipit ligula in lacus curabitur at ipsum ac tellus",
  },
  {
    character: "Annotée",
    image:
      "https://robohash.org/quibusdametprovident.png?size=100x100&set=set1",
    message:
      "justo pellentesque viverra pede ac diam cras pellentesque volutpat dui maecenas tristique est et tempus",
  },
  {
    character: "Gwenaëlle",
    image:
      "https://robohash.org/quaeratplaceatexplicabo.png?size=100x100&set=set1",
    message:
      "vestibulum rutrum rutrum neque aenean auctor gravida sem praesent id massa id nisl venenatis lacinia aenean sit amet justo morbi ut odio cras mi pede malesuada in imperdiet et",
  },
  {
    character: "Méline",
    image: "https://robohash.org/etdoloremolestiae.png?size=100x100&set=set1",
    message:
      "lectus pellentesque eget nunc donec quis orci eget orci vehicula condimentum curabitur in libero ut massa volutpat convallis morbi odio odio elementum eu interdum eu tincidunt",
  },
  {
    character: "Börje",
    image: "https://robohash.org/autsequitempora.png?size=100x100&set=set1",
    message:
      "lorem quisque ut erat curabitur gravida nisi at nibh in hac habitasse platea dictumst aliquam augue quam sollicitudin vitae",
  },
  {
    character: "Daphnée",
    image:
      "https://robohash.org/ducimuseligendilibero.png?size=100x100&set=set1",
    message:
      "turpis integer aliquet massa id lobortis convallis tortor risus dapibus augue vel accumsan tellus nisi eu orci mauris lacinia sapien quis libero nullam sit amet",
  },
  {
    character: "Gösta",
    image:
      "https://robohash.org/rerumprovidentnecessitatibus.png?size=100x100&set=set1",
    message:
      "ipsum dolor sit amet consectetuer adipiscing elit proin risus praesent lectus vestibulum quam sapien varius ut blandit non interdum in ante vestibulum ante ipsum primis in faucibus orci",
  },
  {
    character: "Rachèle",
    image: "https://robohash.org/consequaturessequi.png?size=100x100&set=set1",
    message:
      "felis sed interdum venenatis turpis enim blandit mi in porttitor pede justo eu massa donec dapibus",
  },
  {
    character: "Solène",
    image: "https://robohash.org/magnambeataeest.png?size=100x100&set=set1",
    message:
      "justo nec condimentum neque sapien placerat ante nulla justo aliquam quis turpis eget elit sodales scelerisque mauris",
  },
  {
    character: "Dorothée",
    image:
      "https://robohash.org/exercitationemvelsed.png?size=100x100&set=set1",
    message:
      "lectus in quam fringilla rhoncus mauris enim leo rhoncus sed vestibulum sit amet cursus id turpis integer aliquet massa id lobortis convallis tortor risus",
  },
  {
    character: "Néhémie",
    image: "https://robohash.org/numquamdelenitised.png?size=100x100&set=set1",
    message:
      "tincidunt in leo maecenas pulvinar lobortis est phasellus sit amet erat nulla tempus vivamus in felis eu sapien",
  },
  {
    character: "Bérengère",
    image:
      "https://robohash.org/assumendaconsequaturfuga.png?size=100x100&set=set1",
    message:
      "morbi odio odio elementum eu interdum eu tincidunt in leo maecenas pulvinar lobortis est phasellus sit amet erat nulla tempus vivamus in felis eu sapien cursus vestibulum proin",
  },
  {
    character: "Rébecca",
    image: "https://robohash.org/harumlaborenon.png?size=100x100&set=set1",
    message:
      "integer pede justo lacinia eget tincidunt eget tempus vel pede morbi porttitor lorem id ligula suspendisse ornare consequat lectus in est risus auctor sed",
  },
  {
    character: "Marie-hélène",
    image: "https://robohash.org/nobissedquae.png?size=100x100&set=set1",
    message:
      "vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae donec pharetra magna vestibulum aliquet ultrices erat tortor sollicitudin mi sit amet",
  },
  {
    character: "Michèle",
    image: "https://robohash.org/illoenimex.png?size=100x100&set=set1",
    message:
      "porttitor id consequat in consequat ut nulla sed accumsan felis ut at dolor quis odio consequat varius integer",
  },
  {
    character: "Léonie",
    image: "https://robohash.org/aasperioresodit.png?size=100x100&set=set1",
    message:
      "mauris sit amet eros suspendisse accumsan tortor quis turpis sed ante vivamus tortor duis mattis egestas metus",
  },
  {
    character: "Eléa",
    image:
      "https://robohash.org/aliquidexcepturialiquam.png?size=100x100&set=set1",
    message:
      "sociis natoque penatibus et magnis dis parturient montes nascetur ridiculus mus vivamus vestibulum sagittis sapien cum sociis natoque penatibus et magnis",
  },
  {
    character: "Maïlys",
    image: "https://robohash.org/quianullased.png?size=100x100&set=set1",
    message:
      "maecenas leo odio condimentum id luctus nec molestie sed justo pellentesque viverra pede ac diam cras pellentesque volutpat",
  },
  {
    character: "Maïté",
    image:
      "https://robohash.org/doloremquequidemipsa.png?size=100x100&set=set1",
    message:
      "ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae mauris viverra diam vitae quam suspendisse potenti nullam porttitor lacus at turpis donec posuere metus vitae ipsum aliquam",
  },
  {
    character: "Magdalène",
    image:
      "https://robohash.org/quasilaborumnesciunt.png?size=100x100&set=set1",
    message:
      "non mi integer ac neque duis bibendum morbi non quam nec dui luctus rutrum nulla tellus in sagittis",
  },
  {
    character: "Tán",
    image:
      "https://robohash.org/dolorelaboriosamiste.png?size=100x100&set=set1",
    message:
      "faucibus accumsan odio curabitur convallis duis consequat dui nec nisi volutpat eleifend donec ut dolor morbi vel lectus in quam fringilla rhoncus mauris enim leo rhoncus sed",
  },
  {
    character: "Mélanie",
    image:
      "https://robohash.org/dolorsimiliquenostrum.png?size=100x100&set=set1",
    message:
      "in eleifend quam a odio in hac habitasse platea dictumst maecenas ut massa quis augue luctus tincidunt nulla",
  },
  {
    character: "Angèle",
    image: "https://robohash.org/magnamina.png?size=100x100&set=set1",
    message:
      "turpis a pede posuere nonummy integer non velit donec diam neque vestibulum eget vulputate ut ultrices vel augue vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere",
  },
  {
    character: "Méline",
    image: "https://robohash.org/fugaquianemo.png?size=100x100&set=set1",
    message:
      "a suscipit nulla elit ac nulla sed vel enim sit amet nunc viverra dapibus nulla suscipit ligula in lacus curabitur at ipsum ac tellus semper interdum mauris",
  },
  {
    character: "Torbjörn",
    image:
      "https://robohash.org/assumendavelaccusamus.png?size=100x100&set=set1",
    message:
      "suspendisse potenti in eleifend quam a odio in hac habitasse platea dictumst maecenas ut massa",
  },
  {
    character: "Sòng",
    image: "https://robohash.org/adrerumquod.png?size=100x100&set=set1",
    message:
      "quis lectus suspendisse potenti in eleifend quam a odio in hac habitasse platea dictumst maecenas ut massa quis",
  },
  {
    character: "Tú",
    image: "https://robohash.org/aliquamprovidentid.png?size=100x100&set=set1",
    message:
      "velit nec nisi vulputate nonummy maecenas tincidunt lacus at velit vivamus vel nulla eget eros elementum pellentesque quisque porta volutpat erat quisque erat eros viverra eget congue eget semper",
  },
  {
    character: "Léone",
    image:
      "https://robohash.org/itaquequaeratarchitecto.png?size=100x100&set=set1",
    message:
      "leo rhoncus sed vestibulum sit amet cursus id turpis integer aliquet massa id lobortis convallis tortor risus dapibus augue vel accumsan tellus nisi eu orci mauris lacinia sapien",
  },
  {
    character: "Mahélie",
    image: "https://robohash.org/ullamexpeditanihil.png?size=100x100&set=set1",
    message:
      "massa id nisl venenatis lacinia aenean sit amet justo morbi ut odio cras mi pede malesuada in imperdiet et commodo vulputate justo in blandit ultrices enim lorem",
  },
  {
    character: "Séverine",
    image: "https://robohash.org/dolorexplicaboquae.png?size=100x100&set=set1",
    message:
      "dolor quis odio consequat varius integer ac leo pellentesque ultrices mattis odio donec vitae nisi nam ultrices libero non mattis",
  },
  {
    character: "Lài",
    image:
      "https://robohash.org/consecteturdoloremquemagni.png?size=100x100&set=set1",
    message:
      "nullam orci pede venenatis non sodales sed tincidunt eu felis fusce posuere felis sed lacus morbi sem mauris laoreet ut rhoncus aliquet pulvinar sed nisl",
  },
  {
    character: "Audréanne",
    image: "https://robohash.org/veritatissintet.png?size=100x100&set=set1",
    message:
      "tempus semper est quam pharetra magna ac consequat metus sapien ut nunc vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae mauris viverra diam vitae quam",
  },
  {
    character: "Mén",
    image: "https://robohash.org/etsedmodi.png?size=100x100&set=set1",
    message:
      "suspendisse potenti in eleifend quam a odio in hac habitasse platea dictumst maecenas ut massa quis augue luctus tincidunt nulla mollis molestie lorem quisque",
  },
  {
    character: "Rachèle",
    image: "https://robohash.org/beataeeosprovident.png?size=100x100&set=set1",
    message:
      "pede venenatis non sodales sed tincidunt eu felis fusce posuere felis sed lacus morbi sem mauris laoreet ut rhoncus",
  },
  {
    character: "Tán",
    image: "https://robohash.org/excepturieterror.png?size=100x100&set=set1",
    message:
      "fusce consequat nulla nisl nunc nisl duis bibendum felis sed interdum venenatis turpis enim blandit mi in porttitor pede justo eu massa donec dapibus duis",
  },
  {
    character: "Marie-josée",
    image: "https://robohash.org/dolorestemporesed.png?size=100x100&set=set1",
    message:
      "adipiscing elit proin risus praesent lectus vestibulum quam sapien varius ut blandit non interdum in ante vestibulum ante ipsum",
  },
  {
    character: "Eléa",
    image:
      "https://robohash.org/architectolaudantiumqui.png?size=100x100&set=set1",
    message:
      "aliquet massa id lobortis convallis tortor risus dapibus augue vel accumsan tellus nisi eu orci mauris lacinia",
  },
  {
    character: "Erwéi",
    image: "https://robohash.org/quidemeumarchitecto.png?size=100x100&set=set1",
    message:
      "id massa id nisl venenatis lacinia aenean sit amet justo morbi ut odio cras mi pede malesuada",
  },
  {
    character: "Audréanne",
    image: "https://robohash.org/praesentiumestrerum.png?size=100x100&set=set1",
    message:
      "vel enim sit amet nunc viverra dapibus nulla suscipit ligula in lacus curabitur at ipsum ac tellus semper interdum mauris ullamcorper purus sit amet nulla quisque",
  },
];
let index = 0;
// FUNCTIONS
function placeData() {
  let cardObject = cardDataArray[index];
  let imgUrl = cardObject?.image;
  let name = cardObject?.character;
  let message = cardObject?.message;
  document.querySelector(".card__review img").src = imgUrl;
  document.querySelector(".card__review h2").innerText = name;
  document.querySelector(".card__review p").innerText = message;
}
function goBack() {
  if (index > 0) {
    index--;
  } else {
    index = cardDataArray.length - 1;
  }
  placeData();
}

function goForward() {
  if (index < cardDataArray.length - 1) {
    index++;
  } else {
    index = 0;
  }
  placeData();
}

// EVENT LISTENERS
onload = placeData();

document.querySelector(".card button#back").addEventListener("click", goBack);

document
  .querySelector(".card button#forward")
  .addEventListener("click", goForward);
