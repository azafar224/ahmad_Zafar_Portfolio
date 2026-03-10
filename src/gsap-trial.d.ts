// gsap@3.12+ ships SplitText and ScrollSmoother as part of the free package.
// These declarations are only needed if TypeScript cannot resolve them automatically.
// If you get "module not found" errors for gsap/SplitText or gsap/ScrollSmoother,
// this file provides the fallback type stubs.

declare module "gsap/SplitText" {
  export class SplitText {
    chars: Element[];
    words: Element[];
    lines: Element[];
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    constructor(target: any, options?: {
      type?: string;
      linesClass?: string;
      wordsClass?: string;
      charsClass?: string;
      position?: string;
      reduceWhiteSpace?: boolean;
      special?: Record<string, string>;
      tag?: string;
    });
    revert(): void;
    split(options?: object): SplitText;
  }
  export default SplitText;
}

declare module "gsap/ScrollSmoother" {
  export class ScrollSmoother {
    static create(options?: {
      wrapper?: string | Element;
      content?: string | Element;
      smooth?: number;
      speed?: number;
      effects?: boolean;
      autoResize?: boolean;
      ignoreMobileResize?: boolean;
      normalizeScroll?: boolean;
    }): ScrollSmoother;
    static refresh(safe?: boolean): void;
    static isTouch: number;
    scrollTop(position?: number): number;
    scrollTo(
      target: string | Element | number,
      smooth?: boolean,
      position?: string
    ): void;
    paused(value?: boolean): boolean | ScrollSmoother;
    kill(): void;
  }
  export default ScrollSmoother;
}
