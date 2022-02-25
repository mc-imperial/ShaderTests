#version 320 es
#define _int_2 _GLF_uniform_int_values[0]
#define _int_1 _GLF_uniform_int_values[1]
#define _int_0 _GLF_uniform_int_values[2]
#define _int_4 _GLF_uniform_int_values[3]
#define _int_5 _GLF_uniform_int_values[4]
#define _int_7 _GLF_uniform_int_values[5]

precision highp float;

precision highp int;

// Contents of _GLF_uniform_int_values: [2, 1, 0, 4, 5, 7]
layout(set = 0, binding = 0) uniform buf0 {
 int _GLF_uniform_int_values[6];
};
layout(location = 0) out vec4 _GLF_color;

void main()
{
 int arr[3] = int[3](_int_0, _int_1, _int_2);
 int a = 1;
 for(int i = 2; i < 5; i ++)
  {
   int b = _int_1;
   while(i > _int_1)
    {
     if(b >= _int_4)
      {
       break;
      }
     b ++;
     switch(a)
      {
       case 1:
       arr[a] ++;
       case 2:
       arr[a] ++;
      }
    }
   a ++;
  }
 if(arr[_int_0] == _int_0 && arr[_int_1] == _int_7 && arr[_int_2] == _int_5)
  {
   _GLF_color = vec4(_int_1, _int_0, _int_0, _int_1);
  }
 else
  {
   _GLF_color = vec4(_int_0);
  }
}
