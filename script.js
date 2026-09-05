

const menuItems = [
  // TANTUNI
  {id:'t1',cat:'tantuni', price:'26 zł',tag:{pl:'Tantuni',en:'Tantuni',tr:'Tantuni'},name:{pl:'Tantuni z kurczakiem',en:'Chicken Tantuni',tr:'Tavuklu Tantuni'},desc:{pl:'Tantuni w tortilli',en:'Tantuni dürüm (wrap)',tr:'Tantuni dürüm (lavaş)'},image:'assets/5acdf9e4-7d0d-4b73-b5e0-bfd9d4037ca4.jpg'},
  {id:'t2',cat:'tantuni',price:'29 zł',tag:{pl:'Tantuni',en:'Tantuni',tr:'Tantuni'},name:{pl:'Tantuni mieszane',en:'Mixed Tantuni',tr:'Karışık Tantuni'},desc:{pl:'Tantuni w tortilli',en:'Tantuni dürüm (wrap)',tr:'Tantuni dürüm (lavaş)'},image:'assets/5acdf9e4-7d0d-4b73-b5e0-bfd9d4037ca4.jpg'},
  {id:'t3',cat:'tantuni',price:'33 zł',tag:{pl:'Tantuni',en:'Tantuni',tr:'Tantuni'},name:{pl:'Tantuni wołowe',en:'Beef Tantuni',tr:'Et Tantuni'},desc:{pl:'Tantuni w tortilli',en:'Tantuni dürüm (wrap)',tr:'Tantuni dürüm (lavaş)'},image:'assets/5acdf9e4-7d0d-4b73-b5e0-bfd9d4037ca4.jpg'},

  {id:'t4',cat:'tantuni',price:'33 zł',tag:{pl:'XL',en:'XL',tr:'XL'},name:{pl:'Tantuni XL z kurczakiem',en:'XL Chicken Tantuni',tr:'XL Tavuklu Tantuni'},desc:{pl:'Tantuni w tortilli',en:'Tantuni dürüm XL (wrap)',tr:'Tantuni dürüm XL (lavaş)'},image:'assets/5d845d79-e141-42b0-a54d-dc402e156d47.JPG'},
  {id:'t5',cat:'tantuni',price:'36 zł',tag:{pl:'XL',en:'XL',tr:'XL'},name:{pl:'Tantuni XL mieszane',en:'XL Mixed Tantuni',tr:'XL Karışık Tantuni'},desc:{pl:'Tantuni w tortilli',en:'Tantuni dürüm XL (wrap)',tr:'Tantuni dürüm XL (lavaş)'},image:'assets/5d845d79-e141-42b0-a54d-dc402e156d47.JPG'},
  {id:'t6',cat:'tantuni',price:'39 zł',tag:{pl:'XL',en:'XL',tr:'XL'},name:{pl:'Tantuni XL wołowe',en:'XL Beef Tantuni',tr:'XL Et Tantuni'},desc:{pl:'Tantuni w tortilli',en:'Tantuni dürüm XL (wrap)',tr:'Tantuni dürüm XL (lavaş)'},image:'assets/5d845d79-e141-42b0-a54d-dc402e156d47.JPG'},

  {id:'t7',cat:'tantuni',price:'32 zł',tag:{pl:'Bułka',en:'Bread',tr:'Ekmek'},name:{pl:'Tantuni z kurczakiem',en:'Chicken Tantuni in Bread',tr:'Tavuklu Tantuni Ekmek'},desc:{pl:'Tantuni  w bułce',en:'Tantuni ekmek (bread)',tr:'Tantuni ekmek'},image:'assets/687b4c6d-c781-4f79-ba9f-77b68a2f8987.JPG'},
  {id:'t8',cat:'tantuni',price:'35 zł',tag:{pl:'Bułka',en:'Bread',tr:'Ekmek'},name:{pl:'Tantuni mieszane',en:'Mixed Tantuni in Bread',tr:'Karışık Tantuni Ekmek'},desc:{pl:'Tantuni  w bułce',en:'Tantuni ekmek (bread)',tr:'Tantuni ekmek'},image:'assets/687b4c6d-c781-4f79-ba9f-77b68a2f8987.JPG'},
  {id:'t9',cat:'tantuni',price:'39 zł',tag:{pl:'Bułka',en:'Bread',tr:'Ekmek'},name:{pl:'Tantuni wołowe',en:'Beef Tantuni in Bread',tr:'Et Tantuni Ekmek'},desc:{pl:'Tantuni  w bułce',en:'Tantuni ekmek (bread)',tr:'Tantuni ekmek'},image:'assets/687b4c6d-c781-4f79-ba9f-77b68a2f8987.JPG'},

  {id:'t10',cat:'tantuni',price:'32 zł',tag:{pl:'Talerz',en:'Plate',tr:'Tabak'},name:{pl:'Tantuni z kurczakiem z jogurtem',en:'Chicken Tantuni with Yogurt',tr:'Yoğurtlu Tavuklu Tantuni'},desc:{pl:'Tantuni na talerzu',en:'Tantuni with yogurt (plate)',tr:'Yoğurtlu tantuni (tabak)'},image:'assets/1662cbdf-802f-4cb6-8c30-6b0511bae557.JPG'},
  {id:'t11',cat:'tantuni',price:'35 zł',tag:{pl:'Talerz',en:'Plate',tr:'Tabak'},name:{pl:'Tantuni mieszane z jogurtem',en:'Mixed Tantuni with Yogurt',tr:'Yoğurtlu Karışık Tantuni'},desc:{pl:'Tantuni na talerzu',en:'Tantuni with yogurt (plate)',tr:'Yoğurtlu tantuni (tabak)'},image:'assets/1662cbdf-802f-4cb6-8c30-6b0511bae557.JPG'},
  {id:'t12',cat:'tantuni',price:'39 zł',tag:{pl:'Talerz',en:'Plate',tr:'Tabak'},name:{pl:'Tantuni wołowe z jogurtem',en:'Beef Tantuni with Yogurt',tr:'Yoğurtlu Et Tantuni'},desc:{pl:'Tantuni na talerzu',en:'Tantuni with yogurt (plate)',tr:'Yoğurtlu tantuni (tabak)'},image:'assets/1662cbdf-802f-4cb6-8c30-6b0511bae557.JPG'},

  {id:'t13',cat:'tantuni',price:'39 zł',tag:{pl:'XL • Talerz',en:'XL • Plate',tr:'XL • Tabak'},name:{pl:'Tantuni XL z kurczakiem z jogurtem',en:'XL Chicken Tantuni with Yogurt',tr:'XL Yoğurtlu Tavuklu Tantuni'},desc:{pl:'Tantuni na talerzu XL',en:'Tantuni with yogurt XL (plate)',tr:'Yoğurtlu tantuni XL (tabak)'},image:'assets/a21018bd-25f3-4323-b624-3aa87db6b7e1.JPG'},
  {id:'t14',cat:'tantuni',price:'42 zł',tag:{pl:'XL • Talerz',en:'XL • Plate',tr:'XL • Tabak'},name:{pl:'Tantuni XL mieszane z jogurtem',en:'XL Mixed Tantuni with Yogurt',tr:'XL Yoğurtlu Karışık Tantuni'},desc:{pl:'Tantuni na talerzu XL',en:'Tantuni with yogurt XL (plate)',tr:'Yoğurtlu tantuni XL (tabak)'},image:'assets/a21018bd-25f3-4323-b624-3aa87db6b7e1.JPG'},
  {id:'t15',cat:'tantuni',price:'47 zł',tag:{pl:'XL • Talerz',en:'XL • Plate',tr:'XL • Tabak'},name:{pl:'Tantuni XL wołowe z jogurtem',en:'XL Beef Tantuni with Yogurt',tr:'XL Yoğurtlu Et Tantuni'},desc:{pl:'Tantuni na talerzu XL',en:'Tantuni with yogurt XL (plate)',tr:'Yoğurtlu tantuni XL (tabak)'},image:'assets/a21018bd-25f3-4323-b624-3aa87db6b7e1.JPG'},

  // GRILL
  {id:'g1',cat:'grill',price:'35 zł',tag:{pl:'Grill',en:'Grill',tr:'Izgara'},name:{pl:'Adana Kebab w tortilli',en:'Adana Kebab – dürüm',tr:'Adana Kebap – dürüm'},desc:{pl:'Grillowana Adana Kebab',en:'Grilled Adana Kebab',tr:'Izgara Adana Kebap'},image:'assets/dbd6cde0-660f-4849-97b6-298ef7c5a95d.JPG'},
  {id:'g2',cat:'grill',price:'39 zł',tag:{pl:'Grill',en:'Grill',tr:'Izgara'},name:{pl:'Adana Kebab na talerzu',en:'Adana Kebab – plate',tr:'Adana Kebap – tabak'},desc:{pl:'Grillowana Adana Kebab',en:'Grilled Adana Kebab',tr:'Izgara Adana Kebap'},image:'assets/f81a7c42-6518-43a3-b542-c1703b74a47e.JPG'},

  {id:'g3',cat:'grill',price:'35 zł',tag:{pl:'Grill',en:'Grill',tr:'Izgara'},name:{pl:'Köfte w bułce',en:'Köfte in Bread',tr:'Köfte Ekmek'},desc:{pl:'Grillowane köfte',en:'Grilled köfte',tr:'Izgara köfte'},image:'assets/efd493a8-37b4-4d8d-bff8-b3df1442d0e7.JPG'},
  {id:'g4',cat:'grill',price:'39 zł',tag:{pl:'Grill',en:'Grill',tr:'Izgara'},name:{pl:'Köfte na talerzu talerzu',en:'Köfte – plate',tr:'Köfte – tabak'},desc:{pl:'Grillowane köfte',en:'Grilled köfte',tr:'Izgara köfte'},image:'assets/14725fe1-96a4-4fce-a569-1be3fef2f7af.JPG'},
  {id:'g5',cat:'grill',price:'35 zł',tag:{pl:'Grill',en:'Grill',tr:'Izgara'},name:{pl:'Köfte w tortilli',en:'Köfte – dürüm',tr:'Köfte – dürüm'},desc:{pl:'Grillowane köfte',en:'Grilled köfte',tr:'Izgara köfte'},image:'assets/5acdf9e4-7d0d-4b73-b5e0-bfd9d4037ca4.jpg'},

  {id:'g6',cat:'grill',price:'35 zł',tag:{pl:'Grill',en:'Grill',tr:'Izgara'},name:{pl:'Sucuk w bułce',en:'Sucuk in Bread',tr:'Sucuk Ekmek'},desc:{pl:'Grillowany sucuk',en:'Grilled sucuk',tr:'Izgara sucuk'},image:'assets/812ff119-5e19-4ddf-92c3-9d691516b3bb.JPG'},
  {id:'g7',cat:'grill',price:'39 zł',tag:{pl:'Grill',en:'Grill',tr:'Izgara'},name:{pl:'Sucuk na talerzu',en:'Sucuk – plate',tr:'Sucuk – tabak'},desc:{pl:'Grillowany sucuk',en:'Grilled sucuk',tr:'Izgara sucuk'},image:'assets/69dfc542-2a21-468e-8f81-06b1660674a7.JPG'},
  {id:'g8',cat:'grill',price:'30 zł',tag:{pl:'Grill',en:'Grill',tr:'Izgara'},name:{pl:'Wątróbka jagnięca w tortilli',en:'Lamb Liver – dürüm',tr:'Kuzu Ciğeri – dürüm'},desc:{pl:'Grillowana jagnięcina',en:'Grilled lamb',tr:'Izgara kuzu'},image:'assets/5acdf9e4-7d0d-4b73-b5e0-bfd9d4037ca4 2.JPG'},
  {id:'g9',cat:'grill',price:'35 zł',tag:{pl:'Grill',en:'Grill',tr:'Izgara'},name:{pl:'Wątróbka jagnięca na talerzu',en:'Lamb Liver – plate',tr:'Kuzu Ciğeri – tabak'},desc:{pl:'Grillowana jagnięcina',en:'Grilled lamb',tr:'Izgara kuzu'},image:'assets/ab5465bb-0926-4508-ad1f-bcec7c2c5a10.JPG'},

  {id:'g10',cat:'grill',price:'32 zł',tag:{pl:'Kurczak',en:'Chicken',tr:'Tavuk'},name:{pl:'Szaszłyk w tortilli',en:'Shashlik – dürüm',tr:'Tavuk Şiş – dürüm'},desc:{pl:'Grillowany kurczak',en:'Grilled chicken',tr:'Izgara tavuk'},image:'assets/5acdf9e4-7d0d-4b73-b5e0-bfd9d4037ca4 2.JPG'},
  {id:'g11',cat:'grill',price:'36 zł',tag:{pl:'Kurczak',en:'Chicken',tr:'Tavuk'},name:{pl:'Szaszłyk na talerzu',en:'Shashlik – plate',tr:'Tavuk Şiş – tabak'},desc:{pl:'Grillowany kurczak',en:'Grilled chicken',tr:'Izgara tavuk'},image:'assets/ba91bf05-0ea2-4743-b9b0-7728af918e0c.JPG'},
  {id:'g12',cat:'grill',price:'39 zł',tag:{pl:'Kurczak',en:'Chicken',tr:'Tavuk'},name:{pl:'Skrzydełka z kurczaka – talerz',en:'Chicken Wings – plate',tr:'Tavuk Kanat – tabak'},desc:{pl:'Grillowany kurczak',en:'Grilled chicken',tr:'Izgara tavuk'},image:'assets/fec1a011-01ff-403b-9b77-6d15726b122d.JPG'},
  {id:'g13',cat:'grill',price:'65 zł',tag:{pl:'Mix',en:'Mix',tr:'Karışık'},name:{pl:'Grill Mix',en:'Grill Mix',tr:'Grill Mix'},desc:{pl:'Grill Mix',en:'Grill Mix',tr:'Grill Mix'},image:'assets/14725fe1-96a4-4fce-a569-1be3fef2f7af.JPG'},

  // VEGAN
  {id:'v1',cat:'vegan',price:'25 zł',tag:{pl:'Vegan',en:'Vegan',tr:'Vegan'},name:{pl:'Çiğ Köfte w tortilli',en:'Çiğ Köfte – dürüm',tr:'Çiğ Köfte – dürüm'},desc:{pl:'Çiğ Köfte – serwowane na zimno',en:'Çiğ Köfte – served cold',tr:'Çiğ Köfte – soğuk servis'},image:'assets/c7985b57-7b4e-47b7-ae18-38a1fb1fbb0e.JPG'},
  {id:'v2',cat:'vegan',price:'29 zł',tag:{pl:'Vegan',en:'Vegan',tr:'Vegan'},name:{pl:'Çiğ Köfte – porcja',en:'Çiğ Köfte – portion',tr:'Çiğ Köfte – porsiyon'},desc:{pl:'Çiğ Köfte – serwowane na zimno',en:'Çiğ Köfte – served cold',tr:'Çiğ Köfte – soğuk servis'},image:'assets/6cd6b075-89a6-4510-8246-49f08580f978.JPG'},

  // ZUPY / DODATKI / OGÓRKI
  {id:'s1',cat:'soup',price:'18 zł',tag:{pl:'Zupa',en:'Soup',tr:'Çorba'},name:{pl:'Zupa z soczewicy',en:'Lentil Soup',tr:'Mercimek Çorbası'},desc:{pl:'Zupy',en:'Soup',tr:'Çorba'},image:'assets/7858a22c-dd76-4dde-992d-a0f51d01efe6.JPG'},
  {id:'e1',cat:'extras',price:'5 zł',tag:{pl:'Dodatek',en:'Extra',tr:'Ekstra'},name:{pl:'Chili / Cytryna',en:'Chili / Lemon',tr:'Acı Biber / Limon'},desc:{pl:'Dodatek',en:'Extra',tr:'Ekstra'},image:'assets/5.jpeg'},
  {id:'e2',cat:'extras',price:'5 zł',tag:{pl:'Dodatek',en:'Extra',tr:'Ekstra'},name:{pl:'Lawasz',en:'Lavash',tr:'Lavaş'},desc:{pl:'Dodatek',en:'Extra',tr:'Ekstra'},image:'assets/7.jpeg'},
  {id:'e3',cat:'extras',price:'3 zł',tag:{pl:'Pikle',en:'Pickles',tr:'Turşu'},name:{pl:'Pikle',en:'Pickles',tr:'Acı biber turşusu'},desc:{pl:'Warzywa kiszone',en:'Pickles',tr:'Acı biber turşusu'},image:'assets/6493e5a9-a4e7-40f3-9d5e-8b1fe189607e.JPG'},

  // DESERY
  {id:'d1',cat:'dessert',price:'15 zł',tag:{pl:'Deser',en:'Dessert',tr:'Tatlı'},name:{pl:'Sütlaç',en:'Sütlaç',tr:'Sütlaç'},desc:{pl:'Desery',en:'Dessert',tr:'Tatlı'},image:'assets/8.jpeg'},
  {id:'d2',cat:'dessert',price:'8 zł',tag:{pl:'Deser',en:'Dessert',tr:'Tatlı'},name:{pl:'Baklava',en:'Baklava',tr:'Baklava'},desc:{pl:'Desery',en:'Dessert',tr:'Tatlı'},image:'assets/fa1e342d-12ae-40a0-b19f-b37ed489be26.JPG'},
  {id:'d4',cat:'dessert',price:'10 zł',tag:{pl:'Deser',en:'Dessert',tr:'Tatlı'},name:{pl:'Revani',en:'Revani',tr:'Revani'},desc:{pl:'Desery',en:'Dessert',tr:'Tatlı'},image:'assets/2.jpeg'},

  // NAPOJE
  {id:'dr1',cat:'drinks',price:'9 zł',tag:{pl:'Napój',en:'Drink',tr:'İçecek'},name:{pl:'Ayran',en:'Ayran',tr:'Ayran'},desc:{pl:'Napoje',en:'Drinks',tr:'İçecekler'},image:'assets/1.jpeg'},
  {id:'dr2',cat:'drinks',price:'3 zł',tag:{pl:'Napój',en:'Drink',tr:'İçecek'},name:{pl:'Herbata',en:'Tea',tr:'Çay'},desc:{pl:'Napoje',en:'Drinks',tr:'İçecekler'},image:'assets/9560c14b-88ca-421a-bf1f-ca5d7f01b337.JPG'},
  {id:'dr3',cat:'drinks',price:'10 zł',tag:{pl:'Napój',en:'Drink',tr:'İçecek'},name:{pl:'Kawa',en:'Coffee',tr:'Kahve'},desc:{pl:'Napoje',en:'Drinks',tr:'İçecekler'},image:'assets/dd46f655-e8c0-47ce-b951-824d41138ae3.JPG'},
  {id:'dr4',cat:'drinks',price:'10 zł',tag:{pl:'Napój',en:'Drink',tr:'İçecek'},name:{pl:'Pepsi / 7UP / Lipton',en:'Pepsi / 7UP / Lipton',tr:'Pepsi / 7UP / Lipton'},desc:{pl:'Napoje gazowane',en:'Soft drinks',tr:'Gazlı içecekler'},image:'assets/6.jpeg'},
  {id:'dr5',cat:'drinks',price:'12 zł',tag:{pl:'Napój',en:'Drink',tr:'İçecek'},name:{pl:'Şalgam',en:'Şalgam',tr:'Şalgam'},desc:{pl:'Napoje',en:'Drinks',tr:'İçecekler'},image:'assets/4.jpeg'},
  {id:'dr6',cat:'drinks',price:'10 zł',tag:{pl:'Napój',en:'Drink',tr:'İçecek'},name:{pl:'Soda',en:'Sparkling Water',tr:'Soda'},desc:{pl:'Napoje',en:'Drinks',tr:'İçecekler'},image:'assets/3.jpeg'}
];

