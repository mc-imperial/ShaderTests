#version 320 es
#define _int_5 _GLF_uniform_int_values[0]
#define _int_0 _GLF_uniform_int_values[1]
#define _int_11 _GLF_uniform_int_values[2]
#define _int_1 _GLF_uniform_int_values[3]
#define _float_0_0 _GLF_uniform_float_values[0]

precision highp float;

precision highp int;

// Contents of _GLF_uniform_float_values: 0.0
layout(set = 0, binding = 0) uniform buf0 {
 float _GLF_uniform_float_values[1];
};
// Contents of _GLF_uniform_int_values: [5, 0, 11, 1]
layout(set = 0, binding = 1) uniform buf1 {
 int _GLF_uniform_int_values[4];
};
// Contents of injectionSwitch: [0.0, 1.0]
layout(push_constant) uniform buf_push {
 highp vec2 injectionSwitch;
};
layout(location = 0) out vec4 _GLF_color;

struct S {
 int data;
} ;

S arr[10] = S[10](S(1), S(2), S(3), S(4), S(5), S(6), S(7), S(8), S(9), S(10));

void func0(inout S s)
{
}
int func1()
{
 int a = _int_0;
 for(int i = _int_0; i < _int_5; i ++)
  {
   S s = arr[a];
   if(gl_FragCoord.x < _float_0_0)
    {
     continue;
    }
   if(injectionSwitch.x > injectionSwitch.y)
    {
     continue;
    }
   if(s.data == _int_11)
    {
     return - 1;
    }
   if(injectionSwitch.x > injectionSwitch.y)
    {
     break;
    }
   if(gl_FragCoord.x < _float_0_0)
    {
     return - 1;
    }
   a = s.data;
  }
 return a;
}
void main()
{
 func0(arr[_int_1]);
 if(func1() == _int_5)
  {
   _GLF_color = vec4(_int_1, _int_0, _int_0, _int_1);
  }
 else
  {
   _GLF_color = vec4(_int_0);
  }
}
