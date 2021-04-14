#version 320 es
#define _int_0 _GLF_uniform_int_values[0]
#define _float_1_0 _GLF_uniform_float_values[0]

precision highp float;

precision highp int;

// Contents of _GLF_uniform_float_values: 1.0
layout(set = 0, binding = 0) uniform buf0 {
 float _GLF_uniform_float_values[1];
};
// Contents of _GLF_uniform_int_values: 0
layout(set = 0, binding = 1) uniform buf1 {
 int _GLF_uniform_int_values[1];
};
layout(location = 0) out vec4 _GLF_color;

void main()
{
 vec4 v = clamp(cosh(vec4(1.0)), _float_1_0, 1.0);
 _GLF_color = vec4(v.x, _int_0, _int_0, v.z);
}