const translations={
  pl:{
    'nav.menu':'Menu','nav.about':'O nas','nav.contact':'Kontakt','nav.cta':'Zobacz menu',
    'hero.eyebrow':'Turecka kuchnia • Kraków','hero.title':'Prawdziwe <span>tantuni</span><br>prosto z Mersin',
    'hero.text':'Tantuni to rodzaj zawijanej potrawy wywodzącej się z Mersin w Turcji. Spożywa się ją głównie jako uliczne jedzenie.',
    'hero.menu':'Przejdź do menu <span>↓</span>','hero.find':'Znajdź nas','hero.badge':'turecki smak',
    'about.eyebrow':'Mersin Tantuni','about.title':'Turecka restauracja w Krakowie, w której króluje tantuni.',
    'about.text':'Nasze menu skupia się na charakterystycznych smakach tureckiej kuchni. Tantuni to specjalność pochodząca z Mersin – cienko krojone mięso, świeże dodatki i aromatyczne przyprawy podawane na kilka sposobów.',
    'menu.eyebrow':'Menu','menu.title':'Wybierz swoje danie','menu.note':'Każda pozycja ma osobną cenę. Zdjęcia możesz dodać później.',
    'filters.all':'Wszystko','filters.tantuni':'Tantuni','filters.grill':'Grill','filters.vegan':'Vegan','filters.soup':'Zupy','filters.extras':'Dodatki','filters.dessert':'Desery','filters.drinks':'Napoje',
    'seo.eyebrow':'Smak Turcji w Krakowie','seo.title':'Tantuni, turecka kuchnia i wyjątkowe smaki Mersin',
    'seo.text':'Szukasz restauracji tureckiej w Krakowie? Mersin Tantuni to miejsce dla miłośników tantuni z kurczakiem i wołowiną, tureckiego grilla, çiğ köfte oraz słodkiej baklavy.',
    'contact.eyebrow':'Odwiedź nas',
    'contact.map':'Otwórz mapę ↗','contact.menu':'Zobacz menu','footer.subtitle':'Turecka kuchnia • Kraków','footer.rights':'Wszystkie prawa zastrzeżone.',
    'card.details':'Mersin Tantuni','card.photo':'Miejsce na zdjęcie',
    'cookies.title':'Ta strona używa niezbędnych plików cookies',
'cookies.text':'Używamy niezbędnych plików cookies do prawidłowego działania strony i zapamiętania wybranych ustawień. Opcjonalne pliki cookies nie są uruchamiane bez Twojej zgody.',
'cookies.accept':'Akceptuję',
'cookies.reject':'Odrzuć',
'cookies.settings':'Ustawienia cookies',
'cookies.policy':'Polityka prywatności'
  },
  en:{
    'nav.menu':'Menu','nav.about':'About us','nav.contact':'Contact','nav.cta':'View menu',
    'hero.eyebrow':'Turkish cuisine • Kraków','hero.title':'Real <span>tantuni</span><br>straight from Mersin',
    'hero.text':'Tantuni is a type of wrap native to Mersin in Turkish cuisine. It is consumed primarily as street food.',
    'hero.menu':'View the menu <span>↓</span>','hero.find':'Find us','hero.badge':'Turkish taste',
    'about.eyebrow':'Mersin Tantuni','about.title':'A Turkish restaurant in Kraków where tantuni takes center stage.',
    'about.text':'Our menu focuses on the distinctive flavors of Turkish cuisine. Tantuni is a specialty from Mersin – thinly sliced meat, fresh toppings and aromatic spices served in several ways.',
    'menu.eyebrow':'Menu','menu.title':'Choose your dish','menu.note':'Each item has its own price. You can add photos later.',
    'filters.all':'All','filters.tantuni':'Tantuni','filters.grill':'Grill','filters.vegan':'Vegan','filters.soup':'Soups','filters.extras':'Extras','filters.dessert':'Desserts','filters.drinks':'Drinks',
    'seo.eyebrow':'The taste of Turkey in Kraków','seo.title':'Tantuni, Turkish cuisine and the flavors of Mersin',
    'seo.text':'Looking for a Turkish restaurant in Kraków? Mersin Tantuni is a place for fans of chicken and beef tantuni, Turkish grill, çiğ köfte and sweet baklava.',
    'contact.eyebrow':'Visit us',
    'contact.map':'Open map ↗','contact.menu':'View menu','footer.subtitle':'Turkish cuisine • Kraków','footer.rights':'All rights reserved.',
    'card.details':'Mersin Tantuni','card.photo':'Photo placeholder',
    'cookies.title':'This website uses necessary cookies',
'cookies.text':'We use necessary cookies to make the website work properly and remember your selected settings. Optional cookies are not activated without your consent.',
'cookies.accept':'Accept',
'cookies.reject':'Reject',
'cookies.settings':'Cookie settings',
'cookies.policy':'Privacy Policy'
  },
  tr:{
    'nav.menu':'Menü','nav.about':'Hakkımızda','nav.contact':'İletişim','nav.cta':'Menüyü gör',
    'hero.eyebrow':'Türk mutfağı • Kraków','hero.title':'Gerçek <span>tantuni</span><br>Mersin’den Kraków’a',
    'hero.text':'Tantuni, Türk mutfağında yer alan Mersine has bir dürüm çeşididir. Özellikle sokak yemeği olarak tüketilmektedir',
    'hero.menu':'Menüyü gör <span>↓</span>','hero.find':'Bizi bulun','hero.badge':'Türk lezzeti',
    'about.eyebrow':'Mersin Tantuni','about.title':'Tantuninin öne çıktığı Türk restoranı Kraków’da.',
    'about.text':'Menümüz Türk mutfağının karakteristik lezzetlerine odaklanır. Tantuni, Mersin’den gelen bir spesiyaldir – ince doğranmış et, taze malzemeler ve aromatik baharatlar farklı şekillerde servis edilir.',
    'menu.eyebrow':'Menü','menu.title':'Yemeğinizi seçin','menu.note':'Her ürünün ayrı fiyatı vardır. Fotoğrafları daha sonra ekleyebilirsiniz.',
    'filters.all':'Hepsi','filters.tantuni':'Tantuni','filters.grill':'Izgara','filters.vegan':'Vegan','filters.soup':'Çorbalar','filters.extras':'Ekstralar','filters.dessert':'Tatlılar','filters.drinks':'İçecekler',
    'seo.eyebrow':'Kraków’da Türkiye’nin tadı','seo.title':'Tantuni, Türk mutfağı ve Mersin’in eşsiz lezzetleri',
    'seo.text':'Kraków’da Türk restoranı mı arıyorsunuz? Mersin Tantuni; tavuk ve dana tantuni, Türk ızgarası, çiğ köfte ve baklava sevenler için.',
    'contact.eyebrow':'Bizi ziyaret edin',
    'contact.map':'Haritayı aç ↗','contact.menu':'Menüyü gör','footer.subtitle':'Türk mutfağı • Kraków','footer.rights':'Tüm hakları saklıdır.',
    'card.details':'Mersin Tantuni','card.photo':'Fotoğraf alanı',
    'cookies.title':'Bu web sitesi gerekli çerezleri kullanır',
'cookies.text':'Web sitesinin düzgün çalışması ve seçtiğiniz ayarların hatırlanması için gerekli çerezleri kullanıyoruz. İsteğe bağlı çerezler izniniz olmadan etkinleştirilmez.',
'cookies.accept':'Kabul Et',
'cookies.reject':'Reddet',
'cookies.settings':'Çerez ayarları',
'cookies.policy':'Gizlilik Politikası'
  }
};

