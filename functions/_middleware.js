// Hasło dla Cloudflare Pages (to samo co netlify/edge-functions/haslo.js, ten sam login i hasło).
// Cloudflare uruchamia ten plik przed każdym wejściem na stronę. W repozytorium jest tylko skrót SHA-256 z "login:hasło".
// Nowe hasło: printf 'login:haslo' | sha256sum. Żeby udostępnić stronę wszystkim, usuń ten plik.
const SKROT = "1cb94cfce97c86fa494bd53361c9c3a3a15e6586df34adc50d6fc44e51151c05";

async function sha256(tekst) {
  const bajty = await crypto.subtle.digest("SHA-256", new TextEncoder().encode(tekst));
  return Array.from(new Uint8Array(bajty), (b) => b.toString(16).padStart(2, "0")).join("");
}

export async function onRequest(context) {
  const naglowek = context.request.headers.get("authorization") || "";
  if (naglowek.startsWith("Basic ")) {
    try {
      const dane = new TextDecoder().decode(Uint8Array.from(atob(naglowek.slice(6)), (c) => c.charCodeAt(0)));
      if ((await sha256(dane)) === SKROT) {
        const odp = await context.next();
        const nowa = new Response(odp.body, odp);
        nowa.headers.set("X-Robots-Tag", "noindex, nofollow");
        return nowa;
      }
    } catch (e) { /* błędny nagłówek: traktuj jak brak hasła */ }
  }
  return new Response("Strona jest niepubliczna. Podaj login i hasło.", {
    status: 401,
    headers: {
      "WWW-Authenticate": 'Basic realm="AnalizyRynku", charset="UTF-8"',
      "Content-Type": "text/plain; charset=utf-8",
      "X-Robots-Tag": "noindex, nofollow",
      "Cache-Control": "no-store",
    },
  });
}
