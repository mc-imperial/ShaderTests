#version 320 es
#define _int_4 _GLF_uniform_int_values[0]
#define _int_1 _GLF_uniform_int_values[1]
#define _int_2 _GLF_uniform_int_values[2]
#define _int_0 _GLF_uniform_int_values[3]

precision highp float;

precision highp int;

const int _GLF_global_loop_bound = 100;

int _GLF_global_loop_count = 0;

// Contents of _GLF_uniform_int_values: [4, 1, 2, 0]
layout(set = 0, binding = 0) uniform buf0 {
 int _GLF_uniform_int_values[4];
};
layout(location = 0) out vec4 _GLF_color;

void main()
{
 int a = _int_0;
 for(int i = _int_0; (i < _int_1) && (_GLF_global_loop_count < _GLF_global_loop_bound); i ++)
  {
   _GLF_global_loop_count ++;
   {
    int j = _int_1, i = i;
    while((i <= _int_1) && (_GLF_global_loop_count < _GLF_global_loop_bound))
     {
      _GLF_global_loop_count ++;
      a ++;
      for(      j = 1;
 (j < i) && (_GLF_global_loop_count < _GLF_global_loop_bound); j ++)
       {
        _GLF_global_loop_count ++;
        a = _int_0;
        i = (_int_4 * i) / 1000;
       }
      i ++;
     }
   }
  }
 if(a == _int_2)
  {
   _GLF_color = vec4(_int_1, _int_0, _int_0, _int_1);
  }
 else
  {
   _GLF_color = vec4(_int_0);
  }
}