let currentLang=localStorage.getItem('mersinLang')||'pl';
const cookieBanner = document.querySelector('#cookie-banner');
const cookieAccept = document.querySelector('#cookie-accept');
const cookieReject = document.querySelector('#cookie-reject');
const cookieSettings = document.querySelector('#cookie-settings');

const cookieConsentKey = 'mersinCookieConsent';

function getCookieConsent(){
  return localStorage.getItem(cookieConsentKey);
}

function openCookieBanner(){
  if(!cookieBanner) return;
  cookieBanner.classList.add('show');
}

function closeCookieBanner(){
  if(!cookieBanner) return;
  cookieBanner.classList.remove('show');
}

function saveCookieConsent(value){
  localStorage.setItem(cookieConsentKey, value);
  closeCookieBanner();
}

if(!getCookieConsent()){
  setTimeout(openCookieBanner, 700);
}

cookieAccept?.addEventListener('click', () => {
  saveCookieConsent('accepted');
});

cookieReject?.addEventListener('click', () => {
  saveCookieConsent('rejected');
});

cookieSettings?.addEventListener('click', () => {
  openCookieBanner();
});
window.openCookieSettings = openCookieBanner;



let currentFilter='all';
const grid=document.querySelector('#food-grid');
const filters=document.querySelectorAll('.filter');

