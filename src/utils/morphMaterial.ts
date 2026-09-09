import * as THREE from 'three'

/** Static surface samples stay on the GPU; only the flight uniforms change. */
export function createMorphMaterial() {
  return new THREE.ShaderMaterial({
    transparent: true,
    depthWrite: false,
    blending: THREE.AdditiveBlending,
    uniforms: {
      uFrom: { value: new THREE.Matrix4() },
      uTo: { value: new THREE.Matrix4() },
      uProgress: { value: 0 },
      uTime: { value: 0 },
      uOpacity: { value: 0 },
      uPixelRatio: { value: 1 },
      uColor: { value: new THREE.Color(0x8ceeff) },
    },
    vertexShader: /* glsl */ `
      attribute vec3 aTarget;
      attribute vec3 aSeed;
      uniform mat4 uFrom;
      uniform mat4 uTo;
      uniform float uProgress;
      uniform float uTime;
      uniform float uPixelRatio;
      varying float vAlpha;
      void main() {
        float leave = smoothstep(aSeed.x * 0.12, 0.48, uProgress);
        float arrive = smoothstep(0.46 + aSeed.y * 0.12, 1.0, uProgress);
        vec3 start = (uFrom * vec4(position, 1.0)).xyz;
        vec3 finish = (uTo * vec4(aTarget, 1.0)).xyz;
        float angle = aSeed.z * 6.283185 + uTime * 0.12;
        float radius = 1.3 + aSeed.y * 1.8;
        float phi = acos(aSeed.x * 2.0 - 1.0);
        vec3 arc = vec3(cos(angle) * sin(phi) * radius, cos(phi) * radius,
                        sin(angle) * sin(phi) * radius * 0.55);
        vec3 point = mix(mix(start, arc, leave), finish, arrive);
        vec4 mv = modelViewMatrix * vec4(point, 1.0);
        gl_Position = projectionMatrix * mv;
        gl_PointSize = clamp((14.0 + aSeed.x * 9.0) * uPixelRatio / max(1.0, -mv.z), 1.0, 5.0 * uPixelRatio);
        vAlpha = 0.45 + aSeed.y * 0.55;
      }
    `,
    fragmentShader: /* glsl */ `
      uniform vec3 uColor;
      uniform float uOpacity;
      varying float vAlpha;
      void main() {
        float r = length(gl_PointCoord - 0.5) * 2.0;
        float alpha = (1.0 - smoothstep(0.15, 1.0, r)) * uOpacity * vAlpha;
        if (alpha < 0.005) discard;
        gl_FragColor = vec4(uColor, alpha);
        #include <tonemapping_fragment>
        #include <colorspace_fragment>
      }
    `,
  })
}
