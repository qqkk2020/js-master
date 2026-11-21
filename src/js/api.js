// Модуль взаємодії з REST API та автономний fallback (Lab 9, Lab 10)
export const FALLBACK_TIP = {
    setup: "Порада від JSMaster:",
    punchline: "Завжди використовуйте суворе порівняння === замість неявного == для надійності коду!",
    isFallback: true
};

export async function fetchDailyTip() {
    try {
        const response = await fetch("https://official-joke-api.appspot.com/jokes/programming/random", {
            cache: "no-store"
        });
        if (!response.ok) throw new Error("HTTP error " + response.status);
        const data = await response.json();
        const item = Array.isArray(data) ? data[0] : data;
        return {
            setup: item.setup || "Порада з JavaScript:",
            punchline: item.punchline || "Модульність та чисті функції роблять код непереможним!",
            isFallback: false
        };
    } catch (e) {
        console.warn("REST API недоступне, підключено локальний fallback:", e.message);
        return { ...FALLBACK_TIP, isFallback: true };
    }
}
