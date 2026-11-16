const categories = [
    "Peluş Oyuncak", "Çiçek", "Abur Cubur", "İçecek", "Kupa", "Mum", 
    "Çorap", "Takı-Toka", "Oyun", 
    "Koku", "Squishy-Slime", "Charm", "Kırtasiye Ürünü", "Matara", 
    "Cüzdan", "Şapka", "Saat", "Kitap", "Bakım Ürünü", 
    "Teknoloji", "Lego"
];

const plushieItems = [
    { id: 1, name: "Arı Ayı Peluşu", img: "Plushie/ArıAyı.jpeg" },
    { id: 2, name: "Balina Peluşu", img: "Plushie/Balina.jpeg" },
    { id: 3, name: "Baymax Peluşu", img: "Plushie/Baymax.jpeg" },
    { id: 4, name: "Bunny Peluşu", img: "Plushie/Bunny.jpeg" },
    { id: 5, name: "Sleepy Cat Peluşu", img: "Plushie/Chubby Cat.jpeg" },
    { id: 6, name: "Hello Kitty Peluşu", img: "Plushie/Hello Kitty.jpeg" },
    { id: 7, name: "Pasta Kedi Peluşu", img: "Plushie/Kedi.jpeg" },
    { id: 8, name: "Cinnamoroll Peluşu", img: "Plushie/Kuromi.jpeg" },
    { id: 9, name: "Paytak Peluşu", img: "Plushie/Paytak.jpeg" },
    { id: 10, name: "Unicorn Penguen Peluşu", img: "Plushie/Penguin.jpeg" },
    { id: 11, name: "Pikachu Peluşu", img: "Plushie/Pikachu.jpeg" },
    { id: 12, name: "Chubby Seal Peluşu", img: "Plushie/Seal.jpeg" },
    { id: 13, name: "Tehlikeli Civciv Peluşu", img: "Plushie/Tehlikeli Civciv.jpeg" },
    { id: 14, name: "Winnie the Pooh Peluşu", img: "Plushie/Winnie the Pooh.jpeg" }
];

const charmItems = [
    { id: 1, name: "Capybara Charmı", img: "Charm/capybara_charm_nobg.png" },
    { id: 2, name: "Yıldızlı Penguen Charmı", img: "Charm/cuteodd_nobg.png" },
    { id: 3, name: "Bebek Mavisi Charm", img: "Charm/elegantblue_nobg.png" },
    { id: 4, name: "Bebek Pembesi Charm", img: "Charm/elegantpink_nobg.png" },
    { id: 5, name: "Hamster Charmı", img: "Charm/hamster_nobg.png" },
    { id: 6, name: "Hello Kitty Charmı", img: "Charm/hellokitty_charm_nobg.png" },
    { id: 7, name: "Panda Hello Kitty Charmı", img: "Charm/hellokittycute_nobg.png" },
    { id: 8, name: "Kuromi Charmı", img: "Charm/kuromi_nobg.png" },
    { id: 9, name: "Labubu Charmı", img: "Charm/labubu_nobg.png" },
    { id: 10, name: "Şimşek McQueen Charmı", img: "Charm/mqueen_keychain_nobg.png" },
    { id: 11, name: "Spiderman Charmı", img: "Charm/spiderman_keychain_nobg.png" }
];

