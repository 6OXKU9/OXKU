// USTAWIENIA STRONY. Uzupełnij przed publikacją; puste pola wyłączają daną funkcję.
window.USTAWIENIA = {
  // Adres strony bez ukośnika na końcu, np. "https://analizyrynku.pl".
  // Potrzebny do mapy strony (sitemap.xml), linków udostępniania i podglądu w mediach społecznościowych.
  domena: "https://oxku.netlify.app",

  // Dane do stopki, kontaktu i stron prawnych.
  wlasciciel: "",            // imię i nazwisko albo nazwa firmy
  adres: "",                 // adres do korespondencji
  email: "",                 // adres kontaktowy

  powiadomienia: {
    // Zapis na e-mail: adres „action” formularza z usługi newslettera (np. MailerLite, Buttondown, Brevo)
    // i nazwa pola na adres e-mail w tej usłudze. Pusty adres = formularz widoczny, ale wyłączony.
    emailFormularz: "",
    emailPole: "email",
    // Kanał na Telegramie, np. "https://t.me/analizyrynku". Pusty = przycisk wyłączony.
    telegram: ""
  },

  // Baner zgody na pliki cookie. Widżety TradingView ładują się dopiero po zgodzie.
  zgodaCookies: true
};
