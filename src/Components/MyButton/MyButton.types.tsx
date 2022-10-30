
export type MyButtons= {
    primary: ButtonSettings
    secondary: ButtonSettings
    secondary2: ButtonSettings
    buttonWithIcon: ButtonSettings
    likeButton: ButtonSettings
    dizlikeButton: ButtonSettings
}

type ButtonSettings = {
    content?: string
    styles: string
    disable: boolean
    iconName?: string
    action?: ()=>void
}
