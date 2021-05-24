#version 320 es
#define _int_4 _GLF_uniform_int_values[0]
#define _int_1 _GLF_uniform_int_values[1]
#define _int_2 _GLF_uniform_int_values[2]
#define _int_3 _GLF_uniform_int_values[3]
#define _int_0 _GLF_uniform_int_values[4]
#define _float_1_0 _GLF_uniform_float_values[0]
#define _float_0_0 _GLF_uniform_float_values[1]

precision highp float;

precision highp int;

// Contents of _GLF_uniform_float_values: [1.0, 0.0]
layout(set = 0, binding = 0) uniform buf0 {
 float _GLF_uniform_float_values[2];
};
// Contents of _GLF_uniform_int_values: [4, 1, 2, 3, 0]
layout(set = 0, binding = 1) uniform buf1 {
 int _GLF_uniform_int_values[5];
};
layout(location = 0) out vec4 _GLF_color;

void main()
{
 vec4 v = vec4(_int_1, _int_2, _int_3, _int_4);
 for(int i = _int_0; i < _int_4; i ++)
  {
   if(mat4(v, v, v, v)[0][i] > _float_1_0)
    {
     v[i] = clamp(v, vec4(_float_0_0), vec4(_float_1_0))[_int_1];
    }
  }
 if(v == vec4(_int_1))
  {
   _GLF_color = vec4(_int_1, _int_0, _int_0, _int_1);
  }
 else
  {
   _GLF_color = vec4(_int_0);
  }
}
