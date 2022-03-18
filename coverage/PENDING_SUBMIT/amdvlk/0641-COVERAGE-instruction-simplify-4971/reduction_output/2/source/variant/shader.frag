#version 320 es
#define _int_1 _GLF_uniform_int_values[0]
#define _int_0 _GLF_uniform_int_values[1]
#define _float_0_0 _GLF_uniform_float_values[0]

precision highp float;

precision highp int;

// Contents of _GLF_uniform_float_values: 0.0
layout(set = 0, binding = 0) uniform buf0 {
 float _GLF_uniform_float_values[1];
};
// Contents of _GLF_uniform_int_values: [1, 0]
layout(set = 0, binding = 1) uniform buf1 {
 int _GLF_uniform_int_values[2];
};
const int _GLF_global_loop_bound = 10;

int _GLF_global_loop_count = 0;

// Contents of zero: 0.0
layout(set = 0, binding = 2) uniform buf2 {
 float zero;
};
layout(location = 0) out vec4 _GLF_color;

vec4 func()
{
 do
  {
   _GLF_global_loop_count ++;
   if(determinant(mat4(_int_1, _int_1, _int_1, _int_1, _int_1, _int_1, _int_1, _int_1, _int_1, _int_1, _int_1, 1, 1, zero, 0, 0)) == _float_0_0)
    {
     return vec4(_int_1, _int_0, _int_0, _int_1);
    }
  }
 while(_GLF_global_loop_count < _GLF_global_loop_bound);
 return vec4(_int_0);
}
void main()
{
 _GLF_color = func();
}
