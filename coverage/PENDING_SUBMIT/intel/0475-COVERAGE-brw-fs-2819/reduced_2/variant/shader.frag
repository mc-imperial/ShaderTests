#version 320 es

precision highp int;

precision highp float;

float GLF_live0one = 1.0;

precision highp int;

precision highp float;

layout(location = 0) out vec4 _GLF_color;

// Contents of resolution: [256.0, 256.0]
layout(set = 0, binding = 0) uniform buf0 {
 vec2 resolution;
};
void main()
{
 vec2 z = vec2(1.0);
 z = resolution;
 float y = 1.0;
 y = z.y;
 float a = 1.0;
 a = y;
 vec3 hueColor_inline_return_value_0 = vec3(1.0);
 float angle = 1.0;
 angle = a;
 vec3 color = vec3(1.0);
 color = clamp(angle * vec3(1.0), false ? GLF_live0one : 0.0, 1.0);
 hueColor_inline_return_value_0 = color;
 _GLF_color = vec4(hueColor_inline_return_value_0, 1.0);
}
