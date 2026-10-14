/* =====================================================================
   SİTE İÇERİĞİ — BU DOSYA SİTENİN TEK İÇERİK KAYNAĞIDIR
   =====================================================================
   Erdem Design İç Mekan Tasarım Uygulama Atölyesi (Gaziantep) için
   hazırlanmıştır. 2. sürüm: 14 Eki 2026 akşamı Erdem'in WhatsApp'tan
   gönderdiği kaliteli fotoğraflarla yenilendi; "Öncesi / Sonrası" bölümü eklendi.

   NASIL KULLANILIR
   1) Metinler: tırnak içindeki yazıları değiştirin. Tırnakları (" ")
      ve satır sonlarındaki virgülleri silmeyin.
   2) Fotoğraflar: fotoğrafı "images" klasörüne koyun ve g("dosya-adi")
      yazın (uzantısız; dosya .jpg olmalı).
   3) Proje eklemek: "projects" listesindeki bir bloğu { ... } kopyalayıp
      yapıştırın. "slug" adresi belirler (proje.html?id=slug): küçük harf,
      boşluksuz, Türkçe karaktersiz ve her projede farklı olmalı.
   4) Galeri düzeni: genis("ad") tam genişlik, yatay("ad") yarım genişlik
      yatay, dikey("ad") yarım genişlik dikey; iki yarım genişlik yan yana.
   5) ÖNCESİ / SONRASI: "beforeAfter.pairs" listesine { tab, title, place,
      ratio, before, after, note } satırı ekleyin. ratio: "4 / 3" (yatay),
      "3 / 4" (dikey), "1 / 1" (kare). İki fotoğrafın çekim açısı ne kadar
      benzerse karşılaştırma o kadar etkili olur.
   6) Altı çizili kelime: [köşeli parantez] içine alınan kelimeler.
   7) Bir bölümü kaldırmak: listesini boş bırakın (ör. news: [],).
   ===================================================================== */

