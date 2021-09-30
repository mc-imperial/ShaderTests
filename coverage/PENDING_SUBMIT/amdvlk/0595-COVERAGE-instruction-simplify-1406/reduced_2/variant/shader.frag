#version 320 es

precision highp float;

precision highp int;

// Contents of injectionSwitch: [0.0, 1.0]
layout(set = 0, binding = 0) uniform buf0 {
 highp vec2 injectionSwitch;
};
precision highp int;

precision highp float;

void main()
{
 int GLF_live8res = 1;
 GLF_live8res &= (~ 0) >> int(injectionSwitch.x);
 vec4(clamp(vec3(1.0), vec3(1.0), vec3(GLF_live8res == 1 ? 1.0 : 1.0)), 1.0);
}
