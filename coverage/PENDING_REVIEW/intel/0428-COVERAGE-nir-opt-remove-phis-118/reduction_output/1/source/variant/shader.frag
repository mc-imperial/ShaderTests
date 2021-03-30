#version 320 es
#define _int_0 _GLF_uniform_int_values[0]
#define _int_4 _GLF_uniform_int_values[1]
#define _int_3 _GLF_uniform_int_values[2]
#define _int_1 _GLF_uniform_int_values[3]
#define _int_2 _GLF_uniform_int_values[4]

precision highp int;

precision highp float;

// Contents of _GLF_uniform_int_values: [0, 4, 3, 1, 2]
layout(set = 0, binding = 0) uniform buf0 {
 int _GLF_uniform_int_values[5];
};
layout(location = 0) out vec4 _GLF_color;

int func(int x)
{
 int a = _int_0;
 for(int i = _int_0; i < _int_4; i ++)
  {
   if(int[4](_int_1, _int_1, _int_1, _int_1)[a] > x)
    {
     if(true)
      {
       return _int_1;
      }
     else
      {
       a = _int_1;
      }
    }
   else
    {
     if(true)
      {
       return _int_2;
      }
    }
  }
 return _int_0;
}
void main()
{
 int a = func(_int_0);
 a += func(_int_1);
 if(a == _int_3)
  {
   _GLF_color = vec4(_int_1, _int_0, _int_0, _int_1);
  }
 else
  {
   _GLF_color = vec4(_int_0);
  }
}