const bookItems = [
    { id: 1, name: "1984", img: "Kitap/1984.jpeg" },
    { id: 2, name: "Alışkanlıkların Gücü", img: "Kitap/Alışkanlıkların Gücü.jpeg" },
    { id: 3, name: "Aylak Adam", img: "Kitap/Aylak Adam.jpeg" },
    { id: 4, name: "Batman The Killing Joke", img: "Kitap/Batman The Killing Joke.jpeg" },
    { id: 5, name: "Cesur Yeni Dünya", img: "Kitap/Cesur Yeni Dünya.jpeg" },
    { id: 6, name: "Civil War", img: "Kitap/Civil War.jpeg" },
    { id: 7, name: "Define Adası", img: "Kitap/Define Adası.jpeg" },
    { id: 8, name: "Denizlerin Altında Yirmi Bin Fersah", img: "Kitap/Denizlerin Altında Yirmi Bin Fersah.jpeg" },
    { id: 9, name: "Devlet", img: "Kitap/Devlet.jpeg" },
    { id: 10, name: "Drakula", img: "Kitap/Drakula.jpeg" },
    { id: 11, name: "Gazap Üzümleri", img: "Kitap/Gazap Üzümleri.jpeg" },
    { id: 12, name: "Gurur ve Önyargı", img: "Kitap/Gurur ve Önyargı.jpeg" },
    { id: 13, name: "Kendine Ait Bir Oda", img: "Kitap/Kendine Ait Bir Oda.jpeg" },
    { id: 14, name: "Kırmızı Pazartesi", img: "Kitap/Kırmızı Pazartesi.jpeg" },
    { id: 15, name: "Körlük", img: "Kitap/Körlük.jpeg" },
    { id: 16, name: "Kuzuların Sessizliği", img: "Kitap/Kuzuların Sessizliği.jpeg" },
    { id: 17, name: "Monte Kristo Kontu", img: "Kitap/Monte Kristo Kontu.jpeg" },
    { id: 18, name: "Naruto", img: "Kitap/Naruto.jpeg" },
    { id: 19, name: "On Kişiydiler", img: "Kitap/On Kişiydiler.jpeg" },
    { id: 20, name: "One Piece", img: "Kitap/One Piece.jpeg" },
    { id: 21, name: "Savaş ve Barış", img: "Kitap/Savaş ve Barış.jpeg" },
    { id: 22, name: "Suç ve Ceza", img: "Kitap/Suç ve Ceza.jpeg" },
    { id: 23, name: "Şu Çılgın Türkler", img: "Kitap/Şu Çılgın Türkler.jpeg" },
    { id: 24, name: "Uğultulu Tepeler", img: "Kitap/Uğultulu Tepeler.jpeg" },
    { id: 25, name: "Yüzüklerin Efendisi", img: "Kitap/Yüzüklerin Efendisi.jpeg" },
    { id: 26, name: "Yüzyıllık Yalnızlık", img: "Kitap/Yüzyıllık Yalnızlık.jpeg" }
];
const cicekItems = [
    { id: 1, name: "Anemon", img: "Çiçek/Anemon.jpeg" },
    { id: 2, name: "Ayçiçeği", img: "Çiçek/Ayçiçeği.jpeg" },
    { id: 3, name: "Flamingo", img: "Çiçek/Flamingo.jpeg" },
    { id: 4, name: "Frezya", img: "Çiçek/Frezya.jpeg" },
    { id: 5, name: "Gardenya", img: "Çiçek/Gardenya.jpeg" },
    { id: 6, name: "Gerbera", img: "Çiçek/Gerbera.jpeg" },
    { id: 7, name: "Hibiskus", img: "Çiçek/Hibiskus.jpeg" },
    { id: 8, name: "İris", img: "Çiçek/İris.jpeg" },
    { id: 9, name: "Kamelya", img: "Çiçek/Kamelya.jpeg" },
    { id: 10, name: "Karahindiba", img: "Çiçek/Karahindiba.jpeg" },
    { id: 11, name: "Karanfil", img: "Çiçek/Karanfil.jpeg" },
    { id: 12, name: "Kasımpatı", img: "Çiçek/Kasımpatı.jpeg" },
    { id: 13, name: "Kırmızı Gül", img: "Çiçek/Kırmızı Gül.jpeg" },
    { id: 14, name: "Lale", img: "Çiçek/Lale.jpeg" },
    { id: 15, name: "Lavanta", img: "Çiçek/Lavanta.jpeg" },
    { id: 16, name: "Lotus", img: "Çiçek/Lotus.jpeg" },
    { id: 17, name: "Manolya", img: "Çiçek/Manolya.jpeg" },
    { id: 18, name: "Menekşe", img: "Çiçek/Menekşe.jpeg" },
    { id: 19, name: "Nergis", img: "Çiçek/Nergis.jpeg" },
    { id: 20, name: "Nilüfer", img: "Çiçek/Nilüfer.jpeg" },
    { id: 21, name: "Orkide", img: "Çiçek/Orkide.jpeg" },
    { id: 22, name: "Ortanca", img: "Çiçek/Ortanca.jpeg" },
    { id: 23, name: "Papatya", img: "Çiçek/Papatya.jpeg" },
    { id: 24, name: "Pembe Begonya", img: "Çiçek/Pembe Begonya.jpeg" },
    { id: 25, name: "Plumeria", img: "Çiçek/Plumeria.jpeg" },
    { id: 26, name: "Ranunkulus", img: "Çiçek/Ranunkulus.jpeg" },
    { id: 27, name: "Sakura", img: "Çiçek/Sakura.jpeg" },
    { id: 28, name: "Siyah Gül", img: "Çiçek/Siyah Gül.jpeg" },
    { id: 29, name: "Sümbül", img: "Çiçek/Sümbül.jpeg" },
    { id: 30, name: "Turuncu Begonya", img: "Çiçek/Turuncu Begonya.jpeg" },
    { id: 31, name: "Zambak", img: "Çiçek/Zambak.jpeg" }
];
const aburCuburItems = [
    { id: 1, name: "Baharatlı Çubuk Kraker", img: "Abur Cubur/Baharatlı Çubuk Kraker.jfif" },
    { id: 2, name: "Bounty", img: "Abur Cubur/Bounty.jfif" },
    { id: 3, name: "Browni Intense", img: "Abur Cubur/Browni Intense.jfif" },
    { id: 4, name: "Bueno", img: "Abur Cubur/Bueno.jfif" },
    { id: 5, name: "Canga", img: "Abur Cubur/Canga.jfif" },
    { id: 6, name: "Cicibebe", img: "Abur Cubur/Cicibebe.jfif" },
    { id: 7, name: "Çilekli LolIPOP", img: "Abur Cubur/Çilekli Lolipop.jfif" },
    { id: 8, name: "Çilekli Milka", img: "Abur Cubur/Çilekli Milka.jfif" },
    { id: 9, name: "Dubai Çikolatası", img: "Abur Cubur/Dubai Çikolatası.jfif" },
    { id: 10, name: "Gofrik", img: "Abur Cubur/Gofrik.jfif" },
    { id: 11, name: "Karam", img: "Abur Cubur/Karam.jfif" },
    { id: 12, name: "Kinder Joy", img: "Abur Cubur/Kinder Joy.jfif" },
    { id: 13, name: "Kinder Süt Dilimi", img: "Abur Cubur/Kinder Süt Dilimi.jfif" },
    { id: 14, name: "Kolalı Jelibon", img: "Abur Cubur/Kolalı Jelibon.jfif" },
    { id: 15, name: "Laviva", img: "Abur Cubur/Laviva.jfif" },
    { id: 16, name: "Limonlu Popkek", img: "Abur Cubur/Limonlu Popkek.jfif" },
    { id: 17, name: "M&M's", img: "Abur Cubur/m&m's.jfif" },
    { id: 18, name: "Meyveli Jelibon", img: "Abur Cubur/Meyveli Jelibon.jfif" },
    { id: 19, name: "Mini Cheetos Shots", img: "Abur Cubur/Mini Cheetos Shots.jfif" },
    { id: 20, name: "Mini Pringles", img: "Abur Cubur/Mini Pringles.jfif" },
    { id: 21, name: "Oreo", img: "Abur Cubur/Oreo.jfif" },
    { id: 22, name: "Pocky", img: "Abur Cubur/Pocky.jfif" },
    { id: 23, name: "Rocco", img: "Abur Cubur/Rocco.jfif" },
    { id: 24, name: "Snickers", img: "Abur Cubur/Snickers.jfif" },
    { id: 25, name: "Takis", img: "Abur Cubur/Takis.jfif" },
    { id: 26, name: "Toblerone", img: "Abur Cubur/Toblerone.jfif" },
    { id: 27, name: "Twix", img: "Abur Cubur/Twix.jfif" }
];
const kupaItems = [
    { id: 1, name: "Arı Kovanı Kupası", img: "Kupa/Arı Kovanı.jfif" },
    { id: 2, name: "Basketbol Topu Kupası", img: "Kupa/Basketbol Topu.jfif" },
    { id: 3, name: "Bear Kupası", img: "Kupa/Bear.jfif" },
    { id: 4, name: "Chubby Cat Kupası", img: "Kupa/Chubby Cat.jfif" },
    { id: 5, name: "Çilek Kupası", img: "Kupa/Çilek.jfif" },
    { id: 6, name: "Deadpool Kupası", img: "Kupa/Deadpool.jfif" },
    { id: 7, name: "Donatello Kupası", img: "Kupa/Donatello.jfif" },
    { id: 8, name: "Geyik Kupası", img: "Kupa/Geyik.jfif" },
    { id: 9, name: "Ginger Cookie Kupası", img: "Kupa/Ginger Cookie.jfif" },
    { id: 10, name: "Halloween Kupası", img: "Kupa/Halloween.jfif" },
    { id: 11, name: "Harry Potter Kupası", img: "Kupa/Harry Potter.jfif" },
    { id: 12, name: "Nemo Kupası", img: "Kupa/Nemo.jfif" },
    { id: 13, name: "Olaf Kupası", img: "Kupa/Olaf.jfif" },
    { id: 14, name: "Venom Kupası", img: "Kupa/Venom.jfif" }
];
const icecekItems = [
    { id: 1, name: "Beypazarı Maden Suyu", img: "İçecek/Beypazarı Maden Suyu.jpg" },
    { id: 2, name: "Cappy Karışık", img: "İçecek/Cappy Karışık.jpg" },
    { id: 3, name: "Capri-Sun", img: "İçecek/Capri-Sun.jfif" },
    { id: 4, name: "Çilekli Süt", img: "İçecek/Çilekli Süt.jpg" },
    { id: 5, name: "Fanta", img: "İçecek/Fanta.jfif" },
    { id: 6, name: "Frappuccino", img: "İçecek/Frappuccino.jpg" },
    { id: 7, name: "Latte", img: "İçecek/Latte.jpg" },
    { id: 8, name: "Monster", img: "İçecek/Monster.jfif" },
    { id: 9, name: "Muzlu Süt", img: "İçecek/Muzlu Süt.png" },
    { id: 10, name: "Nesquik Çikolatalı Süt", img: "İçecek/Nesquik Çikolatalı Süt.jpg" },
    { id: 11, name: "Redbull", img: "İçecek/Redbull.jfif" },
    { id: 12, name: "Soğuk Çay", img: "İçecek/Soğuk Çay.jfif" },
    { id: 13, name: "Sprite", img: "İçecek/Sprite.jfif" },
    { id: 14, name: "Şekersiz Kola", img: "İçecek/Şekersiz Kola.jfif" },
    { id: 15, name: "Uludağ Limonata", img: "İçecek/Uludağ Limonata.jfif" }
];
const mumItems = [
    { id: 1, name: "Çikolatalı Mum", img: "Mum/Çikolatalı.jfif" },
    { id: 2, name: "Deniz Tuzlu Mum", img: "Mum/Deniz Tuzlu.jfif" },
    { id: 3, name: "Ejderha Meyveli Mum", img: "Mum/Ejderha Meyveli.jfif" },
    { id: 4, name: "Gül Kokulu Mum", img: "Mum/Gül Kokulu.jfif" },
    { id: 5, name: "Hindistan Cevizli Mum", img: "Mum/Hindistan Cevizli.jfif" },
    { id: 6, name: "Kahveli Mum", img: "Mum/Kahveli.jfif" },
    { id: 7, name: "Lavantalı Mum", img: "Mum/Lavantalı.jfif" },
    { id: 8, name: "Pumpkin Spice Latteli Mum", img: "Mum/Pumpkin Spice Latte.jfif" },
    { id: 9, name: "Tarçınlı Mum", img: "Mum/Tarçınlı.jfif" },
    { id: 10, name: "Temiz Çamaşır Kokulu Mum", img: "Mum/Temiz Çamaşır Kokulu.jfif" },
    { id: 11, name: "Vanilyalı Mum", img: "Mum/Vanilyalı.jfif" },
    { id: 12, name: "Yaban Mersinli Turtalı Mum", img: "Mum/Yaban Mersinli Turta.jfif" },
    { id: 13, name: "Yağmur Sonrası Toprak Kokulu Mum", img: "Mum/Yağmur Sonrası Toprak Kokulu.jfif" }
];
const corapItems = [
    { id: 1, name: "Elma Temalı Çorap", img: "Çorap/Elma.jfif" },
    { id: 2, name: "Gökkuşağı Çorabı", img: "Çorap/Gökkuşağı.jfif" },
    { id: 3, name: "Halloween Temalı Çorap", img: "Çorap/Halloween.jpg" },
    { id: 4, name: "Iron Man Çorap", img: "Çorap/Iron Man.jpg" },
    { id: 5, name: "Köpek Balığı Temalı Çorap", img: "Çorap/Köpek Balığı.jfif" },
    { id: 6, name: "Koyunlu Çorap", img: "Çorap/Koyunlu.jpg" },
    { id: 7, name: "Limonlu Çorap", img: "Çorap/Limonlu.webp" },
    { id: 8, name: "Ninja Kaplumbağalı Çorap", img: "Çorap/Ninja Kaplumbağalar.jpg" },
    { id: 9, name: "Plaklı Çorap", img: "Çorap/Plaklı.jpg" },
    { id: 10, name: "Sincaplı Çorap", img: "Çorap/Sincap.jfif" },
    { id: 11, name: "Spiderman Çorabı", img: "Çorap/Spiderman.jfif" },
    { id: 12, name: "Yılbaşı Temalı Çorap", img: "Çorap/Yılbaşı.jpg" }
];
const teknolojiItems = [
    { id: 1, name: "Ayıcık Masa Fanı", img: "Teknoloji/Ayıcık Masa Fanı.jfif" },
    { id: 2, name: "Cinnamoroll El Fanı", img: "Teknoloji/Cinnamoroll El Fanı.jfif" },
    { id: 3, name: "Hello Kitty Kulaklık", img: "Teknoloji/Hello Kitty Kulaklık.jfif" },
    { id: 4, name: "Kuromi Kablolu Kulaklık", img: "Teknoloji/Kuromi Kablolu Kulaklık.jfif" },
    { id: 5, name: "Mini Bunny Gece Lambası", img: "Teknoloji/Mini Bunny Gece Lambası.jfif" },
    { id: 6, name: "Mini Disko Topu Işığı", img: "Teknoloji/Mini Disko Topu Işığı.jfif" },
    { id: 7, name: "Mini Karaoke Makinesi", img: "Teknoloji/Mini Karaoke Aleti.jfif" },
    { id: 8, name: "Mini Lava Lambası", img: "Teknoloji/Mini Lava Lambası.jpg" },
    { id: 9, name: "Mini MP3 Çalar", img: "Teknoloji/Mini MP3 Çalar.jfif" },
    { id: 10, name: "Mini Polaroid", img: "Teknoloji/Mini Polaroid.jfif" },
    { id: 11, name: "Mini Retro El Konsolu", img: "Teknoloji/Mini Retro El Konsolu.webp" },
    { id: 12, name: "Mini Retro Oyun Konsolu", img: "Teknoloji/Mini Retro Oyun Konsolu.jpg" },
    { id: 13, name: "Mini Yıldız Projektörü", img: "Teknoloji/Mini Yıldız Projektörü.jfif" },
    { id: 14, name: "Süslü Kablosuz Kulaklık", img: "Teknoloji/Süslü Kablosuz Kulaklık.jfif" },
    { id: 15, name: "Süslü Mini Dijital Kamera", img: "Teknoloji/Süslü Mini Dijital Kamera.jfif" },
    { id: 16, name: "Wolverine Bluetooth Hoparlör", img: "Teknoloji/Wolverine Bluetooth Hoparlör.jfif" }
];
const oyunItems = [
    { id: 1, name: "Bakugan Topu", img: "Oyun/Bakugan Topu.jfif" },
    { id: 2, name: "Beyblade", img: "Oyun/Beyblade.jfif" },
    { id: 3, name: "Futbol Kartları", img: "Oyun/Futbol Kartları.jpg" },
    { id: 4, name: "İskambil Destesi", img: "Oyun/İskambil Destesi.jfif" },
    { id: 5, name: "Mini Puzzle", img: "Oyun/Mini Puzzle.jfif" },
    { id: 6, name: "Monopoly Deal", img: "Oyun/Monopoly Deal.jfif" },
    { id: 7, name: "Pokemon Kartları", img: "Oyun/Pokemon Kartları.jfif" },
    { id: 8, name: "Rübik Küp", img: "Oyun/Rübik Küp.jfif" },
    { id: 9, name: "Uno", img: "Oyun/Uno.jfif" },
    { id: 10, name: "Yoyo", img: "Oyun/Yoyo.jfif" }
];
const squishySlimeItems = [
    { id: 1, name: "Acı Noodle Temalı Slime", img: "Squishy-Slime/Acı Noodle Temalı Slime.jfif" },
    { id: 2, name: "Bal Temalı Slime", img: "Squishy-Slime/Bal Temalı Slime.jfif" },
    { id: 3, name: "Banana Squishy", img: "Squishy-Slime/Banana Squishy.jfif" },
    { id: 4, name: "Banyo Temalı Slime", img: "Squishy-Slime/Banyo Temalı Slime.jfif" },
    { id: 5, name: "Bread Squishy", img: "Squishy-Slime/Bread Squishy.jfif" },
    { id: 6, name: "Butter Squishy", img: "Squishy-Slime/Butter Squishy.jfif" },
    { id: 7, name: "Civciv Squishy", img: "Squishy-Slime/Civciv Squishy.jfif" },
    { id: 8, name: "Çilek Squishy", img: "Squishy-Slime/Çilek Squishy.jfif" },
    { id: 9, name: "Çilekli Pasta Squishy", img: "Squishy-Slime/Çilekli Pasta Squishy.jfif" },
    { id: 10, name: "Dumpling Squishy", img: "Squishy-Slime/Dumpling Squishy.jfif" },
    { id: 11, name: "Ejderha Meyve Temalı Slime", img: "Squishy-Slime/Ejderha Meyve Temalı Slime.jfif" },
    { id: 12, name: "Hamburger Kedi Squishy", img: "Squishy-Slime/Hamburger Kedi Squishy.jfif" },
    { id: 13, name: "Karpuz Temalı Slime", img: "Squishy-Slime/Karpuz Temalı Slime.jfif" },
    { id: 14, name: "Kiraz Temalı Slime", img: "Squishy-Slime/Kiraz Temalı Slime.jfif" },
    { id: 15, name: "Mango Temalı Slime", img: "Squishy-Slime/Mango Temalı Slime.jfif" },
    { id: 16, name: "Muz Tatlısı Temalı Slime", img: "Squishy-Slime/Muz Tatlısı Temalı Slime.jfif" },
    { id: 17, name: "Pankek Kedi Squishy", img: "Squishy-Slime/Pankek Kedi Squishy.jfif" },
    { id: 18, name: "Peach Squishy", img: "Squishy-Slime/Peach Squishy.jfif" },
    { id: 19, name: "Seal Squishy", img: "Squishy-Slime/Seal Squishy.jfif" }
];
const takiTokaItems = [
    { id: 1, name: "Altın Sade Küpe", img: "Takı-Toka/Altın Sade Küpe.jfif" },
    { id: 2, name: "Balıklı Toka", img: "Takı-Toka/Balıklı Toka.jfif" },
    { id: 3, name: "Çiçekli Küpe", img: "Takı-Toka/Çiçekli Küpe.jfif" },
    { id: 4, name: "Çığlık Maskeli Yüzük", img: "Takı-Toka/Çığlık Maskeli Yüzük.jfif" },
    { id: 5, name: "Çilekli Küpe", img: "Takı-Toka/Çilekli Küpe.jfif" },
    { id: 6, name: "Deniz Anası Tokası", img: "Takı-Toka/Deniz Anası Tokası.jfif" },
    { id: 7, name: "Eriyen Saatli Kolye", img: "Takı-Toka/Eriyen Saatli Kolye.jfif" },
    { id: 8, name: "Gökyüzü Bileklik", img: "Takı-Toka/Gökyüzü Bileklik.jfif" },
    { id: 9, name: "Hello Kitty Bileklik", img: "Takı-Toka/Hello Kitty Bileklik.jfif" },
    { id: 10, name: "Kalpli ve İncili Kolye", img: "Takı-Toka/Kalpli ve İncili Kolye.jfif" },
    { id: 11, name: "Kaplanlı Toka", img: "Takı-Toka/Kaplanlı Toka.jfif" },
    { id: 12, name: "Kelebekli Kolye", img: "Takı-Toka/Kelebekli Kolye.jfif" },
    { id: 13, name: "Kelebekli Toka", img: "Takı-Toka/Kelebekli Toka.jfif" },
    { id: 14, name: "Kılçık Toka", img: "Takı-Toka/Kılçık Toka.jfif" },
    { id: 15, name: "Kirazlı Küpe", img: "Takı-Toka/Kirazlı Küpe.jfif" },
    { id: 16, name: "Kurdeleli Yüzük", img: "Takı-Toka/Kurdeleli Yüzük.jfif" },
    { id: 17, name: "Maskeli Yüzük", img: "Takı-Toka/Maskeli Yüzük.jfif" },
    { id: 18, name: "Metal Bileklik", img: "Takı-Toka/Metal Bileklik.jfif" },
    { id: 19, name: "Mavi Kelebekli Yüzük", img: "Takı-Toka/Mvi Kelebekli Yüzük.jfif" },
    { id: 20, name: "Orkideli Toka", img: "Takı-Toka/Orkideli Toka.jfif" },
    { id: 21, name: "Paletli Kolye", img: "Takı-Toka/Paletli Kolye.jfif" },
    { id: 22, name: "Pembe Kalpli Yüzük", img: "Takı-Toka/Pembe Kalpli Yüzük.jfif" },
    { id: 23, name: "Renkli Bileklik", img: "Takı-Toka/Renkli Bileklik.jfif" },
    { id: 24, name: "Sanatsal Toka", img: "Takı-Toka/Sanatsal Toka.jfif" },
    { id: 25, name: "Siyah Kedili Toka", img: "Takı-Toka/Siyah Kedili Toka.jfif" },
    { id: 26, name: "Spiderman Bileklik", img: "Takı-Toka/Spiderman Bileklik.jfif" },
    { id: 27, name: "Spiral Kolye", img: "Takı-Toka/Spiral Kolye.jfif" },
    { id: 28, name: "Yıldızlı Kolye", img: "Takı-Toka/Yıldızlı Kolye.jfif" },
    { id: 29, name: "Yıldızlı Küpe", img: "Takı-Toka/Yıldızlı Küpe.jfif" },
    { id: 30, name: "Yıldızlı Yüzük", img: "Takı-Toka/Yıldızlı Yüzük.jfif" }
];
const sapkaItems = [
    { id: 1, name: "Ayı kulaklı Bere", img: "Şapka/Ayı kulaklı Bere.jfif" },
    { id: 2, name: "Ekose Desenli Şapka", img: "Şapka/Ekose Desenli Şapka.jfif" },
    { id: 3, name: "Fransız Beresi", img: "Şapka/Fransız Beresi.jfif" },
    { id: 4, name: "Kedi Kulaklı Şapka", img: "Şapka/Kedi Kulaklı Şapka.jfif" },
    { id: 5, name: "Köpek İşlemeli Şapka", img: "Şapka/Köpek İşlemeli Şapka.jfif" },
    { id: 6, name: "Köpekli Şapka", img: "Şapka/Köpekli Şapka.jfif" },
    { id: 7, name: "Nasa Şapka", img: "Şapka/Nasa Şapka.jfif" },
    { id: 8, name: "Rus Şapkası", img: "Şapka/Rus Şapkası.jfif" },
    { id: 9, name: "Snoopy Şapka", img: "Şapka/Snoopy Şapka.jfif" },
    { id: 10, name: "Ushanka Şapka", img: "Şapka/Ushanka Şapka.jfif" },
    { id: 11, name: "Yengeçli Şapka", img: "Şapka/Yengeçli Şapka.jfif" },
    { id: 12, name: "Yıldızlı Şapka", img: "Şapka/Yıldızlı Şapka.jfif" },
    { id: 13, name: "Köpek Balıklı Şapka", img: "Şapka/Köpek Balıklı Şapka.jfif" }
];
const cuzdanItems = [
    { id: 1, name: "Atlı Cüzdan", img: "Cüzdan/Atlı Cüzdan.jfif" },
    { id: 2, name: "Ayıcıklı Cüzdan", img: "Cüzdan/Ayıcıklı Cüzdan.jfif" },
    { id: 3, name: "Çamaşır Makinesi Şeklinde Cüzdan", img: "Cüzdan/Çamaşır Makinesi Şeklinde Cüzdan.jfif" },
    { id: 4, name: "Çiçekçi Şeklinde Cüzdan", img: "Cüzdan/Çiçekçi Şeklinde Cüzdan.jfif" },
    { id: 5, name: "Hamburger Şeklinde Cüzdan", img: "Cüzdan/Hamburger Şeklinde Cüzdan.jfif" },
    { id: 6, name: "Kalpli Cüzdan", img: "Cüzdan/Kalpli Cüzdan.jfif" },
    { id: 7, name: "Kaset Şeklinde Cüzdan", img: "Cüzdan/Kaset Şeklinde Cüzdan.jfif" },
    { id: 8, name: "Kedili Cüzdan", img: "Cüzdan/Kedili Cüzdan.jfif" },
    { id: 9, name: "Klasör Cüzdan", img: "Cüzdan/Klasör Cüzdan.jfif" },
    { id: 10, name: "Kurbağalı Cüzdan", img: "Cüzdan/Kurbağalı Cüzdan.jfif" },
    { id: 11, name: "Yarasa Cüzdan", img: "Cüzdan/Yarasa Cüzdan.jfif" }
];
const mataraItems = [
    { id: 1, name: "Çizgili Stanley", img: "Matara/Çizgili Stanley.jfif" },
    { id: 2, name: "Elma Temalı Matara", img: "Matara/Elma Temalı Matara.jfif" },
    { id: 3, name: "Kareli Matara", img: "Matara/Kareli Matara.jfif" },
    { id: 4, name: "Kirazlı Matara", img: "Matara/Kirazlı Matara.jfif" },
    { id: 5, name: "Kuşlu Matara", img: "Matara/Kuşlu Matara.jfif" },
    { id: 6, name: "Meyveli Matara", img: "Matara/Meyveli Matara.jfif" },
    { id: 7, name: "Pembe Stanley", img: "Matara/Pembe Stanley.jfif" },
    { id: 8, name: "Pikachu Matara", img: "Matara/Pikachu Matara.png" },
    { id: 9, name: "Puantiyeli Matara", img: "Matara/Puantiyeli Matara.jfif" },
    { id: 10, name: "Tavşanlı Matara", img: "Matara/Tavşanlı Matara.jfif" },
    { id: 11, name: "Yeşil Stanley", img: "Matara/Yeşil Stanley.jfif" }
];
const saatItems = [
    { id: 1, name: "Ayıcıklı Saat", img: "Saat/Ayıcıklı Saat.jfif" },
    { id: 2, name: "Çocuklu Sarı Saat", img: "Saat/Çocuklu Sarı Saat.jfif" },
    { id: 3, name: "Hello Kitty Saat", img: "Saat/Hello Kitty Saat.jfif" },
    { id: 4, name: "Kara Kedili Saat", img: "Saat/Kara Kedili Saat.jfif" },
    { id: 5, name: "Karpuz Saat", img: "Saat/Karpuz Saat.jfif" },
    { id: 6, name: "Kuşlu Saat", img: "Saat/Kuşlu Saat.jfif" },
    { id: 7, name: "Mavi Sevimli Saat", img: "Saat/Mavi Sevimli Saat.jfif" },
    { id: 8, name: "Mor Sevimli Saat", img: "Saat/Mor Sevimli Saat.jfif" },
    { id: 9, name: "Paris Temalı Saat", img: "Saat/Paris Temalı Saat.jfif" },
    { id: 10, name: "Sevimli Pembe Saat", img: "Saat/Sevimli Pembe Saat.jfif" },
    { id: 11, name: "Snoopy Saat", img: "Saat/Snoopy Saat.jfif" },
    { id: 12, name: "Spiderman Saat", img: "Saat/Spiderman Saat.jfif" },
    { id: 13, name: "Şimşek Mcqueen Saat", img: "Saat/Şimşek Mcqueen Saat.jfif" },
    { id: 14, name: "Uzaylı Saat", img: "Saat/Uzaylı Saat.jfif" }
];
const legoItems = [
    { id: 1, name: "Daisy Duck Mini Lego", img: "Lego/Daisy Duck Mini Lego.jfif" },
    { id: 2, name: "Deniz Kızı Mini Lego", img: "Lego/Deniz Kızı Mini Lego.jfif" },
    { id: 3, name: "Donald Duck Mini Lego", img: "Lego/Donald Duck Mini Lego.jfif" },
    { id: 4, name: "Hello Kitty Mini Lego", img: "Lego/Hello Kitty Mini Lego.jfif" },
    { id: 5, name: "Kuromi Mini Lego", img: "Lego/Kuromi Mini Lego.jfif" },
    { id: 6, name: "Patrick Mini Lego", img: "Lego/Patrick Mini Lego.jfif" },
    { id: 7, name: "Sailor Moon Mini Lego", img: "Lego/Sailor Moon Mini Lego.png" },
    { id: 8, name: "Sanrio Melody Mini Lego", img: "Lego/Sanrio Melody Mini Lego.jfif" },
    { id: 9, name: "Sindirella Mini Lego", img: "Lego/Sindirella Mini Lego.jfif" },
    { id: 10, name: "Spiderman Mini Lego", img: "Lego/Spiderman Mini Lego.jfif" },
    { id: 11, name: "Stitch Mini Lego", img: "Lego/Stitch Mini Lego.jfif" },
    { id: 12, name: "Super Mario Mini Lego", img: "Lego/Super Mario Mini Lego.jfif" },
    { id: 13, name: "Sünger Bob Mini Lego", img: "Lego/Sünger Bob Mini Lego.jfif" },
    { id: 14, name: "Tavşan Hopps Mini Lego", img: "Lego/Tavşan Hopps Mini Lego.jfif" },
    { id: 15, name: "Tilki Nick Mini Lego", img: "Lego/Tilki Nick Mini Lego.jfif" },
    { id: 16, name: "Winnie The Pooh Mini Lego", img: "Lego/Winnie The Pooh Mini Lego.jfif" },
    { id: 17, name: "Pikachu Mini Lego", img: "Lego/Pikachu Mini Lego.jfif" },
    { id: 18, name: "Venom Mini Lego", img: "Lego/Venom Mini Lego.png" }
];
const bakimUrunuItems = [
    { id: 1, name: "Ballı Lip Balm", img: "Bakım Ürünü/Ballı Lip Balm.jfif" },
    { id: 2, name: "Ballı Saç Maskesi", img: "Bakım Ürünü/Ballı Saç Maskesi.jfif" },
    { id: 3, name: "Banyo Bombası", img: "Bakım Ürünü/Banyo Bombası.jfif" },
    { id: 4, name: "Çilekli El Kremi", img: "Bakım Ürünü/Çilekli El Kremi.jfif" },
    { id: 5, name: "Göz Altı Maskesi", img: "Bakım Ürünü/Göz Altı Maskesi.jfif" },
    { id: 6, name: "Güneş Kremi", img: "Bakım Ürünü/Güneş Kremi.jfif" },
    { id: 7, name: "Hindistan Cevizli El Kremi", img: "Bakım Ürünü/Hindistan Cevizli El Kremi.jfif" },
    { id: 8, name: "Kirazlı Lip Balm", img: "Bakım Ürünü/Kirazlı Lip Balm.jfif" },
    { id: 9, name: "Nemlendirici", img: "Bakım Ürünü/Nemlendirici.jfif" },
    { id: 10, name: "Parfüm Kokulu Vücut Losyonu", img: "Bakım Ürünü/Parfüm Kokulu Vücut Losyonu.jfif" },
    { id: 11, name: "Parlaklık Verici Saç Maskesi", img: "Bakım Ürünü/Parlaklık Verici Saç Maskesi.jfif" },
    { id: 12, name: "Rhode Lip Balm", img: "Bakım Ürünü/Rhode Lip Balm.jfif" },
    { id: 13, name: "Saç Bakım Yağı", img: "Bakım Ürünü/Saç Bakım Yağı.jfif" },
    { id: 14, name: "Saç Derisi Masaj Fırçası", img: "Bakım Ürünü/Saç Derisi Masaj Fırçası.jfif" },
    { id: 15, name: "Saç Köpüğü", img: "Bakım Ürünü/Saç Köpüğü.jfif" },
    { id: 16, name: "Saç Serumu", img: "Bakım Ürünü/Saç Serumu.jfif" },
    { id: 17, name: "Tarak", img: "Bakım Ürünü/Tarak.jfif" },
    { id: 18, name: "Vanilyalı Vücut Losyonu", img: "Bakım Ürünü/Vanilyalı Vücut Losyonu.jfif" },
    { id: 19, name: "Yüz Masaj Aleti", img: "Bakım Ürünü/Yüz Masaj Aleti.jfif" },
    { id: 20, name: "Yüz Maskesi", img: "Bakım Ürünü/Yüz Maskesi.jfif" },
    { id: 21, name: "Dalin Kolonya", img: "Bakım Ürünü/Dalin Kolonya.jfif" }
];
const kokuItems = [
    { id: 1, name: "Ay Çiçekli Body Mist", img: "Koku/Ay Çiçekli Body Mist.jpg" },
    { id: 2, name: "Bademli Parfüm", img: "Koku/Bademli Parfüm.jpg" },
    { id: 3, name: "Bademli ve Çiçekli Body Mist", img: "Koku/Bademli ve Çiçekli Body Mist.jpg" },
    { id: 4, name: "Bambulu Ev Kokusu", img: "Koku/Bambulu Ev Kokusu.jpg" },
    { id: 5, name: "Beyaz Çiçekli Parfüm", img: "Koku/Beyaz Çiçekli Parfüm.jpg" },
    { id: 6, name: "Çilekli Cheesecakeli Body Mist", img: "Koku/Çilekli Cheesecakeli Body Mist.jpg" },
    { id: 7, name: "Duş Sonrası Temizlik Kokulu Body Mist", img: "Koku/Duş Sonrası Temizlik Kokulu Body Mist.jpg" },
    { id: 8, name: "Hindistan Cevizli Body Mist", img: "Koku/Hindistan Cevizli Body Mist.jpg" },
    { id: 9, name: "Kahveli Parfüm", img: "Koku/Kahveli Parfüm.jpg" },
    { id: 10, name: "Lavantalı Ev Kokusu", img: "Koku/Lavantalı Ev Kokusu.jpg" },
    { id: 11, name: "Limonlu Ev Kokusu", img: "Koku/Limonlu Ev Kokusu.jpg" },
    { id: 12, name: "Mandalinalı Body Mist", img: "Koku/Mandalinalı Body Mist.jpg" },
    { id: 13, name: "Marshmallowlu Parfüm", img: "Koku/Marshmallowlu Parfüm.jpg" },
    { id: 14, name: "Pembe Çiçek Yapraklı Body Mist", img: "Koku/Pembe Çiçek Yapraklı Body Mist.jpg" },
    { id: 15, name: "Pembe Ejder Meyveli Body Mist", img: "Koku/Pembe Ejder Meyveli Body Mist.jpg" },
    { id: 16, name: "Şeftali ve Kırmızı Meyveli Body Mist", img: "Koku/Şeftali ve Kırmızı Meyveli Body Mist.jpg" },
    { id: 17, name: "Turunçgilli Parfüm", img: "Koku/Turunçgilli Parfüm.jpg" },
    { id: 18, name: "Vanilya Kokulu Body Mist", img: "Koku/Vanilya Kokulu Body Mist.jpg" },
    { id: 19, name: "Vanilya ve Kakaolu Parfüm", img: "Koku/Vanilya ve Kakaolu Parfüm.jpg" },
    { id: 20, name: "Vanilyalı Parfüm", img: "Koku/Vanilyalı Parfüm.jpg" },
    { id: 21, name: "Yoğun Çiçekli Parfüm", img: "Koku/Yoğun Çiçekli Parfüm.jpg" }
];
const kirtasiyeUrunuItems = [
    { id: 1, name: "Bahçe Temalı Dekoratif Bant", img: "Kırtasiye Ürünü/Bahçe Temalı Dekoratif Bant.jpg" },
    { id: 2, name: "Batmanli Kitap Ayracı", img: "Kırtasiye Ürünü/Batmanli Kitap Ayracı.jpg" },
    { id: 3, name: "Bilet Şeklinde Kitap Ayracı", img: "Kırtasiye Ürünü/Bilet Şeklinde Kitap Ayracı.jpg" },
    { id: 4, name: "Çiçekli Dolma Kalem", img: "Kırtasiye Ürünü/Çiçekli Dolma Kalem.jpg" },
    { id: 5, name: "Çizim Defteri", img: "Kırtasiye Ürünü/Çizim Defteri.jpg" },
    { id: 6, name: "Death Note Defteri", img: "Kırtasiye Ürünü/Death Note Defteri.jpg" },
    { id: 7, name: "Deri Ajanda", img: "Kırtasiye Ürünü/Deri Ajanda.jpg" },
    { id: 8, name: "Dondurma Şeklinde Kalem", img: "Kırtasiye Ürünü/Dondurma Şeklinde Kalem.jpg" },
    { id: 9, name: "Ekler Şeklinde Kalem", img: "Kırtasiye Ürünü/Ekler Şeklinde Kalem.jpg" },
    { id: 10, name: "Fosforlu Kalem Seti", img: "Kırtasiye Ürünü/Fosforlu Kalem Seti.jpg" },
    { id: 11, name: "Kedili Dekoratif Bant", img: "Kırtasiye Ürünü/Kedili Dekoratif Bant.jpg" },
    { id: 12, name: "Kütüphane Kartı Şeklinde Kitap Ayracı", img: "Kırtasiye Ürünü/Kütüphane Kartı Şeklinde Kitap Ayracı.jpg" },
    { id: 13, name: "Mesaj Şeklinde Post-it", img: "Kırtasiye Ürünü/Mesaj Şeklinde Post-it.jpg" },
    { id: 14, name: "Mikrofon Şeklinde Kalem", img: "Kırtasiye Ürünü/Mikrofon Şeklinde Kalem.jpg" },
    { id: 15, name: "Planner Defteri", img: "Kırtasiye Ürünü/Planner Defteri.jpg" },
    { id: 16, name: "Saat Kulesi Şeklinde Kalem", img: "Kırtasiye Ürünü/Saat Kulesi Şeklinde Kalem.jpg" },
    { id: 17, name: "Siyah Asil Dolma Kalem", img: "Kırtasiye Ürünü/Siyah Asil Dolma Kalem.jpg" },
    { id: 18, name: "Sosisli Şeklinde Kalem", img: "Kırtasiye Ürünü/Sosisli Şeklinde Kalem.jpg" },
    { id: 19, name: "Sushi Roll Şeklinde Dekoratif Bant", img: "Kırtasiye Ürünü/Sushi Roll Şeklinde Dekoratif Bant.jpg" },
    { id: 20, name: "Tost Şeklinde Post-it", img: "Kırtasiye Ürünü/Tost Şeklinde Post-it.jpg" },
    { id: 21, name: "Tüylü Not Defteri", img: "Kırtasiye Ürünü/Tüylü Not Defteri.jpg" },
    { id: 22, name: "Uyarı Şeklinde Kitap Ayracı", img: "Kırtasiye Ürünü/Uyarı Şeklinde Kitap Ayracı.jpg" },
    { id: 23, name: "Uzay Temalı Dekoratif Bant", img: "Kırtasiye Ürünü/Uzay Temalı Dekoratif Bant.jpg" },
    { id: 24, name: "Van Gogh Dekoratif Bant", img: "Kırtasiye Ürünü/Van Gogh Dekoratif Bant.jpg" },
    { id: 25, name: "Sticker", img: "Kırtasiye Ürünü/Sticker.jpg" }
];
let userCart = [];
let selectedProduct = null;
let activeCategory = ""; // O an seçili olan kategoriyi burada tutacağız!

