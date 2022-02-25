#version 320 es
#define _int_1 _GLF_uniform_int_values[0]
#define _int_0 _GLF_uniform_int_values[1]
#define _int_2 _GLF_uniform_int_values[2]
#define _int_3 _GLF_uniform_int_values[3]
#define _float_1_0 _GLF_uniform_float_values[0]
#define _float_9_0 _GLF_uniform_float_values[1]
#define _float_10_0 _GLF_uniform_float_values[2]
#define _float_2_0 _GLF_uniform_float_values[3]

precision highp float;

precision highp int;

// Contents of _GLF_uniform_int_values: [1, 0, 2, 3]
layout(set = 0, binding = 0) uniform buf0 {
 int _GLF_uniform_int_values[4];
};
// Contents of _GLF_uniform_float_values: [1.0, 9.0, 10.0, 2.0]
layout(set = 0, binding = 1) uniform buf1 {
 float _GLF_uniform_float_values[4];
};
layout(location = 0) out vec4 _GLF_color;

void main()
{
 float f = _float_2_0;
 mat4 m = mat4(_float_1_0);
 int a = 1;
 for(int i = 1; i < 4; i ++)
  {
   if(gl_FragCoord.x < 0.0)
    {
     break;
    }
   if(a ++ >= 5)
    {
     break;
    }
   for(int j = 1; j < 6; j ++)
    {
     m[_int_1][i] = m[_int_1][_int_1] - f;
    }
   f = _float_1_0;
  }
 mat4 ref = mat4(_float_1_0);
 ref[_int_1][_int_1] = - _float_9_0;
 ref[_int_1][_int_2] = - _float_10_0;
 ref[_int_1][_int_3] = - _float_10_0;
 if(m == ref)
  {
   _GLF_color = vec4(_int_1, _int_0, _int_0, _int_1);
  }
 else
  {
   _GLF_color = vec4(_int_0);
  }
}
