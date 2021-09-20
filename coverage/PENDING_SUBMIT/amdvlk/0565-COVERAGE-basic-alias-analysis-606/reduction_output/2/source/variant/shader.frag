#version 320 es
#define _int_0 _GLF_uniform_int_values[0]
#define _int_1 _GLF_uniform_int_values[1]
#define _float_1_0 _GLF_uniform_float_values[0]

precision highp float;

precision highp int;

// Contents of _GLF_uniform_float_values: 1.0
layout(set = 0, binding = 0) uniform buf0 {
 float _GLF_uniform_float_values[1];
};
// Contents of _GLF_uniform_int_values: [0, 1]
layout(set = 0, binding = 1) uniform buf1 {
 int _GLF_uniform_int_values[2];
};
const int _GLF_global_loop_bound = 10;

int _GLF_global_loop_count = 0;

layout(location = 0) out vec4 _GLF_color;

void main()
{
 vec4 v = vec4(_float_1_0);
 for(int i = _int_1; i >= 0 && _GLF_global_loop_count < _GLF_global_loop_bound; i --)
  {
   _GLF_global_loop_count ++;
   for(int j = 1; j >= 1 && _GLF_global_loop_count < _GLF_global_loop_bound; j --)
    {
     _GLF_global_loop_count ++;
     v[i] -= mat4(1.0)[i][_int_1];
    }
  }
 if(v == vec4(_int_1, _int_0, _int_1, _int_1))
  {
   _GLF_color = vec4(_int_1, _int_0, _int_0, _int_1);
  }
 else
  {
   _GLF_color = vec4(_int_0);
  }
}