function saveCart() {
    localStorage.setItem('giftboxCart', JSON.stringify(userCart));
}

function loadCart() {
    try {
        const raw = localStorage.getItem('giftboxCart');
        userCart = raw ? JSON.parse(raw) : [];
        if (!Array.isArray(userCart)) userCart = [];
    } catch (e) {
        userCart = [];
    }
}

window.onload = function() {
    // 1. Yeni bir hediye hazırlama seansı için eski sepeti sıfırlıyoruz!
    localStorage.removeItem('giftboxCart'); 
    
    // 2. Sepeti yeniden yüklüyoruz (artık tertemiz ve boş başlayacak)
    loadCart();
    updateCartCount();

    const listEl = document.getElementById("categoryList");
    categories.forEach(cat => {
        const li = document.createElement("li");
        li.className = "category-item";
        li.innerText = cat;
        li.onclick = () => selectCategory(cat, li);
        listEl.appendChild(li);
    });
};

function selectCategory(categoryName, element) {
    // Tıklanan kategoriyi aktif kategori olarak kaydediyoruz
    activeCategory = categoryName;

    document.querySelectorAll(".category-item").forEach(el => el.classList.remove("active"));
    element.classList.add("active");

    document.getElementById("contentTitle").innerText = categoryName;
    const contentBody = document.getElementById("contentBody");

    let currentItems = [];
    if (categoryName === "Peluş Oyuncak") {
        currentItems = plushieItems;
    } else if (categoryName === "Charm") {
        currentItems = charmItems;
    } else if (categoryName === "Kitap") {
        currentItems = bookItems;
    } else if (categoryName === "Çiçek") {
        currentItems = cicekItems;
    } else if (categoryName === "Abur Cubur") {
        currentItems = aburCuburItems;
    } else if (categoryName === "Kupa") {
        currentItems = kupaItems;
    } else if (categoryName === "İçecek") {
        currentItems = icecekItems;
    } else if (categoryName === "Mum") {
        currentItems = mumItems;
    } else if (categoryName === "Çorap") {
        currentItems = corapItems;
    } else if (categoryName === "Teknoloji") {
        currentItems = teknolojiItems;
    } else if (categoryName === "Oyun") {
        currentItems = oyunItems;
    } else if (categoryName === "Squishy-Slime") {
        currentItems = squishySlimeItems;
    } else if (categoryName === "Takı-Toka") {
        currentItems = takiTokaItems;
    } else if (categoryName === "Şapka") {
        currentItems = sapkaItems;
    } else if (categoryName === "Cüzdan") {
        currentItems = cuzdanItems;
    } else if (categoryName === "Matara") {
        currentItems = mataraItems;
    } else if (categoryName === "Saat") {
        currentItems = saatItems;
    } else if (categoryName === "Lego") {
        currentItems = legoItems;
    } else if (categoryName === "Bakım Ürünü") {
        currentItems = bakimUrunuItems;
    } else if (categoryName === "Koku") {
        currentItems = kokuItems;
    } else if (categoryName === "Kırtasiye Ürünü") {
        currentItems = kirtasiyeUrunuItems;
    }

    if (currentItems.length > 0) {
        let html = '<div class="products-grid">';
        currentItems.forEach(item => {
            html += `
                <div class="product-card" onclick='openProductModal(${JSON.stringify(item)})'>
                    <img src="${item.img}" alt="${item.name}">
                    <div class="product-name">${item.name}</div>
                </div>
            `;
        });
        html += '</div>';
        contentBody.innerHTML = html;
    } else {
        contentBody.innerHTML = `<p class="info-msg">"${categoryName}" kategorisi için ürünler pek yakında eklenecek! ✨</p>`;
    }
}

