// Type declarations for gsap-trial plugins (no official @types package available)
declare module "gsap-trial/SplitText" {
  export class SplitText {
    chars: Element[];
    words: Element[];
    lines: Element[];
    constructor(
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      target: any,
      options?: {
        type?: string;
        linesClass?: string;
        wordsClass?: string;
        charsClass?: string;
        position?: string;
        reduceWhiteSpace?: boolean;
        special?: Record<string, string>;
        tag?: string;
      }
    );
    revert(): void;
    split(options?: object): SplitText;
  }
  export default SplitText;
}

declare module "gsap-trial/ScrollSmoother" {
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
