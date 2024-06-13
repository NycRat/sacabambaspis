import { QuartzComponent, QuartzComponentConstructor, QuartzComponentProps } from "./types"

export default ((component?: QuartzComponent) => {
  if (component) {
    const Component = component
    const DesktopHalfOnly: QuartzComponent = (props: QuartzComponentProps) => {
      return <Component displayClass="desktop-half-only" {...props} />
    }

    DesktopHalfOnly.displayName = component.displayName
    DesktopHalfOnly.afterDOMLoaded = component?.afterDOMLoaded
    DesktopHalfOnly.beforeDOMLoaded = component?.beforeDOMLoaded
    DesktopHalfOnly.css = component?.css
    return DesktopHalfOnly
  } else {
    return () => <></>
  }
}) satisfies QuartzComponentConstructor