function openProductModal(item) {
    selectedProduct = {
        ...item,
        category: activeCategory // Aktif kategoriyi ürüne bağlıyoruz
    };
    document.getElementById("modalImg").src = item.img;
    document.getElementById("modalName").innerText = item.name;
    document.getElementById("productModal").style.display = "flex";
}

function closeProductModal() {
    document.getElementById("productModal").style.display = "none";
}

function addToBox() {
    if (selectedProduct) {
        // KONTROL: Bu kategoriden daha önce kutuya ürün eklenmiş mi?
        const existingCategoryItem = userCart.find(cartItem => cartItem.category === selectedProduct.category);
        
        if (existingCategoryItem) {
            Swal.fire({
                icon: 'warning',
                title: 'Oops!',
                text: 'Bir kategoriden yalnızca bir ürün seçebilirsiniz!',
                confirmButtonText: 'Tamam',
                // Projedeki pembe rengini ve fontunu buraya doğrudan işliyoruz:
                confirmButtonColor: '#ff4da6', 
                customClass: {
                    popup: 'custom-swal-popup',
                    title: 'custom-swal-title',
                    content: 'custom-swal-text',
                    confirmButton: 'custom-swal-btn'
                }
            });
            return; 
        }

        userCart.push(selectedProduct);
        saveCart();
        updateCartCount();
        closeProductModal();
    }
}

