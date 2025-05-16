PROJE TANIMI

Bu proje, restoran veya benzeri işletmelerin online sipariş, ödeme ve yönetim işlemlerini modern bir web arayüzüyle gerçekleştirebileceği tam kapsamlı bir e-ticaret sistemidir. Proje, Next.js (App Router yapısı) ile geliştirilmiş olup, hem kullanıcı hem de admin tarafı içermektedir.

Amaç

Projenin temel amacı; müşterilerin internet üzerinden ürünleri (örneğin menü öğeleri) inceleyip sepetlerine ekleyerek ödeme yapabilmelerini sağlarken, işletme yöneticilerinin de siparişleri ve kullanıcıları kolayca yönetebileceği bir admin panel sunmaktır.

Çözdüğü Problemler

Geleneksel sipariş sistemlerinin dijitalleştirilmesi

Ödeme süreçlerinin Stripe üzerinden güvenli şekilde yönetilmesi

Sipariş takibi ve kullanıcı yönetimi işlemlerinin merkezi bir panelden yapılabilmesi

Kullanıcıların geçmiş siparişlerini görebilmesi ve kolay giriş/çıkış işlemleri

Genel İşleyiş

Kullanıcılar, ürünleri listeleyen ana sayfadan seçim yapar, sepete ekler ve Stripe ile ödeme yapar.

Ödeme başarıyla tamamlandığında sistem otomatik olarak siparişi oluşturur ve kullanıcıya bilgi verir.

Admin kullanıcılar, admin panel üzerinden siparişleri görebilir, durumlarını değiştirebilir (örneğin: hazırlanıyor → teslim edildi).

Admin panelde ayrıca kullanıcı yönetimi, menü yönetimi, banner ve kampanya düzenleme gibi işlemler yapılabilir.

Tüm işlemler güvenli oturum yönetimi (NextAuth) ile korunur ve veri işlemleri Prisma ORM aracılığıyla veritabanında saklanır.

*****************************************************************************************************

KULLANILAN TEKNOLOJİLER

Next.js,Prisma,SQLite,TailwindCSS

Kütüphaneler

+-- @eslint/eslintrc@3.3.1
+-- @prisma/client@6.7.0
+-- bcrypt@5.1.1
+-- bcryptjs@3.0.2
+-- date-fns@4.1.0
+-- eslint-config-next@15.3.1
+-- eslint@9.25.1
+-- mysql2@3.14.1
+-- next-auth@4.24.11
+-- next@15.3.1
+-- nodemailer@6.10.1
+-- prisma@6.7.0
+-- react-dom@19.1.0
+-- react-icons@5.5.0
+-- react@19.1.0
+-- stripe@18.1.0
+-- tailwindcss@4.1.4

*****************************************************************************************************

KURULUM TALİMATLARI

+ git clone https://github.com/kullaniciadi/order.git
+ cd order
+ npm install

+ Proje kök dizininde .env dosyasını oluştur ve içine gerekli ortam değişkenlerini ekle.

+ npx prisma migrate dev --name init ya da npx prisma db push

+ npx prisma studio(Veritabanını görüntülemek için.)

+ npm run dev

+ http://localhost:3000(Proje burada başlatılır.)

*****************************************************************************************************

ADMIN GİRİŞ BİLGİLERİ

Kullanıcı Adı:userusername540@gmail.com
Şifre:123







