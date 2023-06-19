declare module '*.png' {
    const content: any;
    export default content;
}

declare module '*.jpg' {
    const content: any;
    export default content;
}

declare module '*.jpeg' {
    const content: any;
    export default content;
}

declare module '*.gif' {
    const content: any;
    export default content;
}

declare module '*.svg' {
    const content: any;
    export default content;
}
// react-dom.d.ts
declare module "react-dom/client" {
    interface Root {
        render(children: React.ReactNode): void;
        unmount(): void;
    }

    export function createRoot(
        container: HTMLElement,
        options?: { hydrate?: boolean }
    ): Root;
}
