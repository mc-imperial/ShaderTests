#version 320 es
#define _int_5 _GLF_uniform_int_values[0]
#define _int_1 _GLF_uniform_int_values[1]
#define _int_0 _GLF_uniform_int_values[2]
#define _float_0_0 _GLF_uniform_float_values[0]
#define _float_3_9 _GLF_uniform_float_values[1]
#define _float_4_1 _GLF_uniform_float_values[2]
#define _float_1_0 _GLF_uniform_float_values[3]

precision highp float;

precision highp int;

// Contents of _GLF_uniform_float_values: [0.0, 3.9, 4.1, 1.0]
layout(set = 0, binding = 0) uniform buf0 {
 float _GLF_uniform_float_values[4];
};
// Contents of _GLF_uniform_int_values: [5, 1, 0]
layout(set = 0, binding = 1) uniform buf1 {
 int _GLF_uniform_int_values[3];
};
layout(location = 0) out vec4 _GLF_color;

void main()
{
 _GLF_color = vec4(_int_1);
 float f = _float_0_0;
 for(int i = _int_1; i < _int_5; i ++)
  {
   for(int j = _int_0; j < _int_1; j ++)
    {
     for(int k = _int_0; k < i; k ++)
      {
       f += mat2(_float_1_0)[j][clamp(k, _int_0, _int_1)];
       vec4 tmp;
       for(int l = _int_0; l < _int_1; l ++)
        {
         tmp = _GLF_color;
        }
       _GLF_color = tmp;
       if(gl_FragCoord.y < _float_0_0)
        {
         return;
        }
       _GLF_color = vec4(_int_0);
      }
    }
  }
 if(f > _float_3_9 && f < _float_4_1)
  {
   _GLF_color = vec4(_int_1, _int_0, _int_0, _int_1);
  }
 else
  {
   _GLF_color = vec4(_int_0);
  }
}
