#version 320 es
#define _int_1 _GLF_uniform_int_values[0]
#define _int_0 _GLF_uniform_int_values[1]
#define _int_100 _GLF_uniform_int_values[2]
#define _float_99_0 _GLF_uniform_float_values[0]
#define _float_1_0 _GLF_uniform_float_values[1]
#define _float_5_0 _GLF_uniform_float_values[2]

precision highp int;

precision highp float;

// Contents of _GLF_uniform_float_values: [99.0, 1.0, 5.0]
layout(set = 0, binding = 0) uniform buf0 {
 float _GLF_uniform_float_values[3];
};
// Contents of _GLF_uniform_int_values: [1, 0, 100]
layout(set = 0, binding = 1) uniform buf1 {
 int _GLF_uniform_int_values[3];
};
const int _GLF_global_loop_bound = 100;

int _GLF_global_loop_count = 0;

layout(location = 0) out vec4 _GLF_color;

void main()
{
 float f = _float_1_0;
 for(int i = _int_0; i < _int_100; i ++)
  {
   if(f > _float_1_0)
    {
    }
   f = 1.0;
   f = ((1.0 - clamp(_float_5_0, 1.0, f)) + vec3(float(i))).y;
  }
 if(f == _float_99_0)
  {
   _GLF_color = vec4(_int_1, _int_0, _int_0, _int_1);
  }
 else
  {
   _GLF_color = vec4(_int_0);
  }
}
