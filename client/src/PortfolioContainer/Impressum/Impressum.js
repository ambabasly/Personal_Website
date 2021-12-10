import React from "react";
import "./Impressum.css";

const Impressum = () => {
    const myName = "Sylvester Arikhan";
    const currentDate = new Date();
    
  return (
    <div>
      <nav
        className="navbar navbar-expand-lg
            page-header
            fixed-top
            main-navigation
            -light
            bg-success"
      >
        <span className="navbar-brand mb-0 h1">Impressum</span>
        <div className="nav__menu" id="nav-menu">
          <ul className="nav__list grid">
            <li className="nav__item">
              <a href="index.html" className="nav__link active-link">
                <i className="uil uil-estate nav__icon" /> BACK TO HOME{" "}
                <span className="sr-only">(current)</span>
              </a>
            </li>
          </ul>
        </div>
        <div className="nav__btns">
          <div className="nav__toggle" id="nav-toggle">
            <i className="uil uil-estate nav__icon" />
          </div>
        </div>
      </nav>
      {/*Impressum start*/}  
      <h2><strong></strong></h2><br />
      <div className="body">
        <div className="about__container container grid">
              
              <div className="title">
              <p>Angaben gemäß § 5 TMG</p>
              <p>Sylvester Arikhan</p>
              <p>Freiberg</p>
              <p>
                <strong>Vertreten durch: </strong>
                <br />
                Sylvester Arikhan 
              </p>
              <p>
                <strong>Kontakt:</strong> E-Mail:{" "}
                <a href="mailto:sylvesterarikhan@gmail.com">
                  arikhansylvester@gmail.com
                </a>
                <br />
              </p>
            <div className="title">Haftungsausschluss: </div>
            <p>
              <h2 className="title">
                <strong>Haftung für Inhalte</strong>
              </h2>
              Die Inhalte unserer Seiten wurden mit größter Sorgfalt erstellt.
              Für die Richtigkeit, Vollständigkeit und Aktualität der Inhalte
              können wir jedoch keine Gewähr übernehmen. Als Diensteanbieter
              sind wir gemäß § 7 Abs.1 TMG für eigene Inhalte auf diesen Seiten
              nach den allgemeinen Gesetzen verantwortlich. Nach §§ 8 bis 10 TMG
              sind wir als Diensteanbieter jedoch nicht verpflichtet,
              übermittelte oder gespeicherte fremde Informationen zu überwachen
              oder nach Umständen zu forschen, die auf eine rechtswidrige
              Tätigkeit hinweisen. Verpflichtungen zur Entfernung oder Sperrung
              der Nutzung von Informationen nach den allgemeinen Gesetzen
              bleiben hiervon unberührt. Eine diesbezügliche Haftung ist jedoch
              erst ab dem Zeitpunkt der Kenntnis einer konkreten
              Rechtsverletzung möglich. Bei Bekanntwerden von entsprechenden
              Rechtsverletzungen werden wir diese Inhalte umgehend entfernen.
              <br />
              <h2 className="title">
                <strong>Haftung für Links</strong>
              </h2>
              Unser Angebot enthält Links zu externen Webseiten Dritter, auf
              deren Inhalte wir keinen Einfluss haben. Deshalb können wir für
              diese fremden Inhalte auch keine Gewähr übernehmen. Für die
              Inhalte der verlinkten Seiten ist stets der jeweilige Anbieter
              oder Betreiber der Seiten verantwortlich. Die verlinkten Seiten
              wurden zum Zeitpunkt der Verlinkung auf mögliche Rechtsverstöße
              überprüft. Rechtswidrige Inhalte waren zum Zeitpunkt der
              Verlinkung nicht erkennbar. Eine permanente inhaltliche Kontrolle
              der verlinkten Seiten ist jedoch ohne konkrete Anhaltspunkte einer
              Rechtsverletzung nicht zumutbar. Bei Bekanntwerden von
              Rechtsverletzungen werden wir derartige Links umgehend entfernen.
              <br />
              <h2 className="title">
                <strong>Urheberrecht</strong>
              </h2>
              Die durch die Seitenbetreiber erstellten Inhalte und Werke auf
              diesen Seiten unterliegen dem deutschen Urheberrecht. Die
              Vervielfältigung, Bearbeitung, Verbreitung und jede Art der
              Verwertung außerhalb der Grenzen des Urheberrechtes bedürfen der
              schriftlichen Zustimmung des jeweiligen Autors bzw. Erstellers.
              Downloads und Kopien dieser Seite sind nur für den privaten, nicht
              kommerziellen Gebrauch gestattet. Soweit die Inhalte auf dieser
              Seite nicht vom Betreiber erstellt wurden, werden die
              Urheberrechte Dritter beachtet. Insbesondere werden Inhalte
              Dritter als solche gekennzeichnet. Sollten Sie trotzdem auf eine
              Urheberrechtsverletzung aufmerksam werden, bitten wir um einen
              entsprechenden Hinweis. Bei Bekanntwerden von Rechtsverletzungen
              werden wir derartige Inhalte umgehend entfernen.
              <br />
              <h2 className="title">
                <strong>Datenschutz</strong>
              </h2>
              Die Nutzung unserer Webseite ist in der Regel ohne Angabe
              personenbezogener Daten möglich. Soweit auf unseren Seiten
              personenbezogene Daten (beispielsweise Name, Anschrift oder
              eMail-Adressen) erhoben werden, erfolgt dies, soweit möglich,
              stets auf freiwilliger Basis. Diese Daten werden ohne Ihre
              ausdrückliche Zustimmung nicht an Dritte weitergegeben. <br />
              Wir weisen darauf hin, dass die Datenübertragung im Internet (z.B.
              bei der Kommunikation per E-Mail) Sicherheitslücken aufweisen
              kann. Ein lückenloser Schutz der Daten vor dem Zugriff durch
              Dritte ist nicht möglich. <br />
              Der Nutzung von im Rahmen der Impressumspflicht veröffentlichten
              Kontaktdaten durch Dritte zur Übersendung von nicht ausdrücklich
              angeforderter Werbung und Informationsmaterialien wird hiermit
              ausdrücklich widersprochen. Die Betreiber der Seiten behalten sich
              ausdrücklich rechtliche Schritte im Falle der unverlangten
              Zusendung von Werbeinformationen, etwa durch Spam-Mails, vor.
              <br />
            </p>
            <h4 className="title">
              <br />
              Website Impressum erstellt durch{" "}
              <a href="https://www.impressum-generator.de">
                impressum-generator.de
              </a>{" "}
              von der{" "}
              <a href="https://www.kanzlei-hasselbach.de/" rel="nofollow">
                Kanzlei Hasselbach
              </a>
            </h4>
          </div>
        </div>
      </div>
      {/* FOOTER */}
      <footer className="footer">
        <div className="col2">
          <div className="social-media">
            <a href="https://www.linkedin.com/in/sylvester-arikhan-367381157/">
              <i className="fa fa-linkedin-square"></i>
            </a>
            <a href="https://github.com/ambabasly">
              <i className="fa fa-github"></i>
            </a>
            <a href="https://twitter.com/ambabasly">
              <i className="fa fa-twitter-square"></i>
            </a>
          </div>
          <div>
            <p> <i className="fa fa-copyright" aria-hidden="true"></i> {myName} {currentDate.getFullYear()} </p>
          </div>
          <span>All rights reserved.</span> <span>All rights reserved.</span>
        </div>
      </footer>
    </div>
  );
};
export default Impressum;