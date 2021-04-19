#version 320 es
#define _int_0 _GLF_uniform_int_values[0]
#define _int_2 _GLF_uniform_int_values[1]
#define _int_4 _GLF_uniform_int_values[2]
#define _int_1 _GLF_uniform_int_values[3]
#define _float_1_0 _GLF_uniform_float_values[0]

precision highp float;

precision highp int;

// Contents of _GLF_uniform_float_values: 1.0
layout(set = 0, binding = 0) uniform buf0 {
 float _GLF_uniform_float_values[1];
};
// Contents of _GLF_uniform_int_values: [0, 2, 4, 1]
layout(set = 0, binding = 1) uniform buf1 {
 int _GLF_uniform_int_values[4];
};
// Contents of one: 1.0
layout(set = 0, binding = 2) uniform buf2 {
 float one;
};
layout(location = 0) out vec4 _GLF_color;

mat4x2 m = mat4x2(0.0);

void func0(int x)
{
 if(x < 1 || (x > 1 && one > _float_1_0))
  {
   return;
  }
 if(one == _float_1_0)
  {
   for(int i = 0; i < 2; i ++)
    {
     m[clamp(clamp(x, _int_0, _int_4 - _int_1), 0, 4 - 1)][clamp(i, 0, 2 - 1)] += _float_1_0;
    }
  }
}
void func1()
{
 if(gl_FragCoord.y < 0.0)
  {
   return;
  }
 func0(1);
}
void main()
{
 func1();
 func1();
 if(m == mat4x2(_int_0, _int_0, _int_2, _int_2, _int_0, _int_0, _int_0, _int_0))
  {
   _GLF_color = vec4(_int_1, _int_0, _int_0, _int_1);
  }
 else
  {
   _GLF_color = vec4(_int_0);
  }
}
