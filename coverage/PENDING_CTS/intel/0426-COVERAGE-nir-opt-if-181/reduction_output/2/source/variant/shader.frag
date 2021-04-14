#version 320 es
#define _int_0 _GLF_uniform_int_values[0]
#define _int_10 _GLF_uniform_int_values[1]
#define _int_1 _GLF_uniform_int_values[2]

precision highp float;

precision highp int;

const int _GLF_global_loop_bound = 100;

int _GLF_global_loop_count = 0;

// Contents of _GLF_uniform_int_values: [0, 10, 1]
layout(set = 0, binding = 0) uniform buf0 {
 int _GLF_uniform_int_values[3];
};
layout(location = 0) out vec4 _GLF_color;

int func()
{
 int i = _int_0;
 do
  {
   _GLF_global_loop_count ++;
   i ++;
   if(true)
    {
     if(true)
      {
       return _int_1;
      }
    }
  }
 while((i < _int_10) && (_GLF_global_loop_count < _GLF_global_loop_bound));
 return _int_0;
}
void main()
{
 if(func() == _int_1)
  {
   _GLF_color = vec4(_int_1, _int_0, _int_0, _int_1);
  }
 else
  {
   _GLF_color = vec4(_int_0);
  }
}
