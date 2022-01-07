#version 320 es
#define _int_0 _GLF_uniform_int_values[0]
#define _int_1 _GLF_uniform_int_values[1]
#define _int_4 _GLF_uniform_int_values[2]
#define _int_2 _GLF_uniform_int_values[3]

precision highp float;

precision highp int;

// Contents of _GLF_uniform_int_values: [0, 1, 4, 2]
layout(set = 0, binding = 0) uniform buf0 {
 int _GLF_uniform_int_values[4];
};
layout(location = 0) out vec4 _GLF_color;

int func()
{
 int a = _int_1;
 int b = _int_1;
 int arr[6] = int[6](_int_1, _int_1, _int_1, _int_1, _int_1, _int_1);
 while(b >= _int_1)
  {
   a = b ++;
   for(int i = 0; i < 3; i ++)
    {
     switch(a)
      {
       case 2:
       arr[a] ++;
       break;
       case 3:
       return arr[_int_2];
       case 5:
       arr[a] ++;
       break;
      }
    }
  }
 return _int_0;
}
void main()
{
 if(func() == _int_4)
  {
   _GLF_color = vec4(_int_1, _int_0, _int_0, _int_1);
  }
 else
  {
   _GLF_color = vec4(_int_0);
  }
}
