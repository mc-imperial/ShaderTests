#version 320 es
#define _int_0 _GLF_uniform_int_values[0]
#define _int_1 _GLF_uniform_int_values[1]

precision highp float;

precision highp int;

// Contents of _GLF_uniform_int_values: [0, 1]
layout(set = 0, binding = 0) uniform buf0 {
 int _GLF_uniform_int_values[2];
};
layout(location = 0) out vec4 _GLF_color;

int func()
{
 _GLF_color = vec4(_int_1, _int_0, _int_0, _int_1);
 while(true)
  {
   for(int i = 0; i < 1; i ++)
    {
     if(gl_FragCoord.y > 0.0)
      {
       return 1;
      }
    }
  }
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
