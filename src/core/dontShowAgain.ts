import { IntroJs } from "../intro";

const dontShowAgainCookieValue = "true";

/**
 * Set the "Don't show again" state
 *
 * @api private
 */
export function setDontShowAgain(intro: IntroJs, dontShowAgain: boolean) {
  if (dontShowAgain) {
    localStorage.setItem(intro._options.dontShowAgainCookie, dontShowAgainCookieValue);
  } else {
    localStorage.removeItem(intro._options.dontShowAgainCookie);
  }
}

/**
 * Get the "Don't show again" state from cookies
 *
 * @api private
 */
export function getDontShowAgain(intro: IntroJs): boolean {
  const dontShowCookie = localStorage.getItem(intro._options.dontShowAgainCookie);
  return dontShowCookie !== "" && dontShowCookie === dontShowAgainCookieValue;
}