function safeText(text){
  const div=document.createElement('div');
  div.textContent=text;
  return div.innerHTML;
}

function renderImage(item){
  if(item.image){
    return `<img src="${item.image}" alt="${safeText(item.name[currentLang])} – Mersin Tantuni Kraków" loading="lazy" decoding="async">`;
  }
  return `<div class="image-placeholder" role="img" aria-label="${safeText(translations[currentLang]['card.photo'])}"><span>＋</span><small>${safeText(translations[currentLang]['card.photo'])}</small></div>`;
}

function renderMenu(){
  const visible=menuItems.filter(i=>currentFilter==='all'||i.cat===currentFilter);
  grid.innerHTML=visible.map(item=>`
    <article class="food-card">
      <div class="food-image-wrap">
        ${renderImage(item)}
        <span class="food-tag">${safeText(item.tag[currentLang])}</span>
      </div>
      <div class="food-content">
        <h3>${safeText(item.name[currentLang])}</h3>
        <p>${safeText(item.desc[currentLang])}</p>
        <div class="food-bottom">
          <span class="price">${safeText(item.price)}</span>
          <span class="details">${safeText(translations[currentLang]['card.details'])}</span>
        </div>
      </div>
    </article>
  `).join('');
}

function applyTranslations(){
  document.documentElement.lang=currentLang;
  document.querySelectorAll('[data-i18n]').forEach(el=>{
    const key=el.dataset.i18n;
    if(translations[currentLang][key]!==undefined) el.innerHTML=translations[currentLang][key];
  });
  document.querySelectorAll('[data-i18n-html]').forEach(el=>{
    const key=el.dataset.i18nHtml;
    if(translations[currentLang][key]!==undefined) el.innerHTML=translations[currentLang][key];
  });
  document.querySelectorAll('.lang').forEach(b=>b.classList.toggle('active',b.dataset.lang===currentLang));
  document.title=currentLang==='pl'
    ? 'Mersin Tantuni Kraków | Turecka kuchnia i menu'
    : currentLang==='en'
      ? 'Mersin Tantuni Kraków | Turkish cuisine and menu'
      : 'Mersin Tantuni Kraków | Türk mutfağı ve menü';
  renderMenu();
}

