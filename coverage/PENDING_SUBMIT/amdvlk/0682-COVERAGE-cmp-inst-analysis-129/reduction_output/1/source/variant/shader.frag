#version 320 es
#define _int_5 _GLF_uniform_int_values[0]
#define _int_0 _GLF_uniform_int_values[1]

precision highp float;

precision highp int;

// Contents of _GLF_uniform_int_values: [5, 0]
layout(set = 0, binding = 0) uniform buf0 {
 int _GLF_uniform_int_values[2];
};
layout(location = 0) out vec4 _GLF_color;

void main()
{
 for(int i = _int_0; i < _int_5; i ++)
  {
   if(i != 1)
    {
     if(i != 2)
      {
       if(gl_FragCoord.x < 0.0)
        {
         discard;
        }
       else
        {
         _GLF_color = vec4(1, 0, 0, 1);
        }
      }
    }
  }
}
