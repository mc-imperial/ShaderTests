#version 320 es
#define _int_10 _GLF_uniform_int_values[0]
#define _int_1 _GLF_uniform_int_values[1]
#define _int_0 _GLF_uniform_int_values[2]

precision highp int;

precision highp float;

const int _GLF_global_loop_bound = 100;

int _GLF_global_loop_count = 0;

// Contents of _GLF_uniform_int_values: [10, 1, 0]
layout(set = 0, binding = 0) uniform buf0 {
 int _GLF_uniform_int_values[3];
};
// Contents of zero: 0
layout(set = 0, binding = 1) uniform buf1 {
 int zero;
};
layout(location = 0) out vec4 _GLF_color;

void main()
{
 int i = _int_1;
 do
  {
   _GLF_global_loop_count ++;
   switch(i)
    {
     case 0:
     if(bitCount(findMSB(_int_1)) > 1)
      {
       continue;
      }
    }
   i ++;
  }
 while((i < _int_10) && (_GLF_global_loop_count < _GLF_global_loop_bound));
 if(i == _int_10)
  {
   _GLF_color = vec4(_int_1, _int_0, _int_0, _int_1);
  }
 else
  {
   _GLF_color = vec4(_int_0);
  }
}
