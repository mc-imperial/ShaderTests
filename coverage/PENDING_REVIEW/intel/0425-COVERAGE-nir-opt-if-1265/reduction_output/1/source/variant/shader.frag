#version 320 es
#define _int_1 _GLF_uniform_int_values[0]
#define _int_0 _GLF_uniform_int_values[1]
#define _int_4 _GLF_uniform_int_values[2]

precision highp float;

precision highp int;

// Contents of _GLF_uniform_int_values: [1, 0, 4]
layout(set = 0, binding = 0) uniform buf0 {
 int _GLF_uniform_int_values[3];
};
layout(location = 0) out vec4 _GLF_color;

void main()
{
 _GLF_color = vec4(_int_1, _int_0, _int_0, _int_1);
 if(gl_FragCoord.y < 0.0)
  {
   _GLF_color = vec4(_int_0);
  }
 for(int i = _int_0; i < _int_4; i ++)
  {
   if(gl_FragCoord.x > 0.0)
    {
     if(gl_FragCoord.y < 0.0)
      {
       _GLF_color = vec4(_int_0);
       break;
      }
    }
   if(gl_FragCoord.x > 0.0)
    {
     if(gl_FragCoord.y < 0.0)
      {
       _GLF_color = vec4(_int_0);
       if(int[4](_int_1, _int_1, _int_1, _int_1)[i] > _int_1)
        {
        }
      }
    }
  }
}
