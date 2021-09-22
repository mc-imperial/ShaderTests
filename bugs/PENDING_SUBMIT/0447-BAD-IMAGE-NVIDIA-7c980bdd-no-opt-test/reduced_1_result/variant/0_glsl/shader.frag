#version 320 es

precision highp int;

precision highp float;

layout(location = 0) out vec4 _GLF_color;

layout(set = 0, binding = 0) uniform sampler2D tex;

void main()
{
 int i = 0;
 vec2 uvstep = vec2(1.0) * (1.0 / 256.0);
 float slope = 2.0 / 256.0;
 vec2 coord = gl_FragCoord.xy * (1.0 / 256.0);
 float refh = texture(tex, coord).y;
 coord -= uvstep;
 refh += slope;
 float h = (texture(tex, coord).y) / 1.0;
 while(h < refh && i < 32)
  {
   coord -= uvstep;
   refh += slope;
   h = texture(tex, coord).y;
   i ++;
   int GLF_live1_looplimiter1 = 0;
   while(1 >= 0)
    {
     if(GLF_live1_looplimiter1 >= 6)
      {
       break;
      }
     GLF_live1_looplimiter1 ++;
    }
  }
 _GLF_color = vec4(vec3(float(i) * (1.0 / 32.0)), 1.0);
}
