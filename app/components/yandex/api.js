let apiLoaded = false;
let loading = null;

export function loadYandexApi({ apikey, lang = "ru_RU" } = {}) {
  if (apiLoaded) return Promise.resolve(window.ymaps);
  if (loading) return loading;

  loading = new Promise((resolve, reject) => {
    if (window.ymaps) {
      apiLoaded = true;
      resolve(window.ymaps);
      return;
    }

    const src = `https://api-maps.yandex.ru/2.1/?apikey=${apikey}&lang=${lang}`;
    const existing = Array.from(document.scripts).find((s) => s.src && s.src.startsWith(src.split("?")[0]));
    if (existing) {
      existing.addEventListener("load", () => {
        apiLoaded = true;
        resolve(window.ymaps);
      });
      existing.addEventListener("error", (e) => reject(e));
      return;
    }

    const script = document.createElement("script");
    script.src = src;
    script.async = true;
    script.onload = () => {
      apiLoaded = true;
      resolve(window.ymaps);
    };
    script.onerror = (e) => reject(e);
    document.body.appendChild(script);
  });

  return loading;
}
