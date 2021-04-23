#version 320 es
#define _int_0 _GLF_uniform_int_values[0]
#define _int_1 _GLF_uniform_int_values[1]
#define _int_14 _GLF_uniform_int_values[2]
#define _int_5 _GLF_uniform_int_values[3]
#define _int_10 _GLF_uniform_int_values[4]
#define _int_13 _GLF_uniform_int_values[5]

precision highp int;

precision highp float;

// Contents of _GLF_uniform_int_values: [0, 1, 14, 5, 10, 13]
layout(set = 0, binding = 0) uniform buf0 {
 int _GLF_uniform_int_values[6];
};
layout(location = 0) out vec4 _GLF_color;

int func(int x)
{
 if(x > _int_5)
  {
   return 2;
  }
 vec4 v;
 for(int i = _int_0; i < _int_10; i ++)
  {
   v = vec4(float(x + i));
  }
 _GLF_color = v;
 return _int_1;
}
void main()
{
 int a = _int_0;
 for(int i = _int_1; i < _int_10; i ++)
  {
   a += func(i);
  }
 if(_GLF_color == vec4(_int_14) && a == _int_13)
  {
   _GLF_color = vec4(_int_1, _int_0, _int_0, _int_1);
  }
 else
  {
   _GLF_color = vec4(_int_0);
  }
}
