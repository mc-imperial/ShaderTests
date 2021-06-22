#version 320 es

precision highp float;

// Contents of injectionSwitch: [0.0, 1.0]
layout(push_constant) uniform buf_push {
 highp vec2 injectionSwitch;
};
layout(location = 0) out vec4 _GLF_color;

layout(set = 0, binding = 0) uniform sampler2D tex;

void main()
{
 // This is semantically same as in reference shader.
 _GLF_color = texture(tex,
    // Result of mix = vec4(gl_FragCoord)
    mix(
        clamp(
            vec4(1.0, (gl_FragCoord)[1], (gl_FragCoord)[2], (gl_FragCoord)[3]),
            vec4(1.0, (gl_FragCoord)[1], (gl_FragCoord)[2], (gl_FragCoord)[3]),
            vec4(1.0, (gl_FragCoord)[1], (gl_FragCoord)[2], (gl_FragCoord)[3])
        ),
        vec4((gl_FragCoord)[0], 1.0, 1.0, 1.0),
        bvec4(true, (injectionSwitch.x > injectionSwitch.y), false, false)
    ).xy * (1.0 / 256.0));
}