function updateCartCount() {
    document.getElementById("cartCount").innerText = userCart.length;
}

function closeCartModal() {
    document.getElementById("cartModal").style.display = "none";
}

function removeFromCart(index) {
    userCart.splice(index, 1);
    saveCart();
    updateCartCount();
    openCartModal();
}

function resetToHome() {
    activeCategory = ""; // Ana sayfaya dönünce aktif kategoriyi sıfırla
    document.getElementById("contentTitle").innerText = "Hoş Geldiniz!";
    
    document.getElementById("contentBody").innerHTML = `
        <p class="info-msg">Logoya tıklayınca sol tarafta açılacak olan kategorilerden birine tıklayarak hediyeleri incelemeye ve kutunu doldurmaya başlayabilirsin! </p>
    `;
    
    const activeButtons = document.querySelectorAll(".category-item");
    activeButtons.forEach(btn => btn.classList.remove("active"));
}
function openCartModal() {
    const listContainer = document.getElementById("cartItemsList");
    const completeBtn = document.getElementById("completeBoxBtn"); // Tamamla butonu

    if (userCart.length === 0) {
        listContainer.innerHTML = `<p class="info-msg" style="text-align: center;">Kutun henüz boş. Ürün eklemeye başla!</p>`;
        if (completeBtn) completeBtn.style.display = "none"; // Kutu boşsa buton gizli
    } else {
        let html = "";
        userCart.forEach((item, index) => {
            html += `
                <div class="cart-item">
                    <img src="${item.img}" alt="${item.name}">
                    <div class="cart-item-name">${item.name}</div>
                    <button class="delete-btn" onclick="removeFromCart(${index})">🗑️</button>
                </div>
            `;
        });
        listContainer.innerHTML = html;
        if (completeBtn) completeBtn.style.display = "inline-block"; // Kutu doluysa buton ortada görünsün
    }
    document.getElementById("cartModal").style.display = "flex";
}

