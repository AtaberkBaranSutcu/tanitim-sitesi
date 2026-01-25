// src/App.jsx
import "./styles.css";

export default function App() {
    return (
        <div className="page">
            <header className="header">
                <div className="container header__inner">
                    <a className="brand" href="#top" aria-label="Ana sayfa">
                        <div className="brand__logo" aria-hidden="true">
                            ANKARA DOLAP MONTAJ
                        </div>
                        <div className="brand__text">
                            <div className="brand__name">Ankara Dolap Montaj</div>
                            <div className="brand__tagline">
                                Demonte dolap ve gardırop montajı | Sökme - takma | Ankara genelinde servis
                            </div>
                        </div>
                    </a>

                    <nav className="nav" aria-label="Sayfa menüsü">
                        <a className="nav__link" href="#about">
                            Hakkımızda
                        </a>
                        <a className="nav__link" href="#services">
                            Hizmetler
                        </a>
                        <a className="nav__link" href="#contact">
                            İletişim
                        </a>
                    </nav>
                </div>
            </header>

            <main id="top">
                <section className="hero">
                    <div className="container hero__inner">
                        <div className="hero__content">
                            <h1 className="hero__title">Ankara dolap montaj ve gardırop kurulumu</h1>
                            <p className="hero__subtitle">
                                Demonte alınan dolap, gardırop, şifonyer ve çekmeceli dolapların kurulumunu yapıyoruz.
                                Küçük dolaplardan büyük gardıroplara kadar sağlam montaj, düzgün kapak ayarı ve temiz işçilik.
                            </p>

                            <div className="hero__cta">
                                <a className="btn btn--primary" href="#contact">
                                    Hemen İletişime Geç
                                </a>
                                <a className="btn btn--ghost" href="#services">
                                    Hizmetleri Gör
                                </a>
                            </div>

                            <div className="hero__meta">
                                <div className="metaCard">
                                    <div className="metaCard__label">Çalışma Saatleri</div>
                                    <div className="metaCard__value">Pzt - Pzr 06:00 - 23:00</div>
                                </div>
                                <div className="metaCard">
                                    <div className="metaCard__label">Hizmet Bölgesi</div>
                                    <div className="metaCard__value">Ankara (tüm ilçeler)</div>
                                </div>
                                <div className="metaCard">
                                    <div className="metaCard__label">Telefon</div>
                                    <div className="metaCard__value">
                                        <a className="link" href="tel:+905360570608">
                                            +90 536 057 06 08
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="hero__card" aria-label="Öne çıkanlar">
                            <h2 className="cardTitle">Hızlı, Sağlam ve Temiz Montaj</h2>
                            <ul className="checkList">
                                <li>Demonte parça kontrolü ve doğru kurulum sırası</li>
                                <li>Düzgün hizalama, sağlam bağlantı ve sıkılık kontrolü</li>
                                <li>Kapak, menteşe, ray ve sürgü sistem ayarı</li>
                                <li>Montaj sonrası son kontrol ve temiz teslim</li>
                            </ul>
                            <div className="cardDivider" />
                            <div className="cardContact">
                                <div className="cardContact__label">WhatsApp</div>
                                <a
                                    className="btn btn--primary btn--full"
                                    href="https://wa.me/905360570608"
                                    target="_blank"
                                    rel="noreferrer"
                                >
                                    WhatsApp’tan Mesaj Gönder
                                </a>
                            </div>
                        </div>
                    </div>
                </section>

                <section id="about" className="section">
                    <div className="container">
                        <h2 className="section__title">Hakkımızda</h2>
                        <p className="section__text">
                            Ankara’da demonte dolap montajı ve gardırop montajı hizmeti veriyoruz.
                            İnternetten alınan veya mağazadan demonte gelen mobilyalar için kurulum yaparız.
                            Dolabın düzgün durması, kapakların doğru kapanması ve çekmecelerin rahat çalışması için
                            ayarlarını titizlikle tamamlarız.
                        </p>

                        <div className="grid3">
                            <div className="feature">
                                <div className="feature__title">Ankara’da Hızlı Servis</div>
                                <div className="feature__text">
                                    Randevu planı ve tahmini süre bilgisi net şekilde paylaşılır.
                                </div>
                            </div>
                            <div className="feature">
                                <div className="feature__title">Kurulum ve Ayar</div>
                                <div className="feature__text">
                                    Kapak ve menteşe ayarı, ray ve sürgü kontrolü, denge ve sıkılık kontrolü yapılır.
                                </div>
                            </div>
                            <div className="feature">
                                <div className="feature__title">Sökme ve Takma</div>
                                <div className="feature__text">
                                    Taşınma öncesi söküm, yeni adreste tekrar montaj ve eksik parça kontrolü yapılır.
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <section id="services" className="section section--alt">
                    <div className="container">
                        <h2 className="section__title">Hizmetler</h2>
                        <p className="section__text">
                            Demonte mobilya kurulumu için yerinde montaj yapılır. Mutfak dolabı montajı yapmıyoruz.
                            Küçük dolaplardan büyük gardıroplara kadar kurulum desteği sağlıyoruz.
                        </p>

                        <div className="grid3">
                            <article className="serviceCard">
                                <h3 className="serviceCard__title">Demonte Dolap Montajı</h3>
                                <p className="serviceCard__text">
                                    Çok amaçlı dolap, ayakkabılık, çekmeceli dolap, şifonyer ve benzeri ürünlerin kurulumu.
                                </p>
                            </article>

                            <article className="serviceCard">
                                <h3 className="serviceCard__title">Gardırop Montajı ve Kapak Ayarı</h3>
                                <p className="serviceCard__text">
                                    Tek kapaklı veya çok kapaklı gardırop montajı, menteşe ayarı, sürgü kapak ve ray ayarı.
                                </p>
                            </article>

                            <article className="serviceCard">
                                <h3 className="serviceCard__title">Sökme - Takma (Taşınma Sonrası)</h3>
                                <p className="serviceCard__text">
                                    Gardırop sökme, dolap sökme, parça kontrolü ve yeni adreste tekrar kurulum.
                                </p>
                            </article>
                        </div>
                    </div>
                </section>

                <section id="contact" className="section">
                    <div className="container">
                        <h2 className="section__title">İletişim</h2>
                        <p className="section__text">
                            Fiyat bilgisi için dolabın türünü (dolap, gardırop, şifonyer vb.) ve kurulacağı ilçeyi yazmanız yeterli.
                            Mümkünse ürün linki veya fotoğraf paylaşın. Ankara dolap montaj ustası arayanlar için hızlı dönüş sağlarız.
                        </p>

                        <div className="contactGrid">
                            <div className="contactCard">
                                <div className="contactCard__label">Telefon</div>
                                <a className="contactCard__value link" href="tel:+905360570608">
                                    +90 536 057 06 08
                                </a>
                            </div>

                            <div className="contactCard">
                                <div className="contactCard__label">E-posta</div>
                                <a className="contactCard__value link" href="mailto:info@example.com">
                                    info@example.com
                                </a>
                            </div>

                            <div className="contactCard">
                                <div className="contactCard__label">Konum</div>
                                <div className="contactCard__value">Ankara</div>
                            </div>
                        </div>

                        <div className="contactActions">
                            <a className="btn btn--primary" href="tel:+905360570608">
                                Ara
                            </a>
                            <a
                                className="btn btn--ghost"
                                href="https://wa.me/905360570608"
                                target="_blank"
                                rel="noreferrer"
                            >
                                WhatsApp
                            </a>
                        </div>
                    </div>
                </section>
            </main>

            <footer className="footer">
                <div className="container footer__inner">
                    <div>© {new Date().getFullYear()} Ankara Dolap Montaj</div>
                    <div className="footer__links">
                        <a className="link" href="#about">
                            Hakkımızda
                        </a>
                        <a className="link" href="#services">
                            Hizmetler
                        </a>
                        <a className="link" href="#contact">
                            İletişim
                        </a>
                    </div>
                </div>
            </footer>
        </div>
    );
}