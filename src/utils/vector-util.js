/*
 * Vector math functions
 */

const VectorUtil = {}

/*
 * dot product of a and b
 */
VectorUtil.dot = (a, b) => a.x * b.x + a.y * b.y

/*
 * calculate the magnitude of vector a
 */
VectorUtil.magnitude = (a) => Math.sqrt(a.x * a.x + a.y * a.y)

/*
 * Normalise vector a
 */
VectorUtil.normalize = (a) => {
  const mag = VectorUtil.magnitude(a)

  if (mag === 0) {
    return {
      x: 0,
      y: 0,
    }
  } else {
    return {
      x: a.x / mag,
      y: a.y / mag,
    }
  }
}

/*
 * add a and b
 */
VectorUtil.add = (a, b) => ({
  x: a.x + b.x,
  y: a.y + b.y,
})

/*
 * subtract b from a
 */
VectorUtil.sub = (a, b) => ({
  x: a.x - b.x,
  y: a.y - b.y,
})

/*
 * multiply a and b
 */
VectorUtil.mult = (a, b) => ({
  x: a.x * b.x,
  y: a.y * b.y,
})

/*
 * Calculate distance between a and b
 */
VectorUtil.distance = (a, b) => {
  const x = a.x - b.x
  const y = a.y - b.y
  return { x, y }
}

VectorUtil.angle = (a, b) => {
  const ax = a.x - b.x
  const ay = a.y - b.y
  return Math.atan2(ay, ax)
}

VectorUtil.angleBetween = (a, b) =>
  Math.acos(VectorUtil.dot(a, b) / (VectorUtil.magnitude(a) * VectorUtil.magnitude(b)))

/*
 * Rotate
 */
VectorUtil.rotate = (a, angle) => {
  const ca = Math.cos(angle)
  const sa = Math.sin(angle)
  const rx = a.x * ca - a.y * sa
  const ry = a.x * sa + a.y * ca

  return {
    x: rx * -1,
    y: ry * -1,
  }
}

/*
 * Invert x and y values
 */
VectorUtil.invert = (a) => ({
  x: a.x * -1,
  y: a.y * -1,
})

/*
 * VectorUtil cross product function has been simplified by
 * setting x and y to zero because vectors a and b
 * lie in the canvas plane
 */
VectorUtil.cross = (a, b) => ({
  x: 0,
  y: 0,
  z: a.x * b.y - b.x * a.y,
})

export default VectorUtil
