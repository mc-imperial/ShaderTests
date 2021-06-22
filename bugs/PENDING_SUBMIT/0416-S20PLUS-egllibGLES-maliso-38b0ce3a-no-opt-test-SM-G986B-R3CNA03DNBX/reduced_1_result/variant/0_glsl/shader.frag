#version 320 es

precision highp float;

layout(set = 0, binding = 0) uniform sampler2D tex;

precision highp int;

precision highp float;

layout(location = 0) out vec4 _GLF_color;

void main()
{
 _GLF_color = texture(tex, gl_FragCoord.xy * (1.0 / 256.0));
 uint GLF_live11uselessOutVariable = 1u;
 uint(1) < uaddCarry(uint(1), 1u, GLF_live11uselessOutVariable);
 int GLF_live19_looplimiter5 = 0;
 int GLF_live19i = 10;
 do
  {
   if(GLF_live19_looplimiter5 >= 5)
    {
     break;
    }
   GLF_live19_looplimiter5 ++;
   GLF_live19i ++;
  }
 while(GLF_live19i < 10);
}
