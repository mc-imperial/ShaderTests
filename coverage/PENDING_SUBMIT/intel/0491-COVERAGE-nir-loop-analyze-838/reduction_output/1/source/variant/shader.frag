#version 320 es
#define _int_1 _GLF_uniform_int_values[0]
#define _int_0 _GLF_uniform_int_values[1]
#define _int_6 _GLF_uniform_int_values[2]
#define _int_2 _GLF_uniform_int_values[3]
#define _int_5 _GLF_uniform_int_values[4]
#define _int_4 _GLF_uniform_int_values[5]

precision highp int;

precision highp float;

// Contents of _GLF_uniform_int_values: [1, 0, 6, 2, 5, 4]
layout(set = 0, binding = 0) uniform buf0 {
 int _GLF_uniform_int_values[6];
};
// Contents of one: 1
layout(set = 0, binding = 1) uniform buf1 {
 int one;
};
layout(location = 0) out vec4 _GLF_color;

void main()
{
 int arr[3] = int[3](_int_2, _int_4, _int_6);
 int index = 1;
 while(! (true && ! (one == _int_1 && index <= 1)))
  {
   arr[index] ++;
   index ++;
  }
 if(arr[_int_0] == _int_2 && arr[_int_1] == _int_5 && arr[_int_2] == _int_6)
  {
   _GLF_color = vec4(_int_1, _int_0, _int_0, _int_1);
  }
 else
  {
   _GLF_color = vec4(_int_0);
  }
}
