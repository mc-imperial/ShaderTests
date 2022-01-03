#version 320 es
#define _int_1 _GLF_uniform_int_values[0]
#define _int_0 _GLF_uniform_int_values[1]
#define _int_2 _GLF_uniform_int_values[2]
#define _float_1_0 _GLF_uniform_float_values[0]
#define _float_0_0 _GLF_uniform_float_values[1]

precision highp float;

precision highp int;

// Contents of _GLF_uniform_int_values: [1, 0, 2]
layout(set = 0, binding = 0) uniform buf0 {
 int _GLF_uniform_int_values[3];
};
// Contents of _GLF_uniform_float_values: [1.0, 0.0]
layout(set = 0, binding = 1) uniform buf1 {
 float _GLF_uniform_float_values[2];
};
// Contents of zero: 0
layout(push_constant) uniform buf_push {
 int zero;
};
layout(location = 0) out vec4 _GLF_color;

int func(float x)
{
 vec2 v = vec2(_float_1_0);
 while(zero >= 1)
  {
   if(v.x > _float_1_0)
    {
     int a = 1;
     for(int i = _int_0; i < _int_2; i ++)
      {
       for(int j = 1; j != (1 ^ zero); j --)
        {
         while(a >= 0)
          {
           x = _float_1_0;
           a --;
          }
        }
      }
     v = vec2(x);
    }
  }
 return _int_1;
}
void main()
{
 int a = _int_0;
 int b = func(_float_0_0);
 _GLF_color = vec4(b, a, a, b);
}
