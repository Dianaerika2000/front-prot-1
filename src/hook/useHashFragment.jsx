import { useEffect } from "react";

export function useHashFragment(offset = 0, trigger = true) {
  useEffect(() => {
    const scrollToHashElement = () => {
      const { hash } = window.location;
      const elementToScroll = document.getElementById('inicio');

      console.log("elemento "+ elementToScroll)
      if (!elementToScroll) return;

      window.scrollTo({
        top: elementToScroll.offsetTop - offset,
        behavior: "smooth"
      });
    };

    if (!trigger) return;

    scrollToHashElement();
    window.addEventListener("hashchange", scrollToHashElement);
    console.log("Funcionando el fragment");
    return () => window.removeEventListener("hashchange", scrollToHashElement);
  }, [trigger]);
}
