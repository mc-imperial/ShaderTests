#version 320 es

precision highp float;

precision highp int;

// Contents of injectionSwitch: [0.0, 1.0]
layout(set = 0, binding = 0) uniform buf0 {
 highp vec2 injectionSwitch;
};
void main()
{
 vec4(1.0, 1.0, 1.0, float(mat4(1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, dot(vec3(0.0, 0.0, 1.0), max(vec3(injectionSwitch.x, 1.0, 1.0), vec3(1.0))), 1.0, 1.0)));
}
