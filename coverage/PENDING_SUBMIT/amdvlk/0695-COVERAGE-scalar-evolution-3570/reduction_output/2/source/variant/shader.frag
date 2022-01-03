#version 320 es
#define _int_1 _GLF_uniform_int_values[0]
#define _int_0 _GLF_uniform_int_values[1]

precision highp float;

precision highp int;

const int _GLF_global_loop_bound = 100;

int _GLF_global_loop_count = 0;

// Contents of _GLF_uniform_int_values: [1, 0]
layout(set = 0, binding = 0) uniform buf0 {
 int _GLF_uniform_int_values[2];
};
// Contents of two: 2
layout(set = 0, binding = 1) uniform buf1 {
 int two;
};
layout(location = 0) out vec4 _GLF_color;

int func()
{
 while((true) && (_GLF_global_loop_count < _GLF_global_loop_bound))
  {
   _GLF_global_loop_count ++;
   for(int i = two; (i > _int_0) && (_GLF_global_loop_count < _GLF_global_loop_bound); i --)
    {
     _GLF_global_loop_count ++;
     if(two > _int_1)
      {
       return _int_1;
      }
    }
  }
}
void main()
{
 int a = _int_0;
 if(two > _int_1)
  {
   a = func();
  }
 if(a == _int_1)
  {
   _GLF_color = vec4(_int_1, _int_0, _int_0, _int_1);
  }
 else
  {
   _GLF_color = vec4(_int_0);
  }
}
