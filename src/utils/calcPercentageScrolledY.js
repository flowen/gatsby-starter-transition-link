/**
 *
 * @param {React Ref} component
 */

export default function calcPercentageScrolledY(component) {
  const vh = window.innerHeight
  const bounds = component.getBoundingClientRect()
  const offsetTop = vh * 0.25
  const offsetBottom = vh * 0.25
  //prettier-ignore
  const percentage =
    1 -
    Math.max(
      0,
      Math.min(1, 
        (bounds.bottom - offsetTop) / 
        (vh + bounds.height - offsetBottom - offsetTop))
    )

  return percentage
}
