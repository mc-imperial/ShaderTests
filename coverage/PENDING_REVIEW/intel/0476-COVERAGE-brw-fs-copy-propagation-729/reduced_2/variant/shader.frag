#version 320 es

precision highp float;

precision highp int;

// Contents of injectionSwitch: [0.0, 1.0]
layout(set = 0, binding = 0) uniform buf0 {
 highp vec2 injectionSwitch;
};
layout(location = 0) out vec4 _GLF_color;

void main()
{
 vec4 c = vec4(1.0);
 c = vec4(~ (((injectionSwitch.x < 1.0) ? 0 : 1) | 1), 1.0, 1.0, 1);
 _GLF_color = c;
}
