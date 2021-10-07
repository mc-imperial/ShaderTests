#version 320 es
#define _int_3 _GLF_uniform_int_values[0]
#define _int_1 _GLF_uniform_int_values[1]
#define _int_0 _GLF_uniform_int_values[2]
#define _int_2 _GLF_uniform_int_values[3]
#define _float_1_0 _GLF_uniform_float_values[0]

precision highp float;

precision highp int;

const int _GLF_global_loop_bound = 100;

int _GLF_global_loop_count = 0;

// Contents of _GLF_uniform_float_values: 1.0
layout(set = 0, binding = 0) uniform buf0 {
 float _GLF_uniform_float_values[1];
};
// Contents of _GLF_uniform_int_values: [3, 1, 0, 2]
layout(set = 0, binding = 1) uniform buf1 {
 int _GLF_uniform_int_values[4];
};
// Contents of zero: 0.0
layout(set = 0, binding = 2) uniform buf2 {
 float zero;
};
layout(location = 0) out vec4 _GLF_color;

void main()
{
 mat4 m = mat4(_int_1);
 m = mat4(_int_1);
 vec4 v = vec4(_int_2);
 int a = _int_0;
 for(int i = _int_1; (a < _int_3) && (_GLF_global_loop_count < _GLF_global_loop_bound); i ++)
  {
   _GLF_global_loop_count ++;
   a ++;
   for(int j = _int_1; (i <= _int_1 && a < _int_3) && (_GLF_global_loop_count < _GLF_global_loop_bound); j --)
    {
     _GLF_global_loop_count ++;
     a ++;
     v[j] = m[j][i];
     if(zero > _float_1_0)
      {
       discard;
      }
    }
  }
 if(v == vec4(_int_0, _int_1, _int_2, _int_2))
  {
   _GLF_color = vec4(_int_1, _int_0, _int_0, _int_1);
  }
 else
  {
   _GLF_color = vec4(_int_0);
  }
}
