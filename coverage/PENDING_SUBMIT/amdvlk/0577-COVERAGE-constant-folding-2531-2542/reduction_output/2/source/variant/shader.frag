#version 320 es
#define _int_1 _GLF_uniform_int_values[0]
#define _int_0 _GLF_uniform_int_values[1]
#define _uint_2 _GLF_uniform_uint_values[0]
#define _uint_1 _GLF_uniform_uint_values[1]

precision highp float;

precision highp int;

// Contents of _GLF_uniform_uint_values: [2, 1]
layout(set = 0, binding = 0) uniform buf0 {
 uint _GLF_uniform_uint_values[2];
};
// Contents of _GLF_uniform_int_values: [1, 0]
layout(set = 0, binding = 1) uniform buf1 {
 int _GLF_uniform_int_values[2];
};
layout(location = 0) out vec4 _GLF_color;

void main()
{
 uint a = _uint_1;
 if(uaddCarry(1u, 1u, a) == _uint_2)
  {
   _GLF_color = vec4(_int_1, _int_0, _int_0, _int_1);
  }
 else
  {
   _GLF_color = vec4(_int_0);
  }
}