filters.forEach(button=>button.addEventListener('click',()=>{
  filters.forEach(b=>b.classList.remove('active'));
  button.classList.add('active');
  currentFilter=button.dataset.filter;
  renderMenu();
}));

document.querySelectorAll('.lang').forEach(button=>button.addEventListener('click',()=>{
  currentLang=button.dataset.lang;
  localStorage.setItem('mersinLang',currentLang);
  applyTranslations();
}));

document.querySelector('#year').textContent=new Date().getFullYear();
applyTranslations();

// Dane strukturalne restauracji – uzupełnij dokładny numer, telefon i domenę przed publikacją.
const restaurantSchema={
  '@context':'https://schema.org',
  '@type':'Restaurant',
  'name':'Mersin Tantuni',
  'image':['assets/logo-mersin-tantuni.jpg'],
  'url':'https://TWOJA-DOMENA.pl/',
  'servesCuisine':['Turecka','Turkish'],
  'address':{'@type':'PostalAddress','streetAddress':'Świętego Tomasza','addressLocality':'Kraków','addressCountry':'PL'},
  'menu':'https://agnpaw.github.io/mersin-tantuni/#menu'
};
const schemaScript=document.createElement('script');
schemaScript.type='application/ld+json';
schemaScript.textContent=JSON.stringify(restaurantSchema);
document.head.appendChild(schemaScript);
