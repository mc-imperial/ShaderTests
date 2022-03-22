#version 320 es
#define _int_1 _GLF_uniform_int_values[0]
#define _int_0 _GLF_uniform_int_values[1]
#define _int_2 _GLF_uniform_int_values[2]
#define _float_0_0 _GLF_uniform_float_values[0]

precision highp float;

precision highp int;

// Contents of _GLF_uniform_float_values: 0.0
layout(set = 0, binding = 0) uniform buf0 {
 float _GLF_uniform_float_values[1];
};
// Contents of _GLF_uniform_int_values: [1, 0, 2]
layout(set = 0, binding = 1) uniform buf1 {
 int _GLF_uniform_int_values[3];
};
const int _GLF_global_loop_bound = 5;

int _GLF_global_loop_count = 0;

layout(location = 0) out vec4 _GLF_color;

struct S {
 int data[10];
} ;

void main()
{
 S obj = S(int[10](_int_1, _int_1, _int_1, _int_1, _int_1, _int_1, _int_1, _int_1, _int_1, _int_1));
 obj.data[_int_1] = _int_0;
 int arr[10] = int[10](_int_0, _int_0, _int_0, _int_0, _int_0, _int_0, _int_0, _int_0, _int_0, _int_0);
 int a = _int_1;
 while(_GLF_global_loop_count < _GLF_global_loop_bound)
  {
   _GLF_global_loop_count ++;
   int b = arr[_int_1];
   do
    {
     _GLF_global_loop_count ++;
     if(gl_FragCoord.y > _float_0_0)
      {
       b ++;
      }
    }
   while((gl_FragCoord.x > _float_0_0) && (_GLF_global_loop_count < _GLF_global_loop_bound));
   int c = _int_1;
   if(obj.data[b] <= _int_1)
    {
     c ++;
    }
   arr[++ a] = c;
  }
 if(arr[_int_2] == _int_2)
  {
   _GLF_color = vec4(_int_1, _int_0, _int_0, _int_1);
  }
 else
  {
   _GLF_color = vec4(_int_0);
  }
}
