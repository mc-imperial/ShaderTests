#version 320 es
#define _int_20 _GLF_uniform_int_values[0]
#define _int_1 _GLF_uniform_int_values[1]
#define _int_0 _GLF_uniform_int_values[2]
#define _int_5 _GLF_uniform_int_values[3]
#define _int_3 _GLF_uniform_int_values[4]
#define _float_0_0 _GLF_uniform_float_values[0]

precision highp float;

precision highp int;

// Contents of _GLF_uniform_float_values: 0.0
layout(set = 0, binding = 0) uniform buf0 {
 float _GLF_uniform_float_values[1];
};
// Contents of _GLF_uniform_int_values: [20, 1, 0, 5, 3]
layout(set = 0, binding = 1) uniform buf1 {
 int _GLF_uniform_int_values[5];
};
const int _GLF_global_loop_bound = 10;

int _GLF_global_loop_count = 0;

layout(location = 0) out vec4 _GLF_color;

void main()
{
 int a = _int_1;
 for(int i = _int_0; i < _int_3; i ++)
  {
   if(gl_FragCoord.x > _float_0_0)
    {
     a ++;
    }
  }
 while(_GLF_global_loop_count < _GLF_global_loop_bound)
  {
   _GLF_global_loop_count ++;
   if(a * a + _int_1 > _int_20)
    {
     break;
    }
   a ++;
  }
 if(a == _int_5)
  {
   _GLF_color = vec4(_int_1, _int_0, _int_0, _int_1);
  }
 else
  {
   _GLF_color = vec4(_int_0);
  }
}
