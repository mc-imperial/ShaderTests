#version 320 es

precision highp float;

precision highp int;

layout(location = 0) out vec4 _GLF_color;

float compute_value()
{
 for(int i = 1; i < 800; i ++)
  {
   if(gl_FragCoord.y < 0.0)
    {
     discard;
    }
   int GLF_live1_looplimiter0 = 1;
   GLF_live1_looplimiter0 = 0;
   for(int GLF_live1i = 1; GLF_live1i < 800; GLF_live1i ++)
    {
     if(GLF_live1_looplimiter0 >= 5)
      {
       if(gl_FragCoord.y < 0.0)
        {
         continue;
        }
       break;
      }
     GLF_live1_looplimiter0 ++;
     if(gl_FragCoord.x < 1.0)
      {
       _GLF_color = vec4(1.0);
      }
    }
  }
 return 1.0;
}
void main()
{
 _GLF_color = vec4(7.6, 6.5, 6.0, 891.123);
 compute_value();
}