// Tamamlama butonuna basınca çalışacak SweetAlert fonksiyonu
function completeBox() {
    Swal.fire({
        title: 'Emin misin?',
        text: 'Hediye kutunu tamamlamak istediğine emin misin? Tamamlarsan bir daha değiştiremezsin.',
        icon: 'warning',
        showCancelButton: true,
        confirmButtonText: 'Evet, Tamamla',
        cancelButtonText: 'Vazgeç',
        confirmButtonColor: '#ff4da6',
        cancelButtonColor: '#d1d5db',  // Vazgeç butonu için gri ton
        reverseButtons: true
    }).then((result) => {
        if (result.isConfirmed) {
            Swal.fire({
                title: 'Harika!',
                text: 'Hediye kutun başarıyla tamamlandı!',
                icon: 'success',
                confirmButtonText: 'Devam Et',
                confirmButtonColor: '#ff4da6'
            }).then(() => {
                saveCart();
                window.location.href = 'sunum.html';
            });
        }
    });
}
// Mobilde sol üstteki hediye kutusu logosuna basınca kategorileri aç/kapat
function toggleMobileSidebar() {
    if (window.innerWidth <= 768) {
        const sidebar = document.querySelector('.sidebar');
        if (sidebar) {
            sidebar.classList.toggle('mobile-open');
        }
    }
}

// Mobilde bir kategori seçildiğinde menünün otomatik kapanması
document.getElementById('categoryList').addEventListener('click', (e) => {
    if (window.innerWidth <= 768 && e.target.closest('.category-item')) {
        const sidebar = document.querySelector('.sidebar');
        if (sidebar) {
            sidebar.classList.remove('mobile-open');
        }
    }
});