(function () {
  // images klasöründeki bir .jpg dosyasının yolunu üretir.
  function g(ad) { return "images/" + ad + ".jpg"; }
  function dikey(ad) { return { src: g(ad), wide: false }; }
  function yatay(ad) { return { src: g(ad), land: true }; }
  function genis(ad) { return { src: g(ad), wide: true }; }

  window.SITE = {

    /* ---------- MARKA ---------- */
    brand: {
      name: "ERDEM",       // logonun kalın kısmı
      suffix: "Design",    // logonun ince kısmı (kaydırınca gizlenir)
      description: "Erdem Design İç Mekan Tasarım Uygulama Atölyesi; Gaziantep'te ev, ofis ve dükkân için iç mekan tasarımı, mutfak ve mobilya, asma tavan, tadilat ve yenileme işlerini anahtar teslim yapar."
    },

    /* ---------- ÜST MENÜ ---------- */
    nav: [
      { label: "Projeler",          href: "projeler.html" },
      { label: "Öncesi / Sonrası",  href: "oncesi-sonrasi.html" },
      { label: "Hakkımızda",        href: "studyo.html" },
      { label: "İletişim",          href: "studyo.html#iletisim" }
    ],

    /* ---------- AÇILIŞ (HERO) ---------- */
    // Sırayla dönen başlıklar. Her başlık iki satırdır; satırları kısa tutun (en çok ~14 harf).
    headlines: [
      ["ÖNCESİ,",       "SONRASI"],
      ["YAŞAM ALANINA", "DEĞER KATARIZ"],
      ["ESKİ DÜKKÂN,",  "YENİ ATÖLYE"],
      ["ANAHTARI",      "BİZE VERİN"],
      ["GAZİANTEP'TE",  "İÇ MEKÂN"]
    ],
    // Video yolu (ör. "images/tanitim.mp4"). Boşsa aşağıdaki fotoğraf slaytı çalışır.
    heroVideo: "",
    heroVideoCaption: "",
    heroSlides: [
      { image: g("ba-ic-sonra"),  caption: "Erdem Design atölyesi — toplantı ve sergi alanı" },
      { image: g("atolye-01"),    caption: "Atölyenin cephesi — Gaziantep" },
      { image: g("yonetici-01"),  caption: "Yönetici odası" },
      { image: g("atolye-10"),    caption: "Atölyenin uzun koridoru" },
      { image: g("ev-01"),        caption: "Pembe çocuk odası" }
    ],

    /* ---------- MANİFESTO ---------- */
    // [Köşeli parantez] içindeki kelimelerin altı çizilir.
    manifesto: "Eski bir mekânın [ruhunu] kaybetmesine izin vermeden onu yeniler, güzelleştirir ve [konforlu] bir hale getiririz. Siz [anahtarı] bize teslim edin; yenilenmiş mekânınıza kavuşun.",
    manifestoNote: "Gaziantep'te daire, ev, ofis ve dükkânların iç dekorasyon ve tadilat işlerini projelendirerek yapıyoruz. Atölyemiz de eski bir dükkândan dönüştü.",

    /* ---------- ÖNCESİ / SONRASI ---------- */
    beforeAfter: {
      label: "Öncesi / Sonrası",
      title: "Dönüşümü [sürükleyerek] görün.",
      text: "Aynı mekânın önceki ve sonraki hali. Çizgiyi sağa sola sürükleyin.",
      pageTitle: "Öncesi, [sonrası].",
      allLabel: "Tüm dönüşümler",
      hint: "Çizgiyi sürükleyin",
      beforeLabel: "Öncesi",
      afterLabel: "Sonrası",
      cta: "Sizin mekânınızın öncesi ve sonrası da böyle görünsün.",
      pairs: [
        { tab: "Cephe", title: "Atölye cephesi", place: "Gaziantep", ratio: "4 / 3", before: g("ba-cephe-once"), after: g("ba-cephe-sonra"),
          note: "Eski bir dükkânın vitrini; altın harfli ışıklı tabela, camlı vitrin ve ahşap-mermer kaplı kolonlarla Erdem Design atölyesine dönüştü." },
        { tab: "Atölye içi", title: "Toplantı ve sergi alanı", place: "Gaziantep", ratio: "4 / 3", before: g("ba-ic-once"), after: g("ba-ic-sonra"),
          note: "Boş, asma tavanlı ve seramik zeminli dükkân içi; mermer desenli zemin, gizli LED çizgileri, ceviz toplantı masası ve çerçeveli numune panolarıyla yeniden kuruldu." },
        { tab: "WC", title: "Lavabo ve WC", place: "Gaziantep", ratio: "3 / 4", before: g("ba-wc-once"), after: g("ba-wc-sonra"),
          note: "Eski, dar ve sade WC; siyah mermer tezgâhlı, oval aynalı ve altın tonlu ışıklı bir lavaboya dönüştü." },
        { tab: "Mutfak · 2021", title: "Mutfak dönüşümü", place: "Gaziantep · 2021", ratio: "1 / 1", before: g("once-01"), after: g("once-02"),
          note: "Firmanın 2021'de \"öncesi\" ve \"sonrası\" etiketleriyle paylaştığı bir mutfak: eski dolaplar yerine beyaz klasik dolaplar, tezgâh altı ışık ve avize." },
        { tab: "Banyo · 2021", title: "Banyo dönüşümü", place: "Gaziantep · 2021", ratio: "1 / 1", before: g("once-05"), after: g("once-06"),
          note: "Söküm aşamasındaki bir banyo; siyah çerçeveli pencereli, taş lavabolu ve ışıklı aynalı bir banyoya dönüştü (firmanın 2021 paylaşımından)." }
      ]
    },

    /* ---------- BÖLÜNMÜŞ SABİT BÖLÜM (fotoğraflar akar, metin sabit kalır) ---------- */
    split: [
      {
        label: "Tasarım",
        title: "Her odaya bir kurgu.",
        text: "Toplantı masasından çocuk odasına, yönetici odasından banyoya her mekânı ayrı kurgularız. Tavanı, aydınlatmayı, duvar kaplamasını ve mobilyayı birlikte düşünür; mekânın ışığıyla karakterini birlikte çizeriz.",
        linkLabel: "Projeleri inceleyin",
        linkHref: "projeler.html",
        images: [
          g("atolye-03"),
          g("yonetici-02"),
          g("atolye-07")
        ]
      },
      {
        label: "Uygulama",
        title: "Eski dükkândan yeni atölyeye.",
        text: "Atölyemiz de eski bir dükkândı. Boş iç mekân; mermer desenli zemin, gizli ışık çizgileri ve ceviz toplantı masasıyla yeniden kuruldu. Aynı dönüşümü sizin mekânınız için de yapıyoruz.",
        linkLabel: "Öncesi / Sonrası",
        linkHref: "oncesi-sonrasi.html",
        images: [
          g("ba-ic-once"),
          g("ba-cephe-once"),
          g("ba-wc-once")
        ]
      }
    ],

    /* ---------- PROJELER ----------
       featured: true  -> ana sayfadaki "Öne Çıkan Projeler" listesinde görünür
       showcase: true  -> ana sayfadaki büyük kartlı vitrinde görünür
       area, year, location ya da client boş ("") bırakılırsa o satır görünmez.
    */
    projects: [
      {
        slug: "erdem-design-atolyesi",
        title: "Erdem Design Atölyesi",
        tagline: "Eski bir dükkân; mermer desenli zemini, gizli ışık çizgileri ve ceviz toplantı masasıyla bir tasarım atölyesine dönüştü.",
        location: "Gaziantep",
        year: 2026,
        area: "",
        category: "Ofis",
        status: "Tamamlandı",
        client: "",
        featured: true,
        showcase: true,
        cover: g("ba-ic-sonra"),
        text: [
          "Erdem Design'ın kendi atölyesi. Eski bir dükkânın boş, asma tavanlı ve seramik zeminli iç mekânı; mermer desenli zemin, çevresinde dolanan gizli LED çizgiler ve kademeli bir tavanla yeniden kuruldu.",
          "Ortada ceviz kütüğünden uzun bir toplantı masası, yeşil ve krem sandalyeler; duvarlarda ahşap çıtalı paneller, çerçeveli numune panoları ve ışıklı, kemerli bir vitrin nişi var. Uzun koridor boyunca tavandaki ışık çizgileri ve duvardaki kare çerçeveler perspektifi vurguluyor.",
          "Cephede altın harfli, ışıklı \"ERDEM DESIGN\" tabelası ve camlı vitrin yer alıyor; arka bölümde siyah mermer tezgâhlı bir mutfak ile altın ışıklı, oval aynalı bir WC var. Aynı mekânın öncesini ve sonrasını \"Öncesi / Sonrası\" sayfasında yan yana görebilirsiniz."
        ],
        gallery: [
          yatay("atolye-01"),
          yatay("ba-cephe-sonra"),
          yatay("ba-ic-sonra"),
          yatay("atolye-02"),
          yatay("atolye-03"),
          yatay("atolye-04"),
          yatay("atolye-05"),
          yatay("atolye-06"),
          dikey("atolye-07"),
          dikey("atolye-08"),
          yatay("atolye-09"),
          yatay("atolye-10"),
          dikey("ba-wc-sonra"),
          dikey("atolye-11")
        ]
      },
      {
        slug: "yonetici-odasi",
        title: "Yönetici Odası",
        tagline: "Çerçeveli açık renk duvar panelleri, ışık bandıyla çevrili oval tavan, siyah mermer ve ceviz masa.",
        location: "Gaziantep",
        year: "",
        area: "",
        category: "Ofis",
        status: "Tamamlandı",
        client: "",
        featured: true,
        showcase: true,
        cover: g("yonetici-01"),
        text: [
          "Açık renk, çerçeveli duvar panelleri; ışık bandıyla çevrili oval bir tavan; TV duvarında siyah çıtalı kaplama ve siyah damarlı mermer; ceviz tonlarında bir yönetici masası ve krem rengi koltuk takımı.",
          "Malzeme paleti yalın ama zengin: ahşap, mermer ve boyalı paneller tek bir gizli ışık düzeniyle birleşiyor. Odanın yeri ve tarihi paylaşımda belirtilmedi."
        ],
        gallery: [
          yatay("yonetici-01"),
          yatay("yonetici-02"),
          dikey("yonetici-03"),
          dikey("yonetici-04")
        ]
      },
      {
        slug: "ev-cocuk-odasi-ve-banyolar",
        title: "Pembe Çocuk Odası ve Banyolar",
        tagline: "Pembe çizgili kız çocuk odası, yeşil damarlı mermer desenli ışıklı aynalı banyo ve altın ışıklı WC.",
        location: "Gaziantep",
        year: "",
        area: "",
        category: "Konut",
        status: "Tamamlandı",
        client: "",
        featured: true,
        showcase: true,
        cover: g("ev-01"),
        text: [
          "Kız çocuk odasında pembe çizgili duvar, kitaplıklı beyaz çalışma masası ve çekmeceler, çocuk mobilyaları; banyoda yeşil damarlı mermer desenli duvar, ışıklı oval ayna ve ahşap tezgâhlı beyaz lavabo dolabı yer alıyor.",
          "WC'de siyah dokulu duvar ve altın ışıklı bir niş, mutfakta mermer desenli tezgâh ve altın renkli batarya kullanıldı. Fotoğraflar Erdem Design'ın 14 Ekim 2026'da paylaştığı karelerden; yeri ve tarihi belirtilmedi."
        ],
        gallery: [
          yatay("ev-01"),
          yatay("ev-04"),
          dikey("ev-02"),
          dikey("ev-03")
        ]
      },
      {
        slug: "oncesi-sonrasi",
        title: "Mutfak ve Banyo Dönüşümleri",
        tagline: "Firmanın \"Öncesi\" ve \"Sonrası\" etiketleriyle paylaştığı mutfak ve banyo dönüşümleri.",
        location: "Gaziantep",
        year: 2021,
        area: "",
        category: "Dönüşüm",
        status: "Tamamlandı",
        client: "",
        featured: true,
        showcase: false,
        cover: g("once-02"),
        text: [
          "Eski mutfak dolapları yerine beyaz klasik ya da parlak beyaz-siyah mutfaklar, söküm aşamasındaki bir banyo yerine siyah çerçeveli pencereli, taş lavabolu, ışıklı aynalı bir banyo.",
          "Mutfaklarda tavan göbeği ve sarkıt avize, tezgâh altı ışık ve ayna kaplamalı tezgâh arası kullanıldı. Galeride her \"öncesi\" fotoğrafını \"sonrası\" izliyor; kaydırarak karşılaştırmak için Öncesi / Sonrası sayfasına bakın."
        ],
        gallery: [
          yatay("once-01"),
          yatay("once-02"),
          yatay("once-03"),
          yatay("once-04"),
          dikey("once-05"),
          dikey("once-06")
        ]
      },
      {
        slug: "altin-detayli-klasik-daire",
        title: "Altın Detaylı Klasik Daire",
        tagline: "Eski bir dairenin anahtar teslim yenilenmesi: altın kıvrımlı kapılar, ışıklı aynalı antre, avizeli salon ve beyaz klasik mutfak.",
        location: "Gaziantep",
        year: 2018,
        area: "",
        category: "Konut",
        status: "Tamamlandı",
        client: "",
        featured: true,
        showcase: true,
        cover: g("altin-01"),
        text: [
          "Eski bir dairenin anahtar teslim yenilenmesi. Kapılar altın renkli kıvrım ve kabartma süslemelerle bezendi; girişte ışıklı, altın çerçeveli ayna ve oturaklı konsol, koridorda ise aynalı, geometrik kafes desenli gardırop kapakları yer aldı.",
          "Salon ve yemek odasında tavan göbekleri ve avizeler, duvarlarda desenli duvar kâğıdı kullanıldı. Mutfakta beyaz klasik panel kapaklı dolaplar, altın renkli kulplar ve tezgâh altı ışık bandı; banyoda ışıklı aynalı lavabo dolabı var. Çocuk odası beyaz klasik mobilya ve pembe tonlarla kuruldu.",
          "Firma bu çalışmayı \"beğenmediğiniz eski bir evin ruhunu kaybetmesine izin vermeden yeniliyor, güzelleştiriyor ve konforlu bir hale getiriyoruz\" sözleriyle paylaştı. Galerideki son fotoğraf dairenin eski mutfağıdır."
        ],
        gallery: [
          yatay("altin-01"),
          yatay("altin-02"),
          yatay("altin-03"),
          yatay("altin-05"),
          yatay("altin-06"),
          yatay("altin-07"),
          yatay("altin-08"),
          yatay("altin-10"),
          yatay("altin-11"),
          yatay("altin-12")
        ]
      },
      {
        slug: "beyaz-klasik-daire",
        title: "Beyaz Klasik Daire",
        tagline: "Altın tavan göbekli beyaz klasik mutfak, taş kaplı TV duvarı, kafes desenli dolap kapakları ve ışıklı tavanlar.",
        location: "Gaziantep",
        year: 2018,
        area: "",
        category: "Konut",
        status: "Tamamlandı",
        client: "",
        featured: false,
        showcase: false,
        cover: g("beyaz-01"),
        text: [
          "Ağustos 2018'de paylaşılan bu dairede mutfak, beyaz klasik panel kapaklı dolaplar, koyu mozaik tezgâh arası ve tezgâh altı ışıkla kuruldu. Tavanda altın renkli bir tavan göbeği ve gizli ışık bantları kullanıldı.",
          "Salonda taş kaplama bir TV duvarı ve ışıklı nişler, mavi koltuklar; koridorda beyaz, geometrik kafes desenli gardırop kapakları var. Yatak odasında çiçek baskılı gergi tavan, balkonda yapay çimli bir oturma köşesi düzenlendi."
        ],
        gallery: [
          yatay("beyaz-01"),
          yatay("beyaz-02"),
          yatay("beyaz-05"),
          yatay("beyaz-06"),
          yatay("beyaz-07"),
          yatay("beyaz-08"),
          yatay("beyaz-10"),
          yatay("beyaz-11")
        ]
      },
      {
        slug: "klasik-mutfaklar-ve-detaylar",
        title: "Klasik Mutfaklar ve Detaylar",
        tagline: "Camlı üst dolaplı beyaz klasik mutfaklar, tezgâh altı ışık, altın kıvrımlı kapı ve Fas fenerli cam balkon.",
        location: "Gaziantep",
        year: 2020,
        area: "",
        category: "Mutfak",
        status: "Tamamlandı",
        client: "",
        featured: false,
        showcase: false,
        cover: g("mutfak-01"),
        text: [
          "Haziran 2020'de paylaşılan çalışmalarda mutfaklar beyaz klasik panel kapaklı, camlı üst dolaplı ve ahşap süslemeli kurgulandı; tezgâh altlarında ışık bandı, tezgâh aralarında ayna ve mozaik kaplama kullanıldı.",
          "Görsellerin üzerinde firmanın damgası var. Seride ayrıca altın kıvrımlı bir kapı, arkadan ışıklı altın bir ayna ve konsol, taş duvar nişi ve Fas fenerli bir cam balkon da görülüyor."
        ],
        gallery: [
          yatay("mutfak-01"),
          yatay("mutfak-02"),
          yatay("mutfak-03"),
          yatay("mutfak-04"),
          yatay("mutfak-05"),
          yatay("mutfak-06"),
          yatay("mutfak-07"),
          yatay("mutfak-08"),
          yatay("mutfak-09"),
          yatay("mutfak-10"),
          yatay("mutfak-11"),
          yatay("mutfak-12")
        ]
      },
      {
        slug: "asma-tavan-ve-led-aydinlatma",
        title: "Asma Tavan ve LED Aydınlatma",
        tagline: "Alçıpan asma tavanlar, renkli LED bantlar, avizeler ve baskılı gergi tavanlarla ışıkla çizilen odalar.",
        location: "Gaziantep",
        year: 2018,
        area: "",
        category: "Tavan ve Aydınlatma",
        status: "Tamamlandı",
        client: "",
        featured: false,
        showcase: false,
        cover: g("tavan-01"),
        text: [
          "Mayıs 2018'de paylaşılan bir dairede salon ve odaların tavanları alçıpanla kademeli olarak kuruldu. Mavi, yeşil, kırmızı ve mor LED şeritler tavan kenarlarını ve nişleri çiziyor; avizeler ve spot aydınlatmalar bunlara eşlik ediyor.",
          "Bir odada bulut ve çiçek desenli baskılı gergi tavan kullanıldı. Firma bu tür çalışmaları biyografisinde \"asma tavan\" başlığı altında sunuyor."
        ],
        gallery: [
          yatay("tavan-01"),
          yatay("tavan-02"),
          yatay("tavan-03"),
          yatay("tavan-04"),
          yatay("tavan-05"),
          yatay("tavan-06"),
          yatay("tavan-07"),
          yatay("tavan-08")
        ]
      },
      {
        slug: "antre-konsol-ve-aynalar",
        title: "Antre, Konsol ve Aynalar",
        tagline: "Işıklı altın çerçeveli aynalar, oturaklı portmantolar, ankastre dolaplar ve duvar kâğıtlı giriş holleri.",
        location: "Gaziantep",
        year: 2018,
        area: "",
        category: "Antre ve Giriş",
        status: "Tamamlandı",
        client: "",
        featured: false,
        showcase: false,
        cover: g("antre-01"),
        text: [
          "Giriş holleri, evin ilk izlenimidir. Firmanın 2018'de paylaştığı antre çalışmalarında kapının yanına yerleştirilen, arkadan ışıklı ayna ve oturaklı konsol, ayakkabılık ve portmanto olarak kullanılan beyaz ankastre dolaplar öne çıkıyor.",
          "Duvarlarda desenli ya da çizgili duvar kâğıdı, tavanda gizli ışık bandı ve spotlar; bazı hollerde aynalı, kafes desenli gardırop kapakları kullanıldı."
        ],
        gallery: [
          yatay("antre-01"),
          yatay("antre-02"),
          dikey("antre-03"),
          dikey("antre-04"),
          yatay("antre-05"),
          yatay("antre-06"),
          yatay("antre-07"),
          yatay("antre-08")
        ]
      }
    ],

    /* ---------- HİZMETLER ---------- */
    services: [
      { title: "Mimari Projeler", short: "Daire, ev ve iş yeri için proje.", text: "Yaşam alanlarınıza değer katan proje ve mimari tasarımlar hazırlarız; yaşadığınız ya da kullandığınız mekânın konumundan memnunsanız ama kullanışlılığından şikâyetçiyseniz onu daha konforlu ve şık yenileriz." },
      { title: "İç Mekan Dekorasyon Tasarımı", short: "Ev, ofis, çocuk odası, banyo.", text: "Daire, ev, ofis, dükkân ve mağazaların iç dekorasyonunu projelendirerek yaparız; mekânı renk, doku, ışık ve mobilyayla bir bütün olarak kurgularız." },
      { title: "Mutfak ve Mobilya Tasarımı", short: "Klasik ve modern mutfaklar.", text: "Beyaz klasik panel kapaklı, camlı üst dolaplı mutfaklardan parlak beyaz ve bej akrilik mutfaklara; tezgâh altı ışık, tezgâh arası kaplama ve ankastre dolaplarla mutfak ve ev içi mobilya tasarımı." },
      { title: "Tadilat ve Yenileme", short: "Anahtar teslim yenileme.", text: "Eski bir mekânın anahtarını bize teslim edersiniz; sökümden boyaya, mutfak ve banyodan tavan ve zemine kadar yeniler, konforlu ve şık bir mekân olarak teslim ederiz." },
      { title: "Asma Tavan ve Aydınlatma", short: "Alçıpan tavan, LED, avize.", text: "Alçıpan asma tavanlar, tavan göbekleri, gizli LED çizgileri, ışıklı nişler ve baskılı gergi tavanlarla mekânları ışıkla tasarlarız." },
      { title: "Duvar Kâğıdı ve Kaplama", short: "Duvar kâğıdı, panel, mermer.", text: "Desenli duvar kâğıdı, ahşap çıtalı paneller, çerçeveli duvar panelleri, mermer ve taş kaplamalar, ışıklı aynalarla mekâna karakter kazandırırız." }
    ],

    /* ---------- GÜNCEL ---------- */
    // Haber yok; boş bırakıldığı için bölüm görünmez.
    news: [],

    /* ---------- HAKKIMIZDA SAYFASI ---------- */
    studio: {
      headline: "Eski mekânı yeni bir mekâna çeviren iç mekan tasarım ve uygulama atölyesi.",
      image: g("atolye-08"),
      text: [
        "Erdem Design İç Mekan Tasarım Uygulama Atölyesi, Gaziantep'te daire, ev, ofis, dükkân ve mağazaların iç dekorasyon ve tadilat işlerini projelendirerek yapar; mutfak mobilyası, asma tavan ve duvar kâğıdı gibi uygulamalar da hizmetlerimiz arasındadır.",
        "Beğenmediğiniz eski bir mekânın ruhunu kaybetmesine izin vermeden onu yeniler, güzelleştirir ve konforlu bir hale getiririz. Siz anahtarı bize teslim edersiniz; yenilenmiş, şık ve konforlu mekânınıza kavuşursunuz.",
        "Çalışmalarımızı 2018'den bu yana paylaşıyoruz. 2026'da eski bir dükkânı mermer zeminli, ışık çizgili yeni atölyemize dönüştürdük; projelerinizi yüz yüze konuştuğumuz yer burası."
      ],
      stats: [
        { value: "2003", label: "Erdem Concept, mobilya ve dekorasyon" },
        { value: "2018", label: "İlk proje paylaşımı" },
        { value: "2026", label: "Yeni atölye" }
      ]
    },

    /* ---------- EKİP ---------- */
    // image boş ("") bırakılırsa ad-soyadın baş harfleri gösterilir.
    team: [
      { name: "Recep Erdem", role: "Firma yetkilisi", image: "" }
    ],

    /* ---------- OFİSLER ----------
       İlk iki ofisin saati açılış ekranının sağ altında görünür.
    */
    offices: [
      { city: "Gaziantep", code: "GAZ", timeZone: "Europe/Istanbul", address: "Gaziantep", phone: "+90 533 633 22 46" }
    ],

    /* ---------- BÖLÜM BAŞLIKLARI ---------- */
    labels: {
      featured: "Öne Çıkan Projeler",
      showcaseLabel: "Seçilmiş işler",
      showcaseTitle: "Projeler",
      allProjects: "Tüm projeleri gör",
      services: "Hizmetler",
      servicesTitle: "Tasarımdan anahtara.",
      news: "Güncel",
      newsTitle: "",
      offices: "Atölyemiz",
      team: "Yetkili",
      teamTitle: "Bizimle konuşacağınız kişi.",
      studio: "Hakkımızda",
      contact: "İletişim",
      view: "İNCELE",
      next: "SONRAKİ",
      nextProject: "Sonraki proje",
      more: "İncele"
    },

    /* ---------- İLETİŞİM ---------- */
    contact: {
      headline: "Mekânınız için konuşalım.",
      email: "erdemicmimarlikk@gmail.com",
      phone: "+90 533 633 22 46",
      social: [
        { label: "Instagram", href: "https://www.instagram.com/erdemicmekandizayn/" },
        { label: "Facebook",  href: "https://www.facebook.com/people/Erdem-%C4%B0%C3%A7-Mekan-Dizayn/100088071772654/" },
        { label: "WhatsApp",  href: "https://wa.me/905336332246" }
      ]
    }
  };
})();
