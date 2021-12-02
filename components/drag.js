
import versor from "versor"

// interpolate angles (slerp), see https://observablehq.com/@d3/world-tour


export default function versor
versor.interpolate(rotation0, rotation1); // function of (t)

// quaternion to rotate between p0 and p1, see d3-inertia
const p0 = [0, 0],
  p1 = [90, 0],
  c0 = versor.cartesian(p0),
  c1 = versor.cartesian(p1);
versor.delta(c0, c1); // [0.7071, 0.7071, 0, 0]

// tweening: quaternion to rotate halfway between p0 and p1
versor.delta(c0, c1, 0.5); // [0.9239, 0.3827, 0, 0]

// utilities

// get cartesian coordinates [x, y, z] given spherical coordinates [λ, φ].
versor.cartesian = function (e) {
  var l = e[0] * radians,
    p = e[1] * radians,
    cp = cos(p);
  return [cp * cos(l), cp * sin(l), sin(p)];
};

// create a quaternion from Euler angles
const q0 = versor([90, 0, 0]); // [0.7071068, 0.7071068, 0, 0]
const q1 = versor([0, 90, 0]); // [0.7071068, 0, 0.7071068, 0]

// the quaternion that represents q0 * q1.
q01 = versor.multiply(q0, q1); // [0.5, 0.5, 0.5, 0.5]

// Euler rotation angles [λ, φ, γ] for the given quaternion.
versor.rotation(q01); // [90, 0, 90]