#version 320 es

precision highp int;

precision highp float;

float GLF_live3h_r = 1.0;

precision highp float;

precision highp int;

layout(location = 0) out vec4 _GLF_color;

void main()
{
 _GLF_color = vec4(1.0);
 if(gl_FragCoord.y < 1.0)
  {
   _GLF_color = vec4(1.0, 1.0, 1.0, 93.43);
  }
 if(gl_FragCoord.x < 0.0)
  {
   _GLF_color = vec4(1.0);
  }
 if(gl_FragCoord.x < 0.0)
  {
   _GLF_color = vec4(1.0);
   if(gl_FragCoord.y < 1.0)
    {
     float[10](1.0, fract(GLF_live3h_r), 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0);
    }
  }
}